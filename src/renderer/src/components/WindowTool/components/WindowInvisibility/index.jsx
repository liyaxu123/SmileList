import { memo, useState } from 'react'
import { WindowInvisibilityWrap } from './style'
import { Tooltip } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const WindowInvisibility = memo(() => {
  const [winHidden, setWinHidden] = useState(false)

  return (
    <Tooltip
      title={winHidden ? '窗口隐形：录屏或者截屏中窗口不可见' : '窗口可见：录屏或者截屏中窗口可见'}
    >
      <WindowInvisibilityWrap
        onClick={() => {
          let flag = !winHidden
          setWinHidden(flag)
          window.electron.ipcRenderer.send('mainWinHide', flag)
        }}
      >
        {winHidden ? <EyeInvisibleOutlined style={{ color: '#1677ff' }} /> : <EyeOutlined />}
      </WindowInvisibilityWrap>
    </Tooltip>
  )
})

export default WindowInvisibility
