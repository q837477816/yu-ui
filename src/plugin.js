import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(msg, toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [msg]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}