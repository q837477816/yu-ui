<template>
    <div class="yu-uploader">
        <input type="file" ref="input" style="display: none;" :accept="accept" :multiple="multiple" @change="onFileChange">
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
                <yu-button class="remove" @click="onRemoveFile(file)">x</yu-button>
            </li>
        </ol>
    </div>
</template>

<script>
import YuIcon from './icon'
import YuButton from './button/button'
export default {
    name: 'YuUploader',
    components: { YuIcon, YuButton },
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
        accept: {
            type: String,
            default: '*'
        },
        parseResponse: {
            type: Function,
            required: true
        },
        fileList: {
            type: Array,
            default: () => []
        },
        size: {
            type: Number
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        onFileChange(e) {
            let rawFiles = e.target.files
            const fileIds = this.generateFileIds(rawFiles.length)
            const valid = this.beforeUploadFiles(rawFiles, fileIds)
            if (valid) {
                for (let i = 0; i < rawFiles.length; i++) {
                    const rawFile = rawFiles[i]
                    const fileId = fileIds[i]
                    this.createFormData(rawFile, fileId)
                }
            }
            this.$refs.input.value = null
        },
        onClickUpload() {
            this.$refs.input.click()
        },
        createFormData(rawFile, fileId) {
            let formData = new FormData()
            formData.append(this.name, rawFile)
            this.uploadFile(formData, (response) => {
                const url = this.parseResponse(response)
                this.afterUploadFile(fileId, url)
            }, (xhr) => {
                this.uploadError(fileId, xhr)
            })
        },
        beforeUploadFiles(rawFiles, fileIds) {
            for (let i = 0; i < rawFiles.length; i++) {
                const {size, type} = rawFiles[i]
                if (size > this.size) {
                    this.$emit('upload-error', '文件大小有误')
                return false
                }
            }
            const newFiles = Array.from(rawFiles).map((rawFile, index) => {
                const {name, size, type} = rawFile
                return {
                    fileId: fileIds[index],
                    name,
                    type,
                    size,
                    status: 'uploading'
                }
            })
            this.$emit('update:fileList', [...this.fileList, ...newFiles])
            return true
            
        },
        uploadFile(formData, successCallback, failCallback) {
            let xhr = new XMLHttpRequest()
            xhr.open(this.method, this.action)
            xhr.onload = () => {
                successCallback(xhr.response)
            }
            xhr.onerror = () => {
                failCallback(xhr)
            }
            xhr.send(formData)
        },
        afterUploadFile(fileId, url) {
            let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
            let file = fileListCopy.filter(file => file.fileId === fileId)[0]
            file.url = url
            file.status = 'uploadSuccess'
            this.$emit('update:fileList', fileListCopy)
        },
        uploadError(fileId, xhr) {
            let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
            let file = fileListCopy.filter(file => file.fileId === fileId)[0]
            file.status = 'uploadFail'
            this.$emit('update:fileList', fileListCopy)
            let error = xhr.status === 0 ? '网络无法连接' : ''
            this.$emit('upload-error', error)
        },
        onRemoveFile(file) {
            const answer = window.confirm('确定要删除吗')
            if (answer) {
                let copy = [...this.fileList]
                let index = copy.indexOf(file)
                copy.splice(index, 1)
                this.$emit('update:fileList', copy)
            }
        },
        generateFileIds(num) {
            let id = Date.now()
            let ids = []
            for (let i = 0; i < num; i++) {
                ids.push(id++)
            }
            return ids
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


