import { styled } from 'styled-components'

export const DashboardWrap = styled.div`
  width: calc(100vw - 60px);
  height: 100vh;
  position: relative;

  .left-pane {
    box-sizing: border-box;
    height: 100%;
    padding: 8px;
  }

  .right-pane {
  }
`

export const RightPaneWrap = styled.div`
  padding: 12px;
`
