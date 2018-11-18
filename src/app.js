import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('yu-button', Button)
Vue.component('yu-icon', Icon)
Vue.component('yu-button-group', ButtonGroup)
Vue.component('yu-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false
    },
    methods:{
        inputChange(e) {
            console.log(e)
        }
    }
})

