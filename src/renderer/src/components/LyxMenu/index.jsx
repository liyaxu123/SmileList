import { memo, useState } from 'react'
import { Divider, Collapse, theme } from 'antd'
import LyxMenuItem from '../LyxMenuItem'
import { LyxMenuWrap } from './style'
import { CaretRightOutlined } from '@ant-design/icons'

const LyxMenu = memo(({ list, onClick }) => {
  const { token } = theme.useToken()
  const [activeKey, setActiveKey] = useState('1')

  return (
    <LyxMenuWrap>
      {list.map((item) => {
        // 分割线
        if (item.type === 'divider') {
          return <Divider key={item.key} style={{ marginTop: '8px', marginBottom: '8px' }} />
        } else if (item.type === 'collapse') {
          // 重构折叠面板的数据列表，将配置对象转为 LyxMenuItem
          const collapseItems = item.list.map((child) => ({
            ...child,
            children: child.children.map((it) => (
              <LyxMenuItem
                className={it.key === activeKey ? 'active' : null}
                key={it.key}
                {...it}
                onClick={() => {
                  setActiveKey(it.key)
                  onClick(it)
                }}
              />
            ))
          }))

          return (
            <Collapse
              key={item.key}
              bordered={false}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              style={{ background: token.colorBgContainer }}
              items={collapseItems}
            />
          )
        } else {
          return (
            <LyxMenuItem
              className={item.key === activeKey ? 'active' : null}
              key={item.key}
              {...item}
              onClick={() => {
                setActiveKey(item.key)
                onClick(item)
              }}
            />
          )
        }
      })}
    </LyxMenuWrap>
  )
})

export default LyxMenu
