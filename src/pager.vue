<template>
    <div class="yu-pager">
        <span 
            v-for="page in pages"
            :key="page"
            :class="[
                'yu-pager-item', 
                {active: page === currentPage},
                {separator: page === '...'}
            ]">
            {{page}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'YuPager',
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
    data() {
        let pages = [1, this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2, this.totalPage].filter(item => item > 0 && item <= this.totalPage).sort((a, b) => a - b).reduce((prev, next) => {
            if (!prev.includes(next)) {
                prev.push(next)
            }
            return prev
        }, [])
        pages = pages.reduce((prev, next, index, array) => {
            prev.push(next)
            if (array[index + 1] !== undefined && array[index + 1] - next > 1) {
                prev.push('...')
            }
            return prev
        }, [])
        return {
            pages
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./styles/var";
.yu-pager {
    &-item {
        border: 1px solid #e1e1e1;
        border-radius: $border-radius;
        padding: 0 4px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        min-width: 20px;
        margin: 0 4px;
        cursor: pointer;
        &.separator {
            border: none;
        }
        &.active, &:hover {
            border-color: $blue;
        }
        &.active {
            cursor: default;
        }
    }
}
</style>

