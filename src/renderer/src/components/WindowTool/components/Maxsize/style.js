import { styled } from 'styled-components'

export const MaxsizeWrap = styled.div`
  padding: 9px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgba(var(--color-primary), 0.05);
  }

  span {
    font-size: 12px;
    color: #a9aaab;
  }
`
