import { memo } from 'react'
import { WindowToolWrap } from './style'
import { Minisize, Maxsize, Close, Wintop, WindowInvisibility } from './components'

const WindowTool = memo(() => {
  return (
    <WindowToolWrap>
      <WindowInvisibility />
      <Wintop />
      <Minisize />
      <Maxsize />
      <Close />
    </WindowToolWrap>
  )
})

export default WindowTool
