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

const typeOf = (obj) => {
    const toString = Object.prototype.toString
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    }
    return map[toString.call(obj)]
}

const deepCopy = (data) => {
    const type = typeOf(data)
    let o

    if (type === 'array') {
        o = []
    } else if (type === 'object') {
        o = {}
    } else {
        return data
    }

    if (type === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]))
        }
    } else if (type === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i])
        }
    }

    return o
}

const findComponentUpward = (context, componentName) => {
    let parent = context.$parent
    let name = parent.$options.name

    while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) name = parent.$options.name
    }
    return parent
}

const findComponentDownward = (context, componentName) => {
    const children = context.$children
    let ret = null

    if (children.length) {
        for (const child of children) {
            const name = child.$options.name

            if (name === componentName) {
                ret = child
                break
            } else {
                ret = findComponentDownward(child, componentName)
                if (ret) break
            }
        }
    }
    return ret
}

const findComponentsDownward = (context, componentName) => {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child)
        const foundChildren = findComponentsDownward(child, componentName)
        return components.concat(foundChildren)
    }, [])
}

export {
    getScrollBarWidth,
    getYearMonthDay,
    getFirstDayOfMonth,
    getLastDayOfMonth,
    addYear,
    addMonth,
    deepCopy,
    findComponentUpward,
    findComponentDownward,
    findComponentsDownward
}