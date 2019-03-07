<template>
    <div 
        class="yu-slides" 
        @mouseenter="onMouseEnter" 
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd">
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
            >{{n}}</span>
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
            timerId: undefined,
            startTouch: undefined,
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
        onTouchStart(e) {
            console.log('start')
            this.pause()
            if (e.touches.length > 1) return // 多指触控直接返回
            this.startTouch = e.touches[0]
        },
        onTouchMove() {
            console.log('move')
        },
        onTouchEnd(e) {
            console.log('end')
            let endTouch = e.changedTouches[0]
            let {clientX: x1, clientY: y1} = this.startTouch
            let {clientX: x2, clientY: y2} = endTouch
            let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
            let deltaY = Math.abs(y2-y1)
            let rate = distance / deltaY
            if (rate > 2) { // 滑动的角度小于30度视为滑动轮播图操作
                let newIndex
                if (x2 > x1) {
                    newIndex = this.selectedIndex - 1
                } else {
                    newIndex = this.selectedIndex + 1
                }
                this.select(newIndex)
            } 
            this.playAutomatically()
        },
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
                if (this.timerId) { // 自动轮播时做首位跳转的判断
                    if (this.lastSelectedIndex === this.names.length - 1 && this.selectedIndex === 0) {
                        reverse = false
                    }
                    if (this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length - 1) {
                        reverse = true
                    }
                }
                vm.reverse = reverse
                this.$nextTick(() => {
                    vm.selected = selected
                })
            })
        },
        select(newIndex) {
            if (newIndex === this.names.length) {
                newIndex = 0
            }
            if (newIndex === -1) {
                newIndex = this.names.length - 1
            }
            this.lastSelectedIndex = this.selectedIndex
            this.$emit('update:selected', this.names[newIndex])
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
        padding: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ddd;
            margin: 0 8px;
            font-size: 12px;
            &:hover {
                cursor: pointer;
            }
            &.active {
                background-color: black;
                color: #fff;
                &:hover {
                    cursor: default;
                }
            }
        }
    }
}
</style>


