import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: {},
      token: '',

      setTokenAction: (token) => set({ token: token }),
      // 退出登录
      layoutAction: () => {
        set({ token: '' })
        localStorage.clear()
      }
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useUserStore
