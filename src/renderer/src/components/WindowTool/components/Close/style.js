import { styled } from 'styled-components'

export const CloseWrap = styled.div`
  padding: 9px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgb(195, 43, 29);
  }

  &:hover span {
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #a9aaab;
  }
`
