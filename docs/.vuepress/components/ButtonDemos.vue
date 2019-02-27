<template>
    <div>
        <yu-button>默认按钮</yu-button>
        <yu-button icon="settings">默认按钮</yu-button>
        <yu-button :loading="true">默认按钮</yu-button>
        <yu-button disabled>默认按钮</yu-button>

        <pre><code>{{usage}}</code></pre>
    </div>

</template>

<script>
import Button from '../../../src/button'
export default {
    name: 'ButtonDemos',
    components: {
        'yu-button': Button
    },
    data() {
        return {
            usage: `
                <yu-button>默认按钮</yu-button>
                <yu-button icon="settings">默认按钮</yu-button>
                <yu-button :loading="true">默认按钮</yu-button>
                <yu-button disabled>默认按钮</yu-button>
            `
        }
    }
    
}
</script>

