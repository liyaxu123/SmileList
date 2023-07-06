import { app, shell, BrowserWindow, ipcMain, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/favicon.ico?asset'
import server from '../server/index'
import getIPAddress from '../server/utils/getIPAddress'
import config from '../server/config'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 800,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    // 开启自定义窗口
    frame: false,
    ...(process.platform === 'linux' ? { icon } : { icon }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // 防止窗口内容被其他应用捕获，可实现窗口隐形功能，开启后录屏或者截屏中不可见，可以在录课、直播及在线会议中展示提词内容，防止忘词。同时，提词内容仅自己可见，其他人无法看到。
  mainWindow.setContentProtection(true)

  // 自定义右键菜单
  ipcMain.on('App_contextMenu', () => {
    let contextTemp = [
      { label: 'Run Code' },
      { label: '转到定义' },
      { type: 'separator' },
      {
        label: '刷新页面',
        click: () => {
          // 获取当前窗口
          const currentWindow = BrowserWindow.getFocusedWindow()
          // 刷新当前页面
          currentWindow.reload()
        }
      },
      {
        label: '打开控制台',
        click: () => {
          mainWindow.webContents.openDevTools()
        }
      }
    ]

    let menu = Menu.buildFromTemplate(contextTemp)

    menu.popup({ window: mainWindow })
  })

  // 窗口置顶
  ipcMain.on('setWinTop', () => {
    // 判断窗口是否置顶
    if (!mainWindow.isAlwaysOnTop()) {
      // 置顶窗口
      mainWindow.setAlwaysOnTop(true)
      BrowserWindow.getFocusedWindow().webContents.send('winTopChange', true)
    } else {
      // 取消置顶
      mainWindow.setAlwaysOnTop(false)
      BrowserWindow.getFocusedWindow().webContents.send('winTopChange', false)
    }
  })

  // 窗口最小化
  ipcMain.on('mainWinMin', () => {
    // 判断窗口是否最小化
    if (!mainWindow.isMinimized()) {
      // 最小化窗口
      mainWindow.minimize()
    }
  })

  // 窗口最大化
  ipcMain.on('mainWinMax', () => {
    // 判断窗口是否最大化
    if (!mainWindow.isMaximized()) {
      // 最大化窗口
      mainWindow.maximize()
      // 向渲染进程发送消息
      BrowserWindow.getFocusedWindow().webContents.send('maximizedChange', 'maxed')
    } else {
      // 将窗口从最小化状态恢复到以前的状态
      mainWindow.restore()
      BrowserWindow.getFocusedWindow().webContents.send('maximizedChange', 'restore')
    }
  })

  // 关闭窗口
  ipcMain.on('closMainWin', () => {
    mainWindow.close()
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  // 启动服务器
  server.listen(config.port, () => {
    console.log(`服务器启动成功：${getIPAddress()}:${config.port}`)
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
