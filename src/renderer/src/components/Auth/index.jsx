import { memo } from 'react'
import { Navigate } from 'react-router-dom'
import useUserStore from '@renderer/store/userStore'

const Auth = memo((props) => {
  const token = useUserStore((state) => state.token)

  if (token) return props.children

  return <Navigate to="/login"></Navigate>
})

export default Auth
