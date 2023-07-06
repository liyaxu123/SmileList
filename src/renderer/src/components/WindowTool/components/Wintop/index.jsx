import { memo, useEffect, useState } from 'react'
import { WintopWrap } from './style'

const Wintop = memo(() => {
  const [isTop, setIsTop] = useState(false)

  useEffect(() => {
    window.electron.ipcRenderer.on('winTopChange', (ev, state) => {
      setIsTop(state)
    })
  }, [])

  return (
    <WintopWrap
      title="置顶"
      onClick={() => {
        window.electron.ipcRenderer.send('setWinTop')
      }}
    >
      <span
        style={{ color: isTop ? 'red' : null }}
        className="iconfont icon-chuangti-zhiding"
      ></span>
    </WintopWrap>
  )
})

export default Wintop
