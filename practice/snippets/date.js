const dayOfYear = (date) => (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 3600 * 24)
// 0 是指1月

// console.log(Date.now()) --> 1970以来的ms
console.log(dayOfYear(new Date(2024, 1, 2))) // 2月2