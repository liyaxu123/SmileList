import { memo } from 'react'
import useUserStore from '@renderer/store/userStore'
import { useNavigate } from 'react-router-dom'
import { LoginWrap } from './style'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import banner from '@renderer/assets/bg.svg'

const Login = memo(() => {
  const setTokenAction = useUserStore((state) => state.setTokenAction)
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log(values)
    setTokenAction('Token')
    navigate('/dashboard')
  }

  return (
    <LoginWrap>
      <div className="login_box">
        <div className="left_box">
          <img src={banner} alt="bg" />
        </div>
        <div className="right_box">
          <div className="login_form_box">
            <p className="title">登录</p>
            <Form size="large" style={{ width: '100%' }} onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入您的用户名！'
                  }
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入您的密码！'
                  }
                ]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="##">
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </LoginWrap>
  )
})

export default Login
