import { memo } from 'react'
import SplitPane from 'react-split-pane'
import { theme } from 'antd'
import { DashboardWrap, RightPaneWrap } from './style'
import LyxMenu from '@renderer/components/LyxMenu'
import {
  BookOutlined,
  ScheduleOutlined,
  CalendarOutlined,
  InboxOutlined,
  PlusOutlined,
  CheckSquareOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { Scrollbars } from 'react-custom-scrollbars'
import WindowTool from '@renderer/components/WindowTool'
import { Header, AddInput } from './components'
import TodoList from '@renderer/components/TodoList'

const Dashboard = memo(() => {
  const { token } = theme.useToken()

  const menuList = [
    {
      key: '1',
      title: '所有',
      icon: <BookOutlined />,
      dotColor: '#f1c231',
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: true,
      count: 4
    },
    {
      key: '2',
      title: '今天',
      icon: <ScheduleOutlined />,
      dotColor: '#3bb780',
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: true,
      count: 1
    },
    {
      key: '3',
      title: '最近7天',
      icon: <CalendarOutlined />,
      dotColor: '#3bb780',
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: true,
      count: 1
    },
    {
      key: '4',
      title: '收集箱',
      icon: <InboxOutlined />,
      dotColor: '#3bb780',
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: true,
      count: 1
    },
    {
      key: '5',
      type: 'divider'
    },
    {
      key: '6',
      type: 'collapse',
      list: [
        {
          key: '6-1',
          label: '清单',
          children: [
            {
              key: '6-1-1',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            },
            {
              key: '6-1-2',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            }
          ],
          extra: (
            <PlusOutlined
              onClick={(event) => {
                event.stopPropagation()
              }}
            />
          ),
          style: {
            marginBottom: 8,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: 'none'
          }
        },
        {
          key: '6-2',
          label: '标签',
          children: [
            {
              key: '6-2-1',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            },
            {
              key: '6-2-2',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            }
          ],
          extra: (
            <PlusOutlined
              onClick={(event) => {
                event.stopPropagation()
              }}
            />
          ),
          style: {
            marginBottom: 8,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: 'none'
          }
        },
        {
          key: '6-3',
          label: '过滤器',
          children: [
            {
              key: '6-3-1',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            },
            {
              key: '6-3-2',
              title: '语文',
              icon: <CheckSquareOutlined />,
              actions: [
                {
                  key: '1',
                  label: '编辑',
                  onClick: () => {
                    alert('编辑')
                  }
                },
                {
                  key: '2',
                  label: '隐藏',
                  onClick: () => {
                    alert('隐藏')
                  }
                }
              ],
              dotColor: '#f1c231',
              showCount: true,
              count: 1
            }
          ],
          extra: (
            <PlusOutlined
              onClick={(event) => {
                event.stopPropagation()
              }}
            />
          ),
          style: {
            marginBottom: 8,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: 'none'
          }
        }
      ]
    },
    {
      key: '7',
      type: 'divider'
    },
    {
      key: '8',
      title: '已完成',
      icon: <CheckSquareOutlined />,
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: false
    },
    {
      key: '9',
      title: '垃圾桶',
      icon: <DeleteOutlined />,
      actions: [
        {
          key: '1',
          label: '编辑',
          onClick: () => {
            alert('编辑')
          }
        },
        {
          key: '2',
          label: '隐藏',
          onClick: () => {
            alert('隐藏')
          }
        }
      ],
      showCount: false
    }
  ]

  return (
    <DashboardWrap>
      {/* 分割面板 */}
      <SplitPane allowResize={true} split="vertical" minSize={213} maxSize={400} defaultSize={260}>
        <Scrollbars autoHide>
          <div className="left-pane">
            <LyxMenu
              list={menuList}
              onClick={(data) => {
                console.log(data)
              }}
            />
          </div>
        </Scrollbars>

        <div className="right-pane">
          <WindowTool />
          <RightPaneWrap>
            <Header />
            <AddInput />
            <TodoList />
          </RightPaneWrap>
        </div>
      </SplitPane>
    </DashboardWrap>
  )
})

export default Dashboard
