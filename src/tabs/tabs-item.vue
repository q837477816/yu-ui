<template>
    <div 
        :class="['yu-tabs-item', classes]"
        :data-name="name" 
        @click="onClick">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuTabsItem',
    inject: ['eventBus'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
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
                active: this.active,
                disabled: this.disabled
            }
        }
    },
    created() {
        if (this.eventBus) {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        }
    },
    methods: {
        onClick() {
            if (!this.disabled) { 
                this.$emit('click', this)
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey; 
    .yu-tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>