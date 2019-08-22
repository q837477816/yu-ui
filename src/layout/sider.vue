<template>
    <transition name="slide">
        <div class="yu-sider" v-if="visible">
            <slot />
            <button @click="visible = false">close</button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'YuSider',
    data() {
        return {
            visible: true
        }
    }
}
</script>


<style lang="scss" scoped>
.yu-sider {
    position: relative;
    > button {
        position: absolute;
        top: 0;
        right: 0;
    }
}
.slide-enter-active, .slide-leave-active {
    transition: all .5s;
}
.slide-enter, .slide-leave-to {
    margin-left: -200px;
}
</style>