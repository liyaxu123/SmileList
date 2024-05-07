import { memo } from 'react'
import { TodoItemWrap } from './style'
import { Checkbox, Tag, Badge } from 'antd'
import CalendarPanel from '@renderer/components/CalendarPanel'

const TodoItem = memo(({ collectionName, collectionColor, title, date, time, done, tags }) => {
  console.log(done)

  return (
    <TodoItemWrap>
      <Checkbox
        defaultChecked={done}
        onChange={(e) => {
          console.log(e.target.checked)
        }}
        className="item-check"
      />
      <div className="item-bar">
        <div className="item-title" suppressContentEditableWarning contentEditable="true">
          {title}
        </div>
        <div className="item-actions">
          {tags?.length > 0 &&
            tags.map((item) => (
              <Tag key={item.id} color={item.color}>
                {item.label}
              </Tag>
            ))}
          <Badge color={collectionColor} text={collectionName} />
          <CalendarPanel
            day={date}
            time={time}
            style={{ marginLeft: '10px' }}
            onOk={(data) => {
              console.log(data)
            }}
          />
        </div>
      </div>
    </TodoItemWrap>
  )
})

export default TodoItem
