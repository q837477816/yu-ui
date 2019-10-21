<template>
    <transition name="slide">
        <div v-if="visible" :class="['yu-slides-item', {reverse}]">
            <slot />
        </div>
    </transition>
</template>

<script>
export default {
    name: 'YuSlidesItem',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selected: null,
            reverse: false
        }
    },
    computed: {
        visible() {
            return this.name === this.selected
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide-leave-active {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .6s;
    }
    .slide-enter {
        transform: translateX(100%);
        opacity: 0;
    }
    .slide-enter.reverse {
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-leave-to {
        transform: translateX(-100%) scale(0.5);
        opacity: 0;
    }
    .slide-leave-to.reverse {
        transform: translateX(100%) scale(0.5);
        opacity: 0;
    }
</style>


