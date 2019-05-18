<template>
    <div class="yu-uploader">
        <input type="file" ref="input" style="display: none;" @change="onFileChange">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <ol class="yu-uploader-fileList">
            <li v-for="file in fileList" :key="file.fileId">
                <template v-if="file.status === 'uploading'">
                    <yu-icon name="loading" class="spin"></yu-icon>
                </template>
                <template v-else-if="file.type.includes('image')">
                    <img :src="file.url" width="32" height="32" alt="">
                </template>
                <template v-else>
                    <div class="default-img"></div>
                </template>
                <span :class="['name', file.status]">{{file.name}}</span>
                <button class="remove" @click="onRemoveFile(file)">x</button>
            </li>
        </ol>
    </div>
</template>

<script>
import YuIcon from './icon'
export default {
    name: 'YuUploader',
    components: { YuIcon },
    props: {
        name: {
            type: String,
            required: true
        },
        method: {
            type: String,
            default: 'POST'
        },
        action: {
            type: String,
            required: true
        },
        parseResponse: {
            type: Function,
            required: true
        },
        fileList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            url: 'about:blank'
        }
    },
    methods: {
        onFileChange(e) {
            let rawFile = e.target.files[0]
            this.createFormData(rawFile)
        },
        onClickUpload() {
            this.$refs.input.click()
        },
        createFormData(rawFile) {
            // generate a unique fileId
            const fileId = Date.now() 

            this.beforeUploadFile(rawFile, fileId)
            let formData = new FormData()
            formData.append(this.name, rawFile)
            this.uploadFile(formData, (response) => {
                this.url = this.parseResponse(response)
                this.afterUploadFile(fileId, this.url)
            }, () => {
                this.uploadError(fileId)
            })
            
        },
        beforeUploadFile(rawFile, fileId) {
            const {name, size, type} = rawFile
            this.$emit('update:fileList', [...this.fileList, {fileId, name, type, size, status: 'uploading'}])
        },
        uploadFile(formData, successCallback, failCallback) {
            let xhr = new XMLHttpRequest()
            xhr.open(this.method, this.action)
            xhr.onload = () => {
                Math.random() > 0.5 ? successCallback(xhr.response) : failCallback()
            }
            xhr.send(formData)
            this.$refs.input.value = null
        },
        afterUploadFile(fileId, url) {
            let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
            let file = fileListCopy.filter(file => file.fileId === fileId)[0]
            file.url = url
            file.status = 'uploadSuccess'
            this.$emit('update:fileList', fileListCopy)
        },
        uploadError(fileId) {
            let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
            let file = fileListCopy.filter(file => file.fileId === fileId)[0]
            file.status = 'uploadFail'
            this.$emit('update:fileList', fileListCopy)
        },
        onRemoveFile(file) {
            const answer = window.confirm('确定要删除吗')
            if (answer) {
                let copy = [...this.fileList]
                let index = copy.indexOf(file)
                copy.splice(index, 1)
                this.$emit('update:fileList', copy)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./styles/_var.scss";
.yu-uploader {
    &-fileList {
        list-style: none;
        > li {
            display: flex;
            align-items: center;
            margin: 8px 0;
            border: 1px solid darken($grey, 10%);
            .default-img {
                margin-right: 8px;
                border: 1px solid red;
                height: 32px;
                width: 32px;
            }
            img {
                margin-right: 8px;
            }
            .name {
                margin-right: auto;
                &.uploadSuccess {
                    color: green;
                }
                &.uploadFail {
                    color: red;
                }
            }
            .remove{
                width: 32px;
                height: 32px;;
            }
            .spin {
                @include spin;
            }
            
        }
    }
}
</style>


