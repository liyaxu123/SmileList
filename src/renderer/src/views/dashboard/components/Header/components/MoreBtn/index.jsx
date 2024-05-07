import React, { memo } from 'react'
import { MoreBtnWrap, ViewWrap } from './style'
import {
  MoreOutlined,
  BarsOutlined,
  AppstoreOutlined,
  NodeExpandOutlined,
  CheckSquareOutlined,
  InfoCircleOutlined,
  HistoryOutlined,
  PrinterOutlined
} from '@ant-design/icons'
import { Dropdown, theme, Divider } from 'antd'
const { useToken } = theme

const MoreBtn = memo(() => {
  const { token } = useToken()

  const items = [
    {
      key: '1',
      label: '隐藏已完成',
      icon: <CheckSquareOutlined />
    },
    {
      key: '2',
      label: '显示详细',
      icon: <InfoCircleOutlined />
    },
    {
      key: '3',
      label: '显示倒数日',
      icon: <HistoryOutlined />
    },
    {
      key: '4',
      label: '打印',
      icon: <PrinterOutlined />,
      children: [
        {
          key: '4-1',
          label: '打印标题'
        },
        {
          key: '4-2',
          label: '打印标题和内容'
        }
      ]
    }
  ]

  return (
    <MoreBtnWrap title="更多">
      <Dropdown
        menu={{ items }}
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
              <p>视图</p>
              <ul>
                <li className="active" title="列表视图">
                  <BarsOutlined />
                </li>
                <li title="看板视图">
                  <AppstoreOutlined />
                </li>
                <li title="时间线视图">
                  <NodeExpandOutlined />
                </li>
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
        <MoreOutlined rotate={90} />
      </Dropdown>
    </MoreBtnWrap>
  )
})

export default MoreBtn
