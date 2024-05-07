import React, { memo, useState, useRef } from 'react'
import { CalendarPopoverContentWrap, CalendarPanelWrap } from './style'
import dayjs from 'dayjs'
import { myfromNow } from '@renderer/utils/time'
import { CalendarOutlined } from '@ant-design/icons'
import { Button, Divider, Popover, Segmented, Calendar, TimePicker, Select } from 'antd'

const CalendarPanel = memo(({ onOk, style, className, day, time: propTime }) => {
  const childRef = useRef(null)
  const [open, setOpen] = useState(false)
  // 是否是之前的日期
  const [isBefore, setIsBefore] = useState(false)
  // 保存日期
  const [date, setDate] = useState(day || null)
  // 保存时间
  const [time, setTime] = useState(propTime || null)
  const [selected, setSelected] = useState([])

  // 日历日期变化事件
  const onCalendarChange = (value) => {
    setDate(value)
    // 计算相差的天数
    const diff = dayjs(value).date() - dayjs().date()
    setIsBefore(diff < 0 ? true : false)
  }

  const onTimeChange = (time) => {
    setTime(time)
  }

  const handleSelectChange = (val) => {
    setSelected(val)
  }

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen)
  }

  // 清除
  const handleClear = () => {
    setDate(null)
    setTime(null)
    setSelected([])
    setOpen(false)
  }

  // 将子组件的引用传递给父组件
  // 父组件可以通过子组件的引用来调用子组件内部的方法
  React.useImperativeHandle(childRef, () => ({
    handleClear
  }))

  // 内容
  const calendarPopoverContent = (
    <CalendarPopoverContentWrap>
      {/* <div className="segmentedWrap">
        <Segmented options={['日期', '时间段']} />
      </div> */}
      {/* <Divider style={{ margin: '10px 0px 0px 0px' }} /> */}
      <div className="calendarWrap">
        <Calendar value={date} fullscreen={false} onChange={onCalendarChange} />
      </div>
      <TimePicker value={time} style={{ width: '100%' }} format="HH:mm" onChange={onTimeChange} />
      {/* <Select
        mode="multiple"
        allowClear
        value={selected}
        style={{ width: '100%', marginTop: '10px' }}
        placeholder="提醒"
        onChange={handleSelectChange}
        options={[
          {
            label: '当天（09:00）',
            value: '0'
          },
          {
            label: '提前 1 天（09:00）',
            value: '1'
          },
          {
            label: '提前 2 天（09:00）',
            value: '2'
          },
          {
            label: '提前 3 天（09:00）',
            value: '3'
          },
          {
            label: '提前 1 周（09:00）',
            value: '4'
          }
        ]}
      /> */}
      {/* 底部按钮 */}
      <div className="btnWrap">
        <Button style={{ flex: 1 }} onClick={handleClear}>
          清除
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onOk && onOk({ date: date.format('YYYY-MM-DD'), time: time?.format('HH:mm'), selected })
            setOpen(false)
          }}
          style={{ flex: 1 }}
        >
          确定
        </Button>
      </div>
    </CalendarPopoverContentWrap>
  )

  return (
    <Popover
      placement="rightTop"
      trigger="click"
      arrow={false}
      content={calendarPopoverContent}
      open={open}
      onOpenChange={handleOpenChange}
    >
      <CalendarPanelWrap style={style} className={className}>
        <CalendarOutlined style={{ cursor: 'pointer', color: isBefore ? 'red' : 'blue' }} />
        {date ? (
          <span style={{ marginLeft: '10px', fontSize: '12px', color: isBefore ? 'red' : 'blue' }}>
            {myfromNow(date)}
          </span>
        ) : null}
        {time ? (
          <span style={{ fontSize: '12px', color: isBefore ? 'red' : 'blue' }}>
            , {time.format('HH:mm')}
          </span>
        ) : null}
      </CalendarPanelWrap>
    </Popover>
  )
})

export default CalendarPanel
