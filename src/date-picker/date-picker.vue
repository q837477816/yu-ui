<template>
    <div>
        <yu-popover position="bottom">
            <yu-input type="text"/>
            <template slot="content">
                <div class="yu-date-picker-pop">
                    <div class="yu-date-picker-nav">
                        <span><yu-icon name="settings"/></span>
                        <span><yu-icon name="settings"/></span>
                        <span @click="onClickYear">2012年</span>
                        <span @click="onClickMonth">8月</span>
                        <span><yu-icon name="settings"/></span>
                        <span><yu-icon name="settings"/></span>
                    </div>
                    <div class="yu-date-picker-panels">
                        <div v-if="mode === 'years'" class="yu-date-picker-content">年</div>
                        <div v-else-if="mode === 'months'" class="yu-date-picker-content">月</div>
                        <div v-else class="yu-date-picker-content">
                            <div class="yu-date-picker-weekdays">
                                <span v-for="weekday in weekdays">
                                    {{weekday}}
                                </span>
                            </div>
                            <div class="yu-date-picker-row" v-for="i in 6">
                                <span class="yu-date-picker-col" v-for="day in getWeek(i, visibleDays)">
                                    {{day.getDate()}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="yu-date-picker-actions">
                        <yu-button>清除</yu-button>
                    </div>
                </div>
            </template>
        </yu-popover>
    </div>
</template>

<script>
import YuPopover from '../popover'
import YuInput from '../input'
import YuIcon from '../icon'
import YuButton from '../button/button'
import { getYearMonthDay, getFirstDayOfMonth, getLastDayOfMonth } from '../utils'

export default {
    name: 'YuDatePicker',
    components: { YuPopover, YuInput, YuIcon, YuButton },
    data() {
        return {
            mode: 'days',
            value: new Date(),
            weekdays: ['一', '二', '三', '四', '五', '六', '日']
        }
    },
    computed: {
        visibleDays() {
            let date = this.value
            let first = getFirstDayOfMonth(date)
            let last = getLastDayOfMonth(date)
            let array = []
            let [year, month, day] = getYearMonthDay(date)
            for (let i = first.getDate(); i <= last.getDate(); i++) {
                array.push(new Date(year, month, i))
            }
            let n = first.getDay() === 0 ? 7 : first.getDay() // 1-7代表周一到周天
            let prefix = [], suffix = []
            let prefixNum = n - 1
            for (let i = 0; i < prefixNum; i++) {
                prefix.unshift(new Date(year, month, -i))
            } 
            let suffixNum = 42 - array.length - suffix.length
            for (let i = 0; i < suffixNum; i++) {
                suffix.push(new Date(year, month + 1, i))
            }
            return [...prefix, ...array, ...suffix]
        }
    },
    mounted() {
        
    },
    methods: {
        onClickYear() {
            this.mode = 'years'
        },
        onClickMonth() {
            this.mode = 'months'
        },
        getWeek(n, days) {
            let start = (n - 1) * 7
            let end = n * 7
            let week = []
            for (let i = start; i < end; i++) {
                week.push(days[i])
            }
            return week
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


