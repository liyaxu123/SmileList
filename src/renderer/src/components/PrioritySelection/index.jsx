import React, { memo } from 'react'
import {
  DownOutlined,
  AppstoreAddOutlined,
  FileSearchOutlined,
  FlagFilled
} from '@ant-design/icons'
import { Dropdown, theme, Divider } from 'antd'
import { ViewWrap } from './style'
import useTodoStore from '@renderer/store/todoStore'

const { useToken } = theme

const PrioritySelection = memo(({ onPriorityChange }) => {
  const { token } = useToken()
  const { curPriority, setCurPriority } = useTodoStore()

  // 菜单列表
  const items = [
    {
      key: '0',
      label: (
        <span>
          添加到 <strong>收集箱</strong>
        </span>
      ),
      icon: <AppstoreAddOutlined />,
      children: [
        {
          key: '1-1',
          label: '收集箱'
        },
        {
          key: '1-2',
          label: '语文'
        },
        {
          key: '1-3',
          label: '数学'
        }
      ]
    },
    {
      key: '2',
      label: '从模板添加',
      icon: <FileSearchOutlined />
    }
  ]

  // 优先级列表
  const priorityList = [
    {
      id: 0,
      title: '重要切紧急',
      icon: <FlagFilled style={{ color: '#e03131' }} />
    },
    {
      id: 1,
      title: '重要不紧急',
      icon: <FlagFilled style={{ color: '#ffb000' }} />
    },
    {
      id: 2,
      title: '不重要但紧急',
      icon: <FlagFilled style={{ color: '#4772fa' }} />
    },
    {
      id: 3,
      title: '不重要不紧急',
      icon: <FlagFilled style={{ color: '#989ba2' }} />
    }
  ]

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['1-1'],
        onClick: (val) => {
          console.log(val)
        }
      }}
      trigger="click"
      dropdownRender={(menu) => (
        <div
          style={{
            backgroundColor: token.colorBgElevated,
            borderRadius: token.borderRadiusLG,
            boxShadow: token.boxShadowSecondary
          }}
        >
          <ViewWrap>
            <p>优先级</p>
            <ul>
              {priorityList.map((item, index) => (
                <li
                  key={item.id}
                  className={curPriority === index ? 'active' : null}
                  title={item.title}
                  onClick={() => {
                    setCurPriority(index)
                    // 优先级变化的回调
                    onPriorityChange({
                      id: priorityList[index].id,
                      title: priorityList[index].title
                    })
                  }}
                >
                  {item.icon}
                </li>
              ))}
            </ul>
          </ViewWrap>

          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu, {
            style: {
              boxShadow: 'none'
            }
          })}
        </div>
      )}
    >
      <DownOutlined />
    </Dropdown>
  )
})

export default PrioritySelection
