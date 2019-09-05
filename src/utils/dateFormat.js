export function dateTimeFormat (time) {
  if (time) {
    var currentData = new Date(time)
    // 获取年份
    var year = currentData.getFullYear() + '-'
    // 获取月份
    var month = currentData.getMonth() + 1 < 10 ? ('0' + (currentData.getMonth() + 1) + '-') : currentData.getMonth() + '-'
    // 获取日数
    var day = currentData.getDate() < 10 ? ('0' + currentData.getDate() + ' ') : currentData.getDate() + ' '
    // 获取小时
    var hours = currentData.getHours() < 10 ? ('0' + currentData.getHours() + ':') : currentData.getHours() + ':'
    // 获取分钟
    var minutes = currentData.getMinutes() < 10 ? ('0' + currentData.getMinutes() + ':') : currentData.getMinutes() + ':'
    // 获取秒数
    var s = currentData.getSeconds() < 10 ? ('0' + currentData.getSeconds()) : currentData.getSeconds()
    var newDate = year + month + day + hours + minutes + s
  }
  return newDate
}
