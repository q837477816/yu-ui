import '@babel/polyfill'

import Vue from 'vue'
import demo from './demo'
import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Sider from './layout/sider.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsBody from './tab/tabs-body'
import TabsItem from './tab/tabs-item'
import TabsPane from './tab/tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Cascader from './cascader/cascader'
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'
import Pager from './pager'
import Uploader from './uploader'

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
Vue.component('yu-slides', Slides)
Vue.component('yu-slides-item', SlidesItem)
Vue.component('yu-nav', Nav)
Vue.component('yu-nav-item', NavItem)
Vue.component('yu-sub-nav', SubNav)
Vue.component('yu-pager', Pager)
Vue.component('yu-uploader', Uploader)

new Vue({
    render: h => h(demo)
}).$mount('#app')