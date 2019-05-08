<template>
    <div :class="['yu-pager', {hide}]">
        <span 
            :class="['yu-pager-nav', 
                    'prev', 
                    {disabled: currentPage === 1}]"
            @click="onClickPage(currentPage - 1)">
            <yu-icon name="left"></yu-icon>
        </span>
        <span 
            v-for="page in pages"
            :class="['yu-pager-item', 
                    {active: page === currentPage},
                    {dots: page === '...'}]"
            @click="onClickPage(page)">
            {{page}}
        </span>
        <span 
            :class="['yu-pager-nav',
                    'next', 
                    {disabled: currentPage === totalPage}]"
            @click="onClickPage(currentPage + 1)">
            <yu-icon name="right"></yu-icon>
        </span>
    </div>
</template>

<script>
import YuIcon from './icon'
export default {
    name: 'YuPager',
    components: { YuIcon },
    props: {
        totalPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        hideIfOnePage: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        pages() {
            return [
                1,
                this.currentPage - 2, 
                this.currentPage - 1, 
                this.currentPage, 
                this.currentPage + 1, 
                this.currentPage + 2, 
                this.totalPage
                ]
                .filter(item => item > 0 && item <= this.totalPage)
                .sort((a, b) => a - b)
                .reduce((prev, next) => {
                    if (!prev.includes(next)) {
                        prev.push(next)
                    }
                    return prev
                }, [])
                .reduce((prev, next, index, array) => {
                    prev.push(next)
                    if (array[index + 1] !== undefined && array[index + 1] - next > 1) {
                        prev.push('...')
                    }
                    return prev
                }, [])
        },
        hide() {
            return this.hideIfOnePage && this.totalPage <= 1
        }
    },
    methods: {
        onClickPage(page) {
            if (typeof page === 'number' && page >= 1 && page <= this.totalPage) {
                this.$emit('update:currentPage', page)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./styles/var";
.yu-pager {
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    &.hide {
        display: none;
    }
    &-item {
        border: 1px solid #e1e1e1;
        border-radius: $border-radius;
        padding: 0 4px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: $height;
        min-width: $width;
        margin: 0 4px;
        font-size: $font-size;
        cursor: pointer;
        &.dots {
            border: none;
        }
        &.active, &:hover {
            border-color: $blue;
        }
        &.active {
            cursor: default;
        }
    }
    &-nav {
        margin: 0 4px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: $height;
        width: $width;
        background-color: $grey;
        border-radius: $border-radius;
        font-size: $font-size;
        cursor: pointer;
        &.disabled {
            cursor: not-allowed;
            svg {
                fill: darken($grey, 20%);
            }
        }
    }
}
</style>

