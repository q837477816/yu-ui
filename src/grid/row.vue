<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuRow',
    props: {
        gutter: {
            type: [Number, String],
            required: false,
            default: 0
        },
        align: {
            type: String,
            required: false,
            default: 'left',
            validator(value) {
                return ['left', 'right', 'center'].includes(value)
            }
        }
    },
    computed: {
        rowStyle() {
            let {gutter} = this
            return {
                marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'
            }
        },
        rowClass() {
            let {align} = this
            return [align && `align-${align}`]
        }
    },
    mounted() {
        this.$children.forEach(vm => {
            vm.gutter = this.gutter
        })
    }
}
</script>


<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
        &.align-left {
            justify-content: flex-start;
        } 
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>

