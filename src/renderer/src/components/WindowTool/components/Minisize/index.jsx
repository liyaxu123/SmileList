import { memo } from 'react'
import { MinisizeWrap } from './style'

const Minisize = memo(() => {
  return (
    <MinisizeWrap
      title="最小化"
      onClick={() => {
        // 向主进程发送消息
        window.electron.ipcRenderer.send('mainWinMin')
      }}
    >
      <span className="iconfont icon-chuangti-zuixiaohua"></span>
    </MinisizeWrap>
  )
})

export default Minisize
