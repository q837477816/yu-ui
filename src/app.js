import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('yu-button', Button)
Vue.component('yu-icon', Icon)
new Vue({
    el: '#app',
})