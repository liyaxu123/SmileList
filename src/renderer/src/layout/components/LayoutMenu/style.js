import { styled } from 'styled-components'

export const LayoutMenuWrap = styled.div`
  width: 60px;
  height: 100%;
  background-color: #e5e8ed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .menu-top {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      width: 35px;
      height: 35px;
      cursor: pointer;
      /* 设置不能被拖拽 */
      -webkit-app-region: no-drag;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .menu-list {
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 30px;
      -webkit-app-region: no-drag;

      .menu-item {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding: 10px;
        font-size: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.active {
          background-color: #d9dce0;
        }

        &:hover {
          background-color: #d9dce0;
        }
      }
    }
  }

  .menu-bottom {
    width: 100%;
    height: 250px;

    .menu-list {
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 30px;
      -webkit-app-region: no-drag;

      .menu-item {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding: 10px;
        font-size: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.active {
          background-color: #d9dce0;
        }

        &:hover {
          background-color: #d9dce0;
        }
      }
    }
  }
`
