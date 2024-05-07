import { styled } from 'styled-components'

export const HamburgerWrap = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 8px;
  font-size: 20px;

  &:hover {
    background-color: rgba(var(--color-primary), 0.05);
  }
`
