<template>
    <div class="yu-table-wrapper" ref="wrapper">
        <div :style="{height, overflow: 'auto'}">
            <table :class="['yu-table', {border, compact, striped}]" ref="table">
                <thead>
                    <tr>
                        <th v-if="selection">
                            <input 
                            ref="allCheck"
                            type="checkbox"
                            :checked="allItemsSelected"
                            @change="onChangeAllItems">
                        </th>
                        <th v-if="indexVisible">#</th>
                        <th v-for="column in columns" :key="column.field">
                            <div class="yu-table-header">
                                {{column.text}}
                                <span 
                                    class="yu-table-sort" 
                                    v-if="orderBy.includes(column.field)"
                                    @click="changeOrderByHash(column.field)">
                                    <yu-icon 
                                        name="asc"
                                        :class="{active: orderByHash[column.field] === 1}"
                                    ></yu-icon>
                                    <yu-icon 
                                        name="desc"
                                        :class="{active: orderByHash[column.field] === -1}"
                                    ></yu-icon>
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="item.id">
                        <th v-if="selection">
                            <input 
                            type="checkbox"
                            :checked="itemSelected(item)"
                            @change="onChangeItem(item, index, $event)">
                        </th>
                        <td v-if="indexVisible">{{index + 1}}</td>
                        <template v-for="column in columns">
                            <td :key="column.field">{{item[column.field]}}</td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="yu-table-loading" v-if="loading">
            <yu-icon name="loading"></yu-icon>
        </div>
    </div>
</template>

<script>
import YuIcon from './icon'
export default {
    name: 'YuTable',
    components: {YuIcon},
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true,
            validator: (arr) => { // todo: data每项都要有唯一的id
                return arr.every(item => item.id !== undefined)
            }
        },
        selectedItems: {
            type: Array,
            default: () => []
        },
        orderBy: {
            type: Array,
            default: () => []
        },
        selection: {
            type: Boolean,
            default: false
        },
        indexVisible: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        compact: {
            type: Boolean,
            default: false
        },
        height: {
            type: String
        },
        striped: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        let orderByHash = {}
        this.orderBy.forEach(field => {
            orderByHash[field] = 0
        })
        return {
            orderByHash,
            tableCopy: null
        }
    },
    computed: {
        allItemsSelected() {
            if (this.selectedItems.length !== this.data.length) return false
            const allIds = this.data.map(item => item.id).sort()
            const selectedIds = this.selectedItems.map(item => item.id).sort()
            for (let i = 0; i < allIds.length; i++) {
                if (allIds[i] !== selectedIds[i]) {
                    return false
                }
            }
            return true
        }
    },
    watch: {
        selectedItems(newSelectedItems) {
            this.$refs.allCheck.indeterminate = newSelectedItems.length > 0 && newSelectedItems.length < this.data.length
        }
    },
    mounted() {
        let tableCopy = this.$refs.table.cloneNode(true)
        this.tableCopy = tableCopy
        tableCopy.classList.add('yu-table-copy')
        this.$refs.wrapper.appendChild(tableCopy)
        this.updateHeaderWidth()
        window.addEventListener('resize', this.updateHeaderWidth)

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateHeaderWidth)
        this.tableCopy.remove()
    },
    methods: {
        updateHeaderWidth() {
            let tableHeader = Array.from(this.$refs.table.children).filter(node => node.tagName.toLowerCase() === 'thead')[0]
            let tableHeaderCopy
            Array.from(this.tableCopy.children).forEach(node => {
                if (node.tagName.toLowerCase() !== 'thead') {
                    node.remove()
                } else {
                    tableHeaderCopy = node
                }
            })
            const thNodes = Array.from(tableHeader.children[0].children)
            thNodes.forEach((th, index) => {
                if (index !== thNodes.length - 1) {
                    const {width} = th.getBoundingClientRect()
                    tableHeaderCopy.children[0].children[index].style.width = `${width}px`
                }
            })
        },
        onChangeItem(item, index, e) {
            const checked = e.target.checked
            let copy = JSON.parse(JSON.stringify(this.selectedItems))
            if (checked) {
                copy.push(item)
            } else {
                copy = copy.filter(i => i.id !== item.id)
            }
            this.$emit('update:selectedItems', copy)
        },
        onChangeAllItems(e) {
            const checked = e.target.checked
            this.$emit('update:selectedItems', checked ? this.data : [])           
        },
        itemSelected(item) {
            return this.selectedItems.filter(i => i.id === item.id).length
        },
        changeOrderByHash(field) {
            if (this.orderByHash[field] === 1) {
                this.orderByHash[field] = -1
            } else {
                this.orderByHash[field]++
            }
            this.$emit('changeOrderBy', {field, value: this.orderByHash[field]})
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/_var';
$grey: darken($grey, 10%);
.yu-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    &.border {
        border: 1px solid $grey;
        th, td {
            border: 1px solid $grey;
        }
    }
    &.compact {
        th, td {
            padding: 4px;
        }
    }
    &.striped {
        tbody {
            > tr {
                &:nth-child(odd) {
                    background-color: lighten($grey, 10%);
                }
                &:nth-child(even) {
                    background-color: white;
                }
            }
        }
    }
    tr {
        border-bottom: 1px solid $grey;
        text-align: left;
        th {
            user-select: none;
        }
        th, td {
            padding: 8px;
        }
    }
    &-header {
        display: flex;
        align-items: center;
    }
    &-sort {
        display: inline-flex;
        flex-direction: column;
        margin: 0 4px;
        cursor: pointer;
        svg {
            width: 10px;
            height: 10px;
            fill: $grey;
            position: relative;
            &.active {
                fill: red;
            }
            &:first-child {
                bottom: -1px;
            }
            &:last-child {
                top: -1px;
            }
        }
    }
    &-wrapper {
        position: relative;
    }
    &-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.8);
        svg {
            width: 50px;
            height: 50px;
            @include loading;
        }
    }
    &-copy {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
    }
    
}
</style>


