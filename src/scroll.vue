<template>
    <div 
        class="yu-scroll-wrapper" 
        ref="parent" 
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <div class="yu-scroll" ref="child">
            <slot></slot>
        </div>
        <div class="yu-scroll-track" v-show="scrollBarVisible">
            <div 
                class="yu-scroll-bar-wrapper" 
                ref="barWrapper"
                @mousedown="onMouseDownScrollBar"
                @selectstart="onSelectStartScrollBar">
                <div class="yu-scroll-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuScroll',
    data() {
        return {
            scrollBarVisible: false,
            inScrolling: false,
            startPosition: null,
            endPosition: null,
            translateX: 0,
            translateY: 0
        }
    },
    beforeDestroy() {
        document.removeEventListener('mousemove', this.onMouseMoveScrollBar)
        document.removeEventListener('mouseup', this.onMouseUpScrollBar)
    },
    mounted() {
        document.addEventListener('mousemove', this.onMouseMoveScrollBar)
        document.addEventListener('mouseup', this.onMouseUpScrollBar)
        const parent = this.$refs.parent
        const child = this.$refs.child
        let translateY = 0
        let {height: childHeight} = child.getBoundingClientRect()
        let {height: parentHeight} = parent.getBoundingClientRect()
        let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
        borderTopWidth = Number.parseFloat(borderTopWidth)
        borderBottomWidth = Number.parseFloat(borderBottomWidth)
        paddingTop = Number.parseFloat(paddingTop)
        paddingBottom = Number.parseFloat(paddingBottom)
        let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
        parent.addEventListener('wheel', (e) => {
            if (e.deltaY > 20) {
                translateY -= 20 * 3
            } else if (e.deltaY < -20) {
                translateY -= -20 * 3
            } else {
                translateY -= e.deltaY * 3
            }
            if (translateY > 0) {
                translateY = 0
            } else if (translateY < -maxHeight) {
                translateY = -maxHeight
            } else {
                e.preventDefault() // 在中间滚动时，保持页面不抖动
            }
            child.style.transform = `translateY(${translateY}px)`
            this.updateScollBarHeight(parentHeight, childHeight, translateY)
        })
        this.updateScollBarHeight(parentHeight, childHeight, translateY)
    },
    methods: {
        updateScollBarHeight(parentHeight, childHeight, translateY) {
            // barHeight / parentHeight = parentHeight / childHeight
            const barHeight = parentHeight / childHeight * parentHeight
            let barWrapper = this.$refs.barWrapper
            barWrapper.style.height = `${barHeight}px`
            let y = parentHeight * translateY / childHeight
            barWrapper.style.transform = `translateY(${-y}px)`
        },
        onMouseEnter() {
            this.scrollBarVisible = true
        },
        onMouseLeave() {
            if (!this.inScrolling) {
                this.scrollBarVisible = false
            }
        },
        onMouseDownScrollBar(e) {
            this.inScrolling = true
            const {screenX: x, screenY: y} = e
            this.startPosition = {x, y}
        },
        onMouseMoveScrollBar(e) {
            if (this.inScrolling) {
                const {screenX: x, screenY: y} = e
                this.endPosition = {x, y}
                const delta = {
                    x: this.endPosition.x - this.startPosition.x,
                    y: this.endPosition.y - this.startPosition.y
                }
                this.translateX = Number.parseFloat(this.translateX) + delta.x
                this.translateY = Number.parseFloat(this.translateY) + delta.y
                this.startPosition = this.endPosition
                this.$refs.barWrapper.style.transform = `translate(0, ${this.translateY}px)`
            }
        },
        onMouseUpScrollBar(e) {
            this.inScrolling = false
        },
        onSelectStartScrollBar(e) {
            e.preventDefault()
        }
        
    }
}
</script>

<style lang="scss" scoped>
.yu-scroll {
    transition: transform 100ms ease;
    &-wrapper {
        border: 1px solid red;
        overflow: hidden;
        position: relative;
    }
    &-track {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 100%;
        background-color: #fafafa;
        border-left: 1px solid #e8e7e8;
        opacity: 0.9;
    }
    &-bar {
        height: 100%;
        border-radius: 4px;
        background-color: #c2c2c2;
        &:hover { background-color: #7d7d7d; }
        &-wrapper {
            box-sizing: border-box;
            position: absolute;
            top: -1px;
            left: 50%;
            margin-left: -4px;
            width: 8px;
            height: 40px;
            padding: 4px 0;
        }
    }
}
</style>


