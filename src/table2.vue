<template>
    <div class="yu-table-wrapper">
        <div class="yu-table-header">
            <table :class="{compact}">
                <colgroup>
                    <col v-for="column in columns" :width="column.width">
                </colgroup>
                <thead>
                    <tr>
                        <th v-for="column in columns">
                            {{column.label}}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="yu-table-body" :class="{striped}">
            <table :class="{compact}">
                <colgroup>
                    <col v-for="column in columns" :width="column.width">
                </colgroup>
                <tr v-for="item in data">
                    <td v-for="column in columns">
                        {{item[column.field]}}
                    </td>
                </tr>
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
    }
    tr {
        border-bottom: 1px solid $grey;
        text-align: left;
        th, td {
            padding: 4px;
        }
    }
    .yu-table-body {
        tr:hover {
            background-color: #f5f7fa;
        }
        &.striped {
            tr {
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
        }
    }
    .compact {
        th, td {
            padding: 8px;
        }
    }
}
</style>


