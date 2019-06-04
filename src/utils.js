export const getScrollBarWidth = () => {
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