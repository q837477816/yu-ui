<template>
    <div class="wrapper" :class="{error}">
        <input 
            type="text" 
            :value="value"
            :placeholder="placeholder"
            :disabled="disabled" 
            :readonly="readonly" 
            @change="$emit('change', $event.target.value, $event)"
            @input="handleInput"
            @focus="$emit('focus', $event.target.value, $event)"
            @blur="handleBlur">
        <template v-if="error">
            <yu-icon name="error" class="icon-error" />
            <span class="errorMessage">{{ error }}</span>
        </template>
    </div>
</template>

<script>
import YuIcon from 'src/icon/icon'
import Emitter from 'src/mixins/emitter'
export default {
    name: 'YuInput',
    components: { YuIcon },
    mixins: [ Emitter ],
    props: {
        value: {
            type: [String, Date],
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            required: false,
            default: undefined
        }
    },
    methods: {
        handleInput($event) {
            this.$emit('input', $event.target.value, $event)
            this.dispatch('YuFormItem', 'on-form-change', $event.target.value)
        },
        handleBlur($event) {
            this.$emit('blur', $event.target.value, $event)
            this.dispatch('YuFormItem', 'on-form-blur', $event.target.value)
        } 
    }
}
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #f1453d;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
            > :not(:last-child) {
                margin-right: .5em;
            }
            > input {
                height: 32px;
                border: 1px solid $border-color;
                border-radius: $border-radius;
                padding: 0 8px;
                font-size: inherit;
                &:hover {
                    border-color: $border-color-hover;
                }
                &:focus {
                    box-shadow: inset 0 1px 3px $box-shadow-color;
                    outline: none;
                }
                &[disabled], &[readonly] {
                    border-color: #bbb;
                    color: #bbb;
                    cursor: not-allowed;
                }
            }
            &.error {
                > input {
                    border-color: $red;
                } 
            }
            .icon-error {
                fill: $red;
            }
            .errorMessage {
                color: $red;
        }
    }
</style>


