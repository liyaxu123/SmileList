import { styled } from 'styled-components'

export const LayoutWrap = styled.div`
  height: 100vh;
  display: flex;

  .layout-left {
    /* 设置该区域可拖拽 */
    -webkit-app-region: drag;
    background-color: #e5e8ed;
  }
`
