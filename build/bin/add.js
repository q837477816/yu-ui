#! /usr/bin/env node

console.log()

process.on('exit', () => {
    console.log();
});

if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name')
    process.exit(1)
}

const path = require('path')
const fs = require('fs')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../src', componentname)
const CompletedPackagePath = `${PackagePath}.vue`
const TestFilePath = path.resolve(__dirname, '../../test', componentname)
const CompletedTestFilePath = `${TestFilePath}.test.js`
const VueTemplate = `
<template>
    <div class="yu-${componentname}"></div>
</template>

<script>
export default {
    name: 'Yu${ComponentName}',
    
}
</script>

<style lang="scss" scoped>

</style>
`.trim()

const TestTemplate = `
import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import ${ComponentName} from '../src/${componentname}'

describe('Button.vue', () => {
    it('存在.', () => {
        expect(${ComponentName}).to.be.exist
    })
})
`.trim()

fs.access(CompletedPackagePath, (err) => {
    if (!err) {
        console.error(`${componentname}组件 已存在`)
        process.exit(1)
    }

    // 创建.vue文件
    fs.writeFile(CompletedPackagePath, VueTemplate, 'utf8', (err) => {
        if (err) {
            console.log(`${componentname}.vue 创建失败`)
            process.exit(1)
        } else {
            console.log(`${componentname}.vue 创建成功`)
        }
    })

    // 创建.test.js文件
    fs.writeFile(CompletedTestFilePath, TestTemplate, 'utf8', (err) => {
        if (err) {
            console.log(`${componentname}.test.js 创建失败`)
            process.exit(1)
        } else {
            console.log(`${componentname}.test.js 创建成功`)
        }
    })


})



