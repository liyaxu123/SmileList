import { memo, useState } from 'react'
import { LyxMenuItemWrap } from './style'
import { EllipsisOutlined } from '@ant-design/icons'
import { Badge, Dropdown } from 'antd'

const LyxMenuItem = memo(
  ({ icon, title, dotColor, actions, showCount, count, className, onClick }) => {
    const [toggle, setToggle] = useState(false)

    return (
      <LyxMenuItemWrap
        className={className}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        onClick={onClick}
      >
        <div className="menuItem-left">
          <div className="icon">{icon}</div>
          <p className="title">{title}</p>
        </div>
        <div className="menuItem-right">
          <Badge color={dotColor} />
          <div className="actions">
            {toggle ? (
              <Dropdown menu={{ items: actions }} trigger={['click']}>
                <EllipsisOutlined className="actionIcon" />
              </Dropdown>
            ) : showCount && count > 0 ? (
              <p>{count}</p>
            ) : null}
          </div>
        </div>
      </LyxMenuItemWrap>
    )
  }
)

export default LyxMenuItem
