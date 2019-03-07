<template>
    <div class="yu-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="yu-slides-window" ref="window">
            <div class="yu-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="yu-slides-dots">
            <span 
                v-for="n in childrenLength" 
                :class="{active: selectedIndex === n - 1}"
                @click="select(n-1)"
            >{{n-1}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuSlides',
    props: {
        selected: {
            type: String
        },
        autoPlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            childrenLength: 0,
            lastSelectedIndex: undefined,
            timerId: undefined
        }
    },
    computed: {
        selectedIndex() {
            return this.names.indexOf(this.selected) || 0
        },
        names() {
            return this.$children.map(vm => vm.name)
        }
    },
    mounted() {
        this.updateChildren()
        this.playAutomatically()
        this.childrenLength = this.$children.length
        this.lastSelectedIndex = this.selectedIndex
    },
    updated() {
        this.updateChildren()
    },
    methods: {
        onMouseEnter() {
            this.pause()
        },
        onMouseLeave() {
            !this.timerId && this.playAutomatically()
        },
        playAutomatically() {
            let run = () => {
                let index = this.names.indexOf(this.getSelected())
                let newIndex = index + 1
                if (newIndex === this.names.length) {
                    newIndex = 0
                }
                this.select(newIndex)
                this.timerId = setTimeout(run, 2000)
            }
            this.timerId = setTimeout(run, 2000);
        },
        pause() {
            window.clearTimeout(this.timerId)
            this.timerId = undefined
        },
        getSelected() {
            let first = this.$children[0]
            return this.selected || first.name
        },
        updateChildren() {
            let selected = this.getSelected()
            this.$children.forEach(vm => {
                let reverse = this.selectedIndex < this.lastSelectedIndex
                if (this.lastSelectedIndex === this.names.length - 1 && this.selectedIndex === 0) {
                    reverse = false
                }
                if (this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length - 1) {
                    reverse = true
                }
                vm.reverse = reverse
                this.$nextTick(() => {
                    vm.selected = selected
                })
            })
        },
        select(index) {
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected', this.names[index])
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-slides {
    &-window {
        overflow: hidden;
    }
    &-wrapper {
        position: relative;
    }
    &-dots {
        span.active {
            color: red;
        }
    }
}
</style>


