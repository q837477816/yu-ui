<template>
    <div class="yu-table-wrapper">
        <table :class="['yu-table', {border, compact, striped}]">
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
        striped: {
            type: Boolean,
            default: true
        }
    },
    data() {
        let orderByHash = {}
        this.orderBy.forEach(filed => {
            orderByHash[filed] = 0
        })
        return {
            orderByHash
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
    methods: {
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
        changeOrderByHash(filed) {
            if (this.orderByHash[filed] === 1) {
                this.orderByHash[filed] = -1
            } else {
                this.orderByHash[filed]++
            }
            this.$emit('changeOrderBy', {filed, value: this.orderByHash[filed]})
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
    
}
</style>


