import { memo } from 'react'
import { Hamburger, OrderBtn, MoreBtn } from './components'
import { HeaderWrap } from './style'

const Header = memo(() => {
  return (
    <HeaderWrap>
      <Hamburger />
      <h2>所有</h2>
      <OrderBtn />
      <MoreBtn />
    </HeaderWrap>
  )
})

export default Header
