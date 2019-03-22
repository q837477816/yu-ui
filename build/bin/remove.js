#! /usr/bin/env node

console.log()

process.on('exit', () => {
    console.log();
});

if (!process.argv[2]) {
    console.error('[要删除的组件名]必填 - Please enter component name')
    process.exit(1)
}

const path = require('path')
const fs = require('fs')
const readline = require('readline')
const componentname = process.argv[2]
const PackagePath = path.resolve(__dirname, '../../src', componentname)
const CompletedPackagePath = `${PackagePath}.vue`
const TestFilePath = path.resolve(__dirname, '../../test', componentname)
const CompletedTestFilePath = `${TestFilePath}.test.js`

fs.access(CompletedPackagePath, (err) => {
    if (err) {
        console.error(`${componentname}组件 不存在`)
        process.exit(1)
    }
    const rl = readline.createInterface({  
        input:process.stdin,
        output:process.stdout
    });
    rl.question(`确定要删除${componentname}组件及其测试脚本？(y/n)`, (answer) => {
        if (['y', 'n'].indexOf(answer) === -1 || answer === 'n') {
            console.error('取消删除')
            process.exit(1)
        }
        rl.close()
        fs.unlink(CompletedPackagePath, (err) => {
            if (err) {
                console.log(`删除${componentname}.vue失败`)
            } else {
                console.log(`成功删除${componentname}.vue`)
            }
        })
        fs.unlink(CompletedTestFilePath, (err) => {
            if (err) {
                console.log(`删除${componentname}.test.js失败`)
            } else {
                console.log(`成功删除${componentname}.test.js`)
            }
        })
    })
})



