<template>
  <div 
    class="yu-scroll-wrapper" 
    ref="parent" 
    @wheel="onWheel"
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave">
    <div 
      class="yu-scroll" 
      ref="child" 
      :style="{transform: `translateY(${contentTranslateY}px)`}">
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
  name: "YuScroll",
  data() {
    return {
      maxHeight: 0,
      barHeight: 0,
      parentHeight: 0,
      childHeight: 0,
      contentTranslateY: 0,
      scrollBarTranslateY: 0,
      scrollBarVisible: false,
      inScrolling: false,
      startPosition: null,
      endPosition: null
    };
  },
  computed: {
    maxScrollHeight() {
      return this.parentHeight - this.barHeight
    }
  },
  watch: {
    scrollBarTranslateY(newValue) { // 滚动条动的时候让内容也滚动
      // contentTranslateY / childHeight = scrollBarTranslateY / parentHeight
      this.contentTranslateY = -(newValue / this.parentHeight * this.childHeight)
    }
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.onMouseMoveScrollBar);
    document.removeEventListener("mouseup", this.onMouseUpScrollBar);
  },
  mounted() {
    this.initListeners()
    this.parentHeight = this.$refs.parent.getBoundingClientRect().height;
    this.childHeight = this.$refs.child.getBoundingClientRect().height;
    this.maxHeight = this.calculateContentTranslateYMax();
    this.updateScollBar();
  },
  methods: {
    initListeners() {
      document.addEventListener("mousemove", this.onMouseMoveScrollBar);
      document.addEventListener("mouseup", this.onMouseUpScrollBar);
    },
    calculateContentTranslateYMax() {
      let {
        borderTopWidth,
        borderBottomWidth,
        paddingTop,
        paddingBottom
      } = window.getComputedStyle(this.$refs.parent);
      borderTopWidth = Number.parseFloat(borderTopWidth);
      borderBottomWidth = Number.parseFloat(borderBottomWidth);
      paddingTop = Number.parseFloat(paddingTop);
      paddingBottom = Number.parseFloat(paddingBottom);
      let maxHeight =
        this.childHeight -
        this.parentHeight +
        (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom);
      return maxHeight
    },
    onWheel(e) {
      this.scrollBarVisible = true
      // 根据滚轮滚动距离，按照一定系数计算一个内容的滚动距离
      if (e.deltaY > 20) {
        this.contentTranslateY -= 20 * 3;
      } else if (e.deltaY < -20) {
        this.contentTranslateY -= -20 * 3;
      } else {
        this.contentTranslateY -= e.deltaY * 3;
      }
      // 对内容的滚动距离进行限制
      if (this.contentTranslateY > 0) {
        this.contentTranslateY = 0;
      } else if (this.contentTranslateY < -this.maxHeight) {
        this.contentTranslateY = -this.maxHeight;
      } else {
        e.preventDefault(); // 在中间滚动时，保持页面不抖动
      }
      this.updateScollBar();
    },
    updateScollBar() {
      // this.barHeight / parentHeight = parentHeight / childHeight
      this.barHeight = (this.parentHeight / this.childHeight) * this.parentHeight;
      let barWrapper = this.$refs.barWrapper;
      barWrapper.style.height = `${this.barHeight}px`;
      let y = (this.parentHeight * this.contentTranslateY) / this.childHeight;
      barWrapper.style.transform = `translateY(${-y}px)`;
      this.scrollBarTranslateY = -y
    },
    onMouseEnter() {
      this.scrollBarVisible = true;
    },
    onMouseLeave() {
      if (!this.inScrolling) {
        this.scrollBarVisible = false;
      }
    },
    onMouseDownScrollBar(e) {
      this.inScrolling = true;
      const { screenX: x, screenY: y } = e;
      this.startPosition = { x, y };
    },
    onMouseMoveScrollBar(e) {
      if (this.inScrolling) {
        this.endPosition = { x: e.screenX, y: e.screenY };
        const delta = {
          x: this.endPosition.x - this.startPosition.x,
          y: this.endPosition.y - this.startPosition.y
        };
        this.scrollBarTranslateY = Number.parseFloat(this.scrollBarTranslateY) + delta.y;
        // 对 scrollBarTranslateY 进行限制
        if (this.scrollBarTranslateY < 0) {
          this.scrollBarTranslateY = 0;
        } else if (this.scrollBarTranslateY > this.maxScrollHeight) {
          this.scrollBarTranslateY = this.maxScrollHeight;
        }
        this.startPosition = this.endPosition;
        this.$refs.barWrapper.style.transform = `translate(0, ${this.scrollBarTranslateY}px)`;
      }
    },
    onMouseUpScrollBar(e) {
      this.inScrolling = false;
    },
    onSelectStartScrollBar(e) {
      e.preventDefault();
    }
  }
};
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
    &:hover {
      background-color: #7d7d7d;
    }
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


