import { memo } from 'react'
import { Collapse } from 'antd'
import TodoItem from '@renderer/components/TodoItem'
import { TodoWrap } from '@renderer/components/TodoItem/style'
import useTodoStore from '@renderer/store/todoStore'
import dayjs from 'dayjs'

const CollapseLabel = memo(({ title, count }) => {
  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>{title}</span>
      <span style={{ color: '#b1b1b1', marginLeft: '8px' }}>{count}</span>
    </div>
  )
})

const TodoList = memo(() => {
  const { todoList } = useTodoStore()
  console.log(todoList)

  const list = todoList
    .filter((item) => item.todos.length > 0)
    .map((item) => ({
      key: item.id,
      label: <CollapseLabel title={item.collectionName} count={item.todos.length} />,
      children: (
        <TodoWrap bordercolor={item.color}>
          {item.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              collectionName={item.collectionName}
              collectionColor={item.color}
              title={todo.title}
              date={dayjs(todo.date)}
              time={dayjs(`${todo.date} ${todo.time}`)}
              done={todo.done}
              tags={todo.tags}
            />
          ))}
        </TodoWrap>
      )
    }))

  console.log(list)

  // const items = [
  //   {
  //     key: '1',
  //     label: <CollapseLabel title="收集箱" count="16" />,
  //     children: (
  //       <TodoWrap bordercolor="#f1c231">
  //         <TodoItem />
  //       </TodoWrap>
  //     )
  //   },
  //   {
  //     key: '2',
  //     label: <CollapseLabel title="已完成" count="4" />,
  //     children: <TodoItem />
  //   },
  //   {
  //     key: '3',
  //     label: <CollapseLabel title="语文" count="3" />,
  //     children: <TodoItem />
  //   }
  // ]

  return <Collapse defaultActiveKey={['1']} ghost items={list} />
})

export default TodoList
