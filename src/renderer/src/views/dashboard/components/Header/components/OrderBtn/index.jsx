import { memo } from 'react'
import { OrderBtnWrap } from './style'
import { SwapOutlined } from '@ant-design/icons'
import { Popover } from 'antd'

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const OrderBtn = memo(() => {
  return (
    <OrderBtnWrap title="排序">
      <Popover
        placement="bottomRight"
        content={content}
        arrow={false}
        trigger="click"
        overlayStyle={{ padding: '10px', width: '200px' }}
      >
        <SwapOutlined rotate={90} />
      </Popover>
    </OrderBtnWrap>
  )
})

export default OrderBtn
