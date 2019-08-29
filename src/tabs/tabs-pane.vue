<template>
    <div v-if="active" :class="['yu-tabs-pane', classes]">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuTabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    }
}
</script>

<style lang="scss" scoped>
    .yu-tabs-pane {
        &.active {
            padding: 1em;
        }
    }
</style>