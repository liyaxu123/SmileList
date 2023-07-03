import { lazy, Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Auth from '../components/Auth'
import Layout from '@renderer/layout'
import Loading from '@renderer/components/Loading'

// 实现路由懒加载
const lazyLoad = (path) => {
  const Comp = lazy(() => import(path))

  return (
    <Suspense fallback={<Loading />}>
      <Comp />
    </Suspense>
  )
}

const useRenderRoutes = () => {
  const routes = [
    {
      path: '/login',
      element: lazyLoad('../views/login')
    },
    {
      path: '/',
      element: (
        <Auth>
          <Layout />
        </Auth>
      ),
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard" />
        },
        {
          path: '/dashboard',
          element: lazyLoad('../views/dashboard')
        },
        {
          path: '/find',
          element: lazyLoad('../views/find')
        },
        {
          path: '/collect',
          element: lazyLoad('../views/collect')
        },
        {
          path: '/comp',
          element: lazyLoad('../views/comp')
        }
      ]
    },
    {
      path: '*',
      element: ''
    }
  ]

  return useRoutes(routes)
}

export default useRenderRoutes
