const month = 'March'
const nonsenseMonth = 'Blerguary'

let monthObject = {
  January: 0,
  February: 1,
  March: 2,
}

const getMonthIndex = (month) => monthObject[month] ?? -1

console.log(getMonthIndex(month), getMonthIndex(nonsenseMonth))
