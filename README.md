# yu-ui 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/q837477816/yu-ui.svg?branch=master)](https://www.travis-ci.org/q837477816/yu-ui)

## 介绍

在学习 Vue 过程中做的一个 UI 框架

## 开始使用

1. 添加 CSS 样式

    使用本框架前请在 CSS 中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```

    IE 8 及以上浏览器都支持此样式。

    还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式

2. 安装 yu-ui
    
    ```
    npm i yu-ui --save
    ```

3. 引入 yu-ui

    ```
    import { Button } from "yu-ui-20181113";
    import "yu-ui-20181113/dist/index.css";

    export default {
        name: "app",
        components: {
            HelloWorld,
            "yu-button": Button
        }
    };
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

