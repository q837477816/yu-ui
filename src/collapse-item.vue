<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
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
        this.eventBus.$on('update:selected', (names) => {
            if (names.includes(this.name)) {
                this.open = true
            } else {
                this.open = false
            }
        })
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
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
    >.title {
        border: 1px solid $grey;
        margin: -1px -1px 0 -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 6px;
    }
    &:first-child {
        >.title {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
    &:last-child {
        >.title:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    >.content {
        padding: 8px;
    }
}
</style>