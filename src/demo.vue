<template>
    <div class="demo-wrapper">
        {{fileList}}
        <p style="margin-bottom: 10px;">只能上传 300kb 以内的 png、jpeg 文件</p>
        <yu-uploader
            accept="image/*"
            action="http://127.0.0.1:3001/upload"
            name="file"
            :parse-response="parseResponse"
            :file-list.sync="fileList"
            :size="1 * 1024 * 1024"
            multiple
            @upload-error="onError">
            <template>
                <yu-button icon="upload">上传</yu-button>
            </template>
            
        </yu-uploader>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            fileList: []
        }
    },

    mounted() {
        
    },

    methods: {
        parseResponse(response) {
            let obj = JSON.parse(response)
            return `http://127.0.0.1:3001/preview/${obj.id}`
        },
        onError(error) {
            window.alert(error)
        }
    }

}
</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}

:root{
    --font-size: 14px;
}
body{
    font-size: var(--font-size)
}
.demo-wrapper {
    padding: 20px;
}

</style>


