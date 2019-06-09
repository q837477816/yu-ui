<template>
    <div class="yu-table-wrapper">
        <div class="yu-table-head">
            <table :class="{compact, border}">
                <colgroup>
                    <col name="selection" width="50px" v-if="selection">
                    <col name="index" width="50px" v-if="indexVisible">
                    <col v-for="column in columns" :width="column.width">
                </colgroup>
                <thead>
                    <tr>
                        <th :align="indexAlign" v-if="selection">
                            <input 
                            ref="allCheck"
                            type="checkbox"
                            :checked="allItemsSelected"
                            @change="onChangeAllItems">
                        </th>
                        <th :align="indexAlign" v-if="indexVisible">#</th>
                        <th v-for="column in columns">
                            {{column.label}}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="yu-table-body">
            <table :class="{striped, compact, border}">
                <colgroup>
                    <col name="selection" width="50px" v-if="selection">
                    <col name="index" width="50px" v-if="indexVisible">
                    <col v-for="column in columns" :width="column.width">
                </colgroup>
                <tbody>
                    <tr v-for="item, index in data">
                        <td :align="indexAlign" v-if="selection">
                            <input 
                            type="checkbox"
                            :checked="itemSelected(item)"
                            @change="onChangeItem(item, index, $event)">
                        </td>
                        <td :align="indexAlign" v-if="indexVisible">{{index + 1}}</td>
                        <td v-for="column in columns">
                            {{item[column.field]}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuTable',
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
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        indexAlign() {
            return this.border ? 'center' : 'left'
        },
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
            this.setIndeterminate()
        },
    },
    mounted() {
        this.setIndeterminate()
    },
    methods: {
        itemSelected(item) {
            return this.selectedItems.filter(i => i.id === item.id).length
        },
        onChangeAllItems(e) {
            const checked = e.target.checked
            this.$emit('update:selectedItems', checked ? this.data : [])           
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
        setIndeterminate() {
            this.$refs.allCheck.indeterminate = this.selectedItems.length > 0 && this.selectedItems.length < this.data.length
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/_var';
$grey: darken($grey, 10%);
.yu-table-wrapper {
    table {
        // width: 100%;
        border-collapse: collapse;
        thead, tbody {
            tr {
                border-bottom: 1px solid $grey;
                text-align: left;
                th, td {
                    padding: 4px;
                }
            }
        }
        tbody > tr {
            &:hover {
                background-color: #f5f7fa;
            }
        }
        &.striped > tbody > tr {
            &:nth-child(odd) {
                background-color: lighten($grey, 10%);
            }
            &:nth-child(even) {
                background-color: #fff;
            }
            &:hover {
                background-color: #f5f7fa;
            }
        }
        &.border {
            th {
                border: 1px solid $grey;
            }
            td {
                border-left: 1px solid $grey;
                border-right: 1px solid $grey;
            }
        }
        &.compact {
            th, td { padding: 8px; }
        }
    }
}
</style>


