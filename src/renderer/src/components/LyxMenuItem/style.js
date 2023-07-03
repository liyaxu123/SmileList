import { styled } from 'styled-components'

export const LyxMenuItemWrap = styled.li`
  box-sizing: border-box;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--color-primary), 0.05);
  }

  &.active {
    background-color: rgba(var(--color-primary), 0.1);
  }

  .menuItem-left {
    display: flex;
    align-items: center;

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      line-height: 20px;
    }

    .title {
      line-height: 20px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      color: rgba(25, 25, 25, 1);
    }
  }

  .menuItem-right {
    display: flex;
    align-items: center;
    gap: 10px;

    .actions {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #757575;

      .actionIcon {
        font-size: 16px;
        margin-top: 2px;

        &:hover {
          color: '#000';
        }
      }
    }
  }
`
