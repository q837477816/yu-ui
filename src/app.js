import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'

Vue.component('yu-button', Button)
Vue.component('yu-icon', Icon)
Vue.component('yu-button-group', ButtonGroup)
Vue.component('yu-input', Input)
Vue.component('yu-row', Row)
Vue.component('yu-col', Col)
Vue.component('yu-layout', Layout)
Vue.component('yu-header', Header)
Vue.component('yu-sider', Sider)
Vue.component('yu-content', Content)
Vue.component('yu-footer', Footer)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'hi'
    },
    methods:{
        inputChange(e) {
            console.log(e)
        }
    }
})

