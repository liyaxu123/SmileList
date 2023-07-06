import { memo } from 'react'
import { CloseWrap } from './style'
import { Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'

const Close = memo(() => {
  return (
    <CloseWrap
      title="关闭"
      onClick={() => {
        Modal.confirm({
          title: '是否关闭当前应用？',
          icon: <ExclamationCircleFilled />,
          content: '系统可能不会保存您的更改操作',
          onOk() {
            window.electron.ipcRenderer.send('closMainWin')
          }
        })
      }}
    >
      <span className="iconfont icon-chuangti-guanbi"></span>
    </CloseWrap>
  )
})

export default Close
