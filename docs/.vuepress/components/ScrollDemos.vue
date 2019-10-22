<template>
    <div class="scroll-demos">
        <div>
            <p>基础用法</p>

            <yu-scroll style="height: 200px; border: 1px solid #eee;">
                <li v-for="i in 25">{{ i }}</li>
            </yu-scroll>

            <pre><code>{{usage1}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuScroll from 'src/scroll/scroll'
export default {
    name: 'ScrollDemos',
    components: { YuScroll },
    data() {
        return {
            usage1: `
                <yu-scroll style="height: 200px; border: 1px solid #eee;">
                    <li v-for="i in 25">{{ i }}</li>
                </yu-scroll>
            `.replace(/^ {16}/gm, '').trim()
        }
    }
    
}
</script>
<style lang="scss" scoped>
.scroll-demos {
    li {
        border: 1px solid #eee;
        height: 40px;
    }
}
</style>

