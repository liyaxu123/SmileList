import { styled } from 'styled-components'

export const OrderBtnWrap = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #757575;

  &:hover {
    background-color: rgba(var(--color-primary), 0.05);
  }
`
