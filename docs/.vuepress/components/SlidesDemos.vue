<template>
    <div>
        <div>
            <p>基础用法</p>

            <yu-slides :selected.sync="selected1">
                <yu-slides-item name="item1">
                    <div style="background-color: red;">red</div>
                </yu-slides-item>
                <yu-slides-item name="item2">
                    <div style="background-color: green;">green</div>
                </yu-slides-item>
                <yu-slides-item name="item3">
                    <div style="background-color: blue;">blue</div>
                </yu-slides-item>
            </yu-slides>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>默认自动播放，可通过设置 autoPlay 属性取消自动播放</p>

            <yu-slides :selected.sync="selected2" :auto-play="false">
                <yu-slides-item name="item1">
                    <div style="background-color: red;">red</div>
                </yu-slides-item>
                <yu-slides-item name="item2">
                    <div style="background-color: green;">green</div>
                </yu-slides-item>
                <yu-slides-item name="item3">
                    <div style="background-color: blue;">blue</div>
                </yu-slides-item>
            </yu-slides>

            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>可通过设置 autoPlayDelay 属性设置自动播放间隔时长，默认为2000毫秒</p>

            <yu-slides :selected.sync="selected3" :auto-play-delay="1000">
                <yu-slides-item name="item1">
                    <div style="background-color: red;">red</div>
                </yu-slides-item>
                <yu-slides-item name="item2">
                    <div style="background-color: green;">green</div>
                </yu-slides-item>
                <yu-slides-item name="item3">
                    <div style="background-color: blue;">blue</div>
                </yu-slides-item>
            </yu-slides>

            <pre><code>{{usage3}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuSlides from 'src/slides/slides'
import YuSlidesItem from 'src/slides/slides-item'
export default {
    name: 'ButtonDemos',
    components: { YuSlides, YuSlidesItem },
    data() {
        return {
            selected1: 'item1',
            selected2: 'item2',
            selected3: 'item3',
            usage1: `
                <yu-slides :selected.sync="selected1">
                    <yu-slides-item name="item1">
                        <div style="background-color: red;">red</div>
                    </yu-slides-item>
                    <yu-slides-item name="item2">
                        <div style="background-color: green;">green</div>
                    </yu-slides-item>
                    <yu-slides-item name="item3">
                        <div style="background-color: blue;">blue</div>
                    </yu-slides-item>
                </yu-slides>

                data() {
                    return {
                        selected1: 'item1'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-slides :selected.sync="selected2" :auto-play="false">
                    <yu-slides-item name="item1">
                        <div style="background-color: red;">red</div>
                    </yu-slides-item>
                    <yu-slides-item name="item2">
                        <div style="background-color: green;">green</div>
                    </yu-slides-item>
                    <yu-slides-item name="item3">
                        <div style="background-color: blue;">blue</div>
                    </yu-slides-item>
                </yu-slides>

                data() {
                    return {
                        selected2: 'item2'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-slides :selected.sync="selected2" :auto-play-delay="1000">
                    <yu-slides-item name="item1">
                        <div style="background-color: red;">red</div>
                    </yu-slides-item>
                    <yu-slides-item name="item2">
                        <div style="background-color: green;">green</div>
                    </yu-slides-item>
                    <yu-slides-item name="item3">
                        <div style="background-color: blue;">blue</div>
                    </yu-slides-item>
                </yu-slides>

                data() {
                    return {
                        selected3: 'item3'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-slides  .yu-slides-item div {
    height: 200px;
    border: 1px solid #eee;
    color: #fff;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

