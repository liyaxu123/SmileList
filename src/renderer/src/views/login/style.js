import { styled } from 'styled-components'

export const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #4c6fff 50%, #e5ebf5 50%);
  display: flex;
  justify-content: center;
  align-items: center;

  .login_box {
    width: 800px;
    height: 80%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;

    .left_box {
      flex: 1;
      background-color: #f7fafc;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 80%;
        user-select: none;
      }
    }

    .right_box {
      flex: 1;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .login_form_box {
        width: 80%;

        .title {
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: 12px;
        }

        .login-form-forgot {
          float: right;
        }
      }
    }
  }
`
