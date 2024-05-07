import styled from 'styled-components'

export const TodoWrap = styled.ul`
  border-left: 3px solid ${(props) => props.bordercolor};
`

export const TodoItemWrap = styled.li`
  padding: 8px 0;
  padding-right: 20px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background-color: rgba(var(--color-primary), 0.05);
  }

  .item-check {
    height: 40px;
    position: absolute;
    top: 0;
    left: 18px;
  }

  .item-bar {
    flex: 1;
    margin-left: 45px;
    vertical-align: baseline;
    line-height: 21px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item-title {
    width: 0;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 10px;
    outline: none;
  }

  .item-actions {
    display: flex;
    align-items: center;
  }

  &.active {
    background-color: rgba(var(--color-primary), 0.1);
  }
`
