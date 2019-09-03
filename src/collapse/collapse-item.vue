<template>
    <div class="yu-collapse-item">
        <div class="yu-collapse-item-title" @click="toggle">
            {{ title }}
        </div>
        <div v-if="open" class="yu-collapse-item-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuCollapseItem',
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        } 
    },
    inject: ['eventBus'],
    data() {
        return {
            open: false
        }
    },
    mounted() {
        this.eventBus.$on('update:selected', (selectedNames) => {
            if (selectedNames.includes(this.name)) {
                this.open = true
            } else {
                this.open = false
            }
        })
    },
    beforeDestroy() {
        this.eventBus.$off('update:selected')
    },
    methods: {
        toggle() {
            if (this.open) {
                this.eventBus.$emit('update:removeSelected', this.name)
            } else {
                this.eventBus.$emit('update:addSelected', this.name)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-collapse-item {
    &-title {
        border: 1px solid $light-grey;
        margin: -1px -1px 0 -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 6px;
    }
    &:first-child {
        >.yu-collapse-item-title {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
    &:last-child {
        >.yu-collapse-item-title:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    &-content {
        padding: 8px;
    }
}
</style>