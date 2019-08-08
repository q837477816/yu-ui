const getScrollBarWidth = () => {
    let div = document.createElement('div')
    div.style.height = '400px'
    div.style.width = '400px'
    div.style.overflow = 'scroll'
    document.body.appendChild(div)
    const {offsetWidth, clientWidth} = div
    const scrollbarWidth = offsetWidth - clientWidth
    div.remove()
    return scrollbarWidth
}

const getYearMonthDay = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return [year, month, day]
}

const getFirstDayOfMonth = (date) => {
    const [year, month] = getYearMonthDay(date)
    return new Date(year, month, 1)
}

const getLastDayOfMonth = (date) => {
    const [year, month] = getYearMonthDay(date)
    return new Date(year, month + 1, 0)
}

const addYear = (date, n) => {
    const [year] = getYearMonthDay(date)
    const newYear = year + n
    let copyDate = new Date(date)
    copyDate.setFullYear(newYear)
    return copyDate
}

const addMonth = (date, n) => {
    const [year, month, day] = getYearMonthDay(date)
    const newMonth = month + n
    let copyDate = new Date(date)
    copyDate.setMonth(newMonth)
    return copyDate
}

export {
    getScrollBarWidth,
    getYearMonthDay,
    getFirstDayOfMonth,
    getLastDayOfMonth,
    addYear,
    addMonth
}