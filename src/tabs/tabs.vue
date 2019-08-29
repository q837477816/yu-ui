<template>
    <div class="yu-tabs">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'YuTabs',
    props: {
        selected: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.checkChildVm()
        this.initSelectedStatus()
    },
    methods: {
        checkChildVm() {
            if (!this.$children.length) {
                console && console.warn &&
                console.warn('tabs 的子组件应是tabs-head和tabs-body，但是没有子组件')
            }
        },
        initSelectedStatus() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'YuTabsHead') {
                    vm.$children.forEach(childVm => {
                        if (childVm.$options.name === 'YuTabsItem' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
}
</script>
