import { styled } from 'styled-components'

export const CalendarPopoverContentWrap = styled.div`
  width: 250px;

  .segmentedWrap {
    display: flex;
    justify-content: center;
  }

  .btnWrap {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  :where(.css-dev-only-do-not-override-1wazalj).ant-picker .ant-picker-input > input {
    text-align: center;
  }
`

export const CalendarPanelWrap = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`
