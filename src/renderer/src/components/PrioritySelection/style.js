import { styled } from 'styled-components'

export const ViewWrap = styled.div`
  padding: 8px;
  padding-bottom: 0px;

  p {
    color: #a3a3a3;
    font-size: 12px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;

    li {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: rgba(var(--color-primary), 0.05);
      }
    }

    .active {
      color: rgba(var(--color-primary), 1);
      font-weight: bold;
      background-color: rgba(var(--color-primary), 0.1);
    }
  }
`
