<template>
    <div class="yu-pager-demos">
        <div>
            <p>基础用法</p>
            
            <yu-pager
                :total-page="20"
                :current-page.sync="currentPage1" 
                @change="onPageChange"/>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>total-page 只有一页的情况下，默认会隐藏分页栏，可通过设置 hideIfOnePage 为 false 来取消隐藏</p>

            <yu-button @click="hideIfOnePage = !hideIfOnePage">切换hideIfOnePage</yu-button>
            <yu-pager
                :total-page="1"
                :current-page.sync="currentPage2"
                :hide-if-one-page="hideIfOnePage"  />

            <pre><code>{{usage2}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuPager from 'src/pager/pager'
import YuButton from 'src/button/button'
export default {
    name: 'PagerDemos',
    components: { YuPager, YuButton },
    data() {
        return {
            currentPage1: 1,
            currentPage2: 1,
            hideIfOnePage: false,
            usage1: `
                <yu-pager
                    :total-page="20"
                    :current-page.sync="currentPage1" 
                    @change="onPageChange"/>

                data() {
                    return {
                        currentPage1: 1
                    }
                },

                methods: {
                    onPageChange(page) {
                        console.log(\`切换到了第\${page}页\`)
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-button @click="hideIfOnePage = !hideIfOnePage">切换hideIfOnePage</yu-button>
                <yu-pager
                    :total-page="1"
                    :current-page.sync="currentPage2"
                    :hide-if-one-page="hideIfOnePage"  />

                data() {
                    return {
                        currentPage2: 1,
                        hideIfOnePage: false,
                    }
                },
            `.replace(/^ {16}/gm, '').trim(),
        }
    },
    methods: {
        onPageChange(page) {
            console.log(`切换到了第${page}页`)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-pager-demos {
    .yu-button {
        margin-bottom: 10px;
    }
}
</style>

