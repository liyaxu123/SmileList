import { memo } from 'react'
import { Spin } from 'antd'
import { LoadingWrap } from './style'

const Loading = memo(() => {
  return (
    <LoadingWrap>
      <Spin tip="小笑残虹" size="large">
        <div className="content" />
      </Spin>
    </LoadingWrap>
  )
})

export default Loading
