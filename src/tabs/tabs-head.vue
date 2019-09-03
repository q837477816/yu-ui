<template>
    <div class="yu-tabs-head">
        <slot />
        <div ref="line" class="line" />
        <div class="actions-wrapper">
            <slot name="actions" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuTabsHead',
    inject: ['eventBus'],
    mounted() {
        this.eventBus.$on('update:selected', (item, vm) => {
            this.updateUnderlinePosition(vm)
        })
    },
    methods: {
        updateUnderlinePosition(selectedVm) {
            const {width, left: left1} = selectedVm.$el.getBoundingClientRect()
            const {left: left2} = this.$el.getBoundingClientRect() 
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left1 - left2}px`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~_var.scss";
    $tab-height: 40px;
    $blue: blue;
    $border-color: $light-grey;
    .yu-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute; 
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }
        > .actions-wrapper  {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>
