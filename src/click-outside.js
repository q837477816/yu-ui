document.addEventListener('click', (e) => {
    let {target} = e
    callbacks.forEach(item => {
        const {el, callback} = item
        if (el === target || el.contains(target)) {
            return
        } else {
            callback()
        }
    })
})

let callbacks = []

export default {
    bind: function(el, binding, vnode) {
        if (typeof binding.value === 'function') {
            callbacks.push({
                el,
                callback: binding.value
            })
        }
    }
}