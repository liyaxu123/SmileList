import dayjs from 'dayjs'

// 相对时间格式化
export const myfromNow = (dayString) => {
  let res = ''
  // 计算相差的天数
  const diff = dayjs(dayString).date() - dayjs().date()

  if (diff < -2) {
    res = dayjs(dayString).format('MM月DD日')
  }
  if (diff === -2) {
    res = '前天'
  }
  if (diff === -1) {
    res = '昨天'
  }
  if (diff === 0) {
    res = '今天'
  }
  if (diff === 1) {
    res = '明天'
  }
  if (diff === 2) {
    res = '后天'
  }
  if (diff === 3) {
    res = '大后天'
  }
  if (diff > 3) {
    res = dayjs(dayString).format('MM月DD日')
  }

  return res
}
