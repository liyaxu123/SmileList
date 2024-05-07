import { memo, useState } from 'react'
import { HamburgerWrap } from './style'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

const Hamburger = memo(() => {
  const [isFold, setIsFold] = useState(false)

  return (
    <HamburgerWrap onClick={() => setIsFold(!isFold)}>
      <Tooltip title={isFold ? '展开' : '折叠'}>
        {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Tooltip>
    </HamburgerWrap>
  )
})

export default Hamburger
