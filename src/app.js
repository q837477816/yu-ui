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
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

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
Vue.component('yu-toast', Toast)
Vue.use(plugin)
Vue.component('yu-tabs', Tabs)
Vue.component('yu-tabs-head', TabsHead)
Vue.component('yu-tabs-body', TabsBody)
Vue.component('yu-tabs-item', TabsItem)
Vue.component('yu-tabs-pane', TabsPane)
Vue.component('yu-popover', Popover)
Vue.component('yu-collapse', Collapse)
Vue.component('yu-collapse-item', CollapseItem)
Vue.component('yu-cascader', Cascader)




new Vue({
    el: '#app',
    data: {
        source: [
            {
                name: '浙江',
                children: [
                    {
                        name: '杭州',
                        children: [
                            {name: '上城'},
                            {name: '下城'},
                            {name: '江干'},
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                            {name: '南湖'},
                            {name: '秀洲'},
                            {name: '嘉善'},
                        ]

                    },
                    {
                        name: '湖州'
                    },
                ]
            },
            {
                name: '福建',
                children: [
                    {
                        name: '福州',
                        children: [
                            {name: '鼓楼'},
                            {name: '台江'},
                            {name: '仓山'},
                        ]
                    },
                    {name: '厦门'},
                    {name: '莆田'},
                    {name: '泉州'},
                    {name: '三明'},
                ]
            }
        ]
    },
    created() {
       
    },
    methods:{

    }
})

