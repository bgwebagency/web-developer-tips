const month = 'March'
const nonsenseMonth = 'Blerguary'

function getMonthIndex(month) {
  let monthIndex
  if (month === 'January') {
    monthIndex = 0
  } else if (month === 'February') {
    monthIndex = 1
  } else if (month === 'March') {
    monthIndex = 2
    // and so on till December
  } else {
    monthIndex = -1
  }
  return monthIndex
}

console.log(getMonthIndex(month), getMonthIndex(nonsenseMonth))
