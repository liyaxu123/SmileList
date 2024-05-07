import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useTodoStore = create(
  persist(
    immer((set) => ({
      todoList: [
        {
          id: 1,
          collectionName: '收集箱', // 集合名称
          color: '#f1c231', // 集合的颜色
          canRemove: false, // 自带的集合，不可删除
          // 集合下的待办事项列表
          todos: [
            {
              id: 11,
              title: '学习TS', // 待办事项名称
              date: '2023-07-21', // 日期
              time: '12:30', // 时间
              done: false, // 是否完成
              // 优先级
              priority: 3,
              // 标签
              tags: []
            }
          ]
        },
        {
          id: 2,
          collectionName: '今天',
          canRemove: false, // 自带的集合，不可删除
          color: '#f1c231',
          todos: []
        },
        {
          id: 3,
          collectionName: '已完成',
          canRemove: false, // 自带的集合，不可删除
          color: '#f1c231',
          todos: []
        },
        {
          id: 4,
          collectionName: '已过期',
          color: '#f1c231',
          canRemove: false, // 自带的集合，不可删除
          todos: []
        },
        {
          id: 5,
          collectionName: '语文',
          color: '#f1c231',
          todos: [
            {
              id: 51,
              title: '学习TS',
              date: '2023-07-21',
              time: '12:30',
              done: true,
              priority: 0,
              tags: [
                {
                  id: '111',
                  label: '学习',
                  color: '#d25294'
                },
                {
                  id: '222',
                  label: '知识',
                  color: '#b79a8f'
                }
              ]
            },
            {
              id: 52,
              title: '古诗词',
              date: '2023-07-24',
              time: '15:30',
              done: false,
              priority: 2,
              tags: [
                {
                  id: '333',
                  label: '知识',
                  color: '#b79a8f'
                },
                {
                  id: '444',
                  label: '娱乐',
                  color: '#b79a8f'
                }
              ]
            }
          ]
        }
      ],
      // 添加到的集合ID，默认为：1（收集箱）
      appendToCollection: 1,
      // 优先级列表
      priorityMap: [
        {
          label: '重要切紧急',
          value: 0
        },
        {
          label: '重要不紧急',
          value: 1
        },
        {
          label: '不重要但紧急',
          value: 2
        },
        {
          label: '不重要不紧急',
          value: 3
        }
      ],
      // 当前的优先级，默认为：不重要不紧急
      curPriority: 3,

      // 向 todoList 里面添加 todo
      addTodo: (todo) =>
        set((state) => {
          // 获取集合在 todoList 中的索引
          const collectionIndexInTodoList = state.todoList.findIndex(
            (item) => item.id === state.appendToCollection
          )

          // 将 todo 添加到对应的 todoList 中
          state.todoList[collectionIndexInTodoList].todos.push(todo)
        }),

      // 设置添加到的集合
      setAppendToCollection: (collectionId) =>
        set((state) => {
          state.appendToCollection = collectionId
        }),

      // 设置要添加的优先级
      setCurPriority: (priority) =>
        set((state) => {
          state.curPriority = priority
        })
    })),
    {
      name: 'todoList',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useTodoStore
