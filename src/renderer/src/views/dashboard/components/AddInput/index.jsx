import { memo, useState, useRef } from 'react'
import { Input, Divider } from 'antd'
import useTodoStore from '@renderer/store/todoStore'
import CalendarPanel from '@renderer/components/CalendarPanel'
import PrioritySelection from '@renderer/components/PrioritySelection'
import { nanoid } from 'nanoid'

const AddInput = memo(() => {
  const calendarPanelRef = useRef(null)
  const { curPriority, addTodo } = useTodoStore()
  // input的值
  const [value, setValue] = useState('')
  const [timeObj, setTimeObj] = useState({
    date: null,
    time: null
  })

  // 处理回车事件
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      console.log('回车事件', value, timeObj)
      // 添加 todo 到 store
      addTodo({
        id: nanoid(),
        title: value,
        date: timeObj?.date,
        time: timeObj?.time,
        done: false,
        priority: curPriority,
        tags: []
      })

      // 还原 AddInput
      setValue('')
      // 清除 CalendarPanel
      if (calendarPanelRef.current) {
        calendarPanelRef.current.handleClear() // 调用子组件的方法
      }
    }
  }

  return (
    <div>
      <Input
        value={value}
        addonAfter={
          <div>
            {/* 日历时间选择组件 */}
            <CalendarPanel
              ref={calendarPanelRef}
              onOk={(data) => {
                setTimeObj(data)
              }}
            />
            <Divider type="vertical" />
            {/* 优先级选择组件 */}
            <PrioritySelection
              onPriorityChange={(data) => {
                console.log(data)
              }}
            />
          </div>
        }
        placeholder='+ 添加任务至"收集箱"，回车即可保存'
        onInput={(e) => {
          setValue(e.target.value)
        }}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
})

export default AddInput
