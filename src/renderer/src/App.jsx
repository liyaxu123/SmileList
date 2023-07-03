import { useEffect } from 'react'
import useRenderRoutes from './router'

function App() {
  // 自定义右键菜单
  useEffect(() => {
    const handleContextmenu = (ev) => {
      ev.preventDefault()
      // 向主进程发送消息
      window.electron.ipcRenderer.send('App_contextMenu')
    }

    window.addEventListener('contextmenu', handleContextmenu, false)

    return () => {
      window.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [])

  return useRenderRoutes()
}

export default App
