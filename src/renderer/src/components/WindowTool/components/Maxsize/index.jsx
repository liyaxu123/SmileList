import { memo, useEffect, useState } from 'react'
import { MaxsizeWrap } from './style'

const Maxsize = memo(() => {
  const [maxState, setMaxState] = useState('')

  useEffect(() => {
    window.electron.ipcRenderer.on('maximizedChange', (ev, maxState) => {
      setMaxState(maxState)
    })
  }, [])

  return (
    <MaxsizeWrap
      title={maxState === 'maxed' ? '向下还原' : '最大化'}
      onClick={() => {
        window.electron.ipcRenderer.send('mainWinMax')
      }}
    >
      <span
        className={`iconfont icon-chuangti-${
          maxState === 'maxed' ? 'xiangxiahuanyuan' : 'zuidahua'
        }`}
      ></span>
    </MaxsizeWrap>
  )
})

export default Maxsize
