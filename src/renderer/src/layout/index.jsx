import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutMenu } from './components'
import { LayoutWrap } from './style'

const Layout = memo(() => {
  return (
    <LayoutWrap>
      <div className="layout-left">
        <LayoutMenu />
      </div>
      <div className="layout-right">
        <Outlet />
      </div>
    </LayoutWrap>
  )
})

export default Layout
