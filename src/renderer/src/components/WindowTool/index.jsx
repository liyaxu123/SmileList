import { memo } from 'react'
import { WindowToolWrap } from './style'
import { Minisize, Maxsize, Close, Wintop } from './components'

const WindowTool = memo(() => {
  return (
    <WindowToolWrap>
      <Wintop />
      <Minisize />
      <Maxsize />
      <Close />
    </WindowToolWrap>
  )
})

export default WindowTool
