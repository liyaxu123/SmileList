import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutMenuWrap } from './style'
import Logo from '@renderer/assets/logo.svg'
import { Dropdown, Tooltip, message, Modal } from 'antd'
import {
  CheckSquareOutlined,
  BulbOutlined,
  DeploymentUnitOutlined,
  FlagOutlined,
  HistoryOutlined,
  SettingOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  SkinOutlined,
  LinkOutlined,
  PoweroffOutlined,
  ExclamationCircleFilled,
  UserOutlined
} from '@ant-design/icons'
import useUserStore from '@renderer/store/userStore'

// 菜单列表
const menuList = [
  {
    title: '任务',
    path: '/dashboard',
    icon: <CheckSquareOutlined />
  },
  {
    title: '发现',
    path: '/find',
    icon: <BulbOutlined />
  },
  {
    title: '我的收藏',
    path: '/collect',
    icon: <DeploymentUnitOutlined />
  },
  {
    title: '组件',
    path: '/comp',
    icon: <FlagOutlined />
  }
]

const settingItems = [
  {
    key: '0',
    label: '个人中心',
    icon: <UserOutlined />
  },
  {
    type: 'divider'
  },
  {
    key: '1',
    label: '用户指南',
    icon: <QuestionCircleOutlined />
  },
  {
    type: 'divider'
  },
  {
    key: '2',
    label: '外观主题',
    icon: <SkinOutlined />,
    children: [
      {
        key: '2-1',
        label: '跟随系统'
      },
      {
        key: '2-2',
        label: '浅色模式'
      },
      {
        key: '2-3',
        label: '深色模式'
      }
    ]
  },
  {
    key: '4',
    label: '分享管理',
    icon: <LinkOutlined />
  },
  {
    key: '5',
    label: '退出当前账号',
    danger: true,
    icon: <PoweroffOutlined />
  },
  {
    type: 'divider'
  },
  {
    key: '6',
    label: '偏好设置',
    icon: <SettingOutlined />
  }
]

const LayoutMenu = memo(() => {
  const navigate = useNavigate()
  const layoutAction = useUserStore((state) => state.layoutAction)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSettingClick = ({ key }) => {
    console.log(key)
    switch (key) {
      case '1':
        message.info(`点击了 item ${key}`)
        break
      case '5':
        Modal.confirm({
          title: '温馨提醒',
          icon: <ExclamationCircleFilled />,
          content: '是否退出当前账号？',
          onOk() {
            layoutAction()
          },
          onCancel() {
            console.log('Cancel')
          }
        })
        break
      default:
        break
    }
  }

  // 菜单项点击事件
  const handleMenuItemClick = (menuItem, index) => {
    setActiveIndex(index)
    navigate(menuItem.path)
  }

  return (
    <LayoutMenuWrap>
      <div className="menu-top">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* 菜单项 */}
        <ul className="menu-list">
          {menuList.map((item, index) => (
            <Tooltip placement="right" key={item.title} title={item.title}>
              <li
                className={`menu-item ${activeIndex === index ? 'active' : null}`}
                onClick={() => handleMenuItemClick(item, index)}
              >
                {item.icon}
              </li>
            </Tooltip>
          ))}
        </ul>
      </div>

      {/* 底部 */}
      <div className="menu-bottom">
        <ul className="menu-list">
          <li className="menu-item">
            <HistoryOutlined />
          </li>
          <li className="menu-item">
            <BellOutlined />
          </li>
          <li className="menu-item">
            <Dropdown
              menu={{
                items: settingItems,
                onClick: handleSettingClick
              }}
            >
              <SettingOutlined />
            </Dropdown>
          </li>
        </ul>
      </div>
    </LayoutMenuWrap>
  )
})

export default LayoutMenu
