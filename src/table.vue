<template>
    <div class="yu-table-wrapper">
        <table :class="['yu-table', {border, compact, striped}]">
            <thead>
                <tr>
                    <th>
                        <input 
                        ref="allCheck"
                        type="checkbox" 
                        @change="onChangeAllItems">
                    </th>
                    <th v-if="indexVisible">#</th>
                    <th v-for="column in columns" :key="column.field">
                        {{column.text}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="item.id">
                    <th>
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
        th, td {
            padding: 8px;
        }
    }
    
}
</style>


