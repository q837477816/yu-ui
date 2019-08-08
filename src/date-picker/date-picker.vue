<template>
    <div class="yu-date-picker" ref="wrapper">
        <yu-popover position="bottom" custom-class="xxx" :container="popoverContainer">
            <yu-input type="text" :value="formattedValue"/>
            <template slot="content">
                <div class="yu-date-picker-pop">
                    <div class="yu-date-picker-nav">
                        <span class="yu-date-picker-prev-year yu-date-picker-nav-item" @click="onClickPrevYear">
                            <yu-icon name="back"/></span>
                        <span class="yu-date-picker-prev-month yu-date-picker-nav-item" @click="onClickPrevMonth">
                            <yu-icon name="left"/></span>
                        <span class="yu-date-picker-yearAndMonth">
                            <span @click="onClickYear">{{display.year}}</span>
                            <span @click="onClickMonth">{{display.month + 1}}</span>
                        </span>
                        <span class="yu-date-picker-next-month yu-date-picker-nav-item" @click="onClickNextMonth">
                            <yu-icon name="right"/></span>
                        <span class="yu-date-picker-next-year yu-date-picker-nav-item" @click="onClickNextYear">
                            <yu-icon name="next"/>
                        </span>
                    </div>
                    <div class="yu-date-picker-panels">
                        <div v-if="mode === 'years'" class="yu-date-picker-content">年</div>
                        <div v-else-if="mode === 'months'" class="yu-date-picker-content">月</div>
                        <div v-else class="yu-date-picker-content">
                            <div class="yu-date-picker-weekdays">
                                <span class="yu-date-picker-weekday" v-for="weekday in weekdays" :key="weekday">
                                    {{weekday}}
                                </span>
                            </div>
                            <div 
                                class="yu-date-picker-row" 
                                v-for="i in 6"
                                :key="i">
                                <span 
                                    class="yu-date-picker-cell"
                                    :class="{currentMonth: isCurrentMonth(day)}"
                                    v-for="day in getWeek(i, visibleDays)"
                                    :key="day.getTime()"
                                    @click="onClickCell(day)">
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
import { getYearMonthDay, getFirstDayOfMonth, getLastDayOfMonth, addYear, addMonth } from '../utils'

export default {
    name: 'YuDatePicker',
    components: { YuPopover, YuInput, YuIcon, YuButton },
    props: {
        value: {
            type: Date,
            default: () => new Date()
        }
    },
    data() {
        let [year, month] = getYearMonthDay(this.value)
        return {
            mode: 'days',
            weekdays: ['一', '二', '三', '四', '五', '六', '日'],
            popoverContainer: null,
            display: {year, month}
        }
    },
    computed: {
        visibleDays() {
            let date = new Date(this.display.year, this.display.month, 1)
            let first = getFirstDayOfMonth(date)
            let array = []
            let weekdayOfFirst = first.getDay() === 0 ? 7 : first.getDay() // 1-7代表周一到周天
            let x = first - (weekdayOfFirst - 1) * 1000 * 3600 * 24
            for (let i = 0; i < 42; i++) {
                array.push(new Date(x + i * 1000 * 3600 * 24))
            }
            return array;
        },
        formattedValue() {
            const [year, month, day] = getYearMonthDay(this.value)
            return `${year}-${month + 1}-${day}`
        }
    },
    mounted() {
        this.popoverContainer = this.$refs.wrapper
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
        },
        onClickCell(date) {
            if (this.isCurrentMonth(date)) {
                this.$emit('input', date)
            }
        },
        isCurrentMonth(date) {
            const {year, month} = this.display
            let [year1, month1] = getYearMonthDay(date)
            return year1 === year && month1 === month
        },
        onClickPrevYear() {
            const oldDate = new Date(this.display.year, this.display.month)
            const newDate = addYear(oldDate, -1)
            const [year, month] = getYearMonthDay(newDate)
            this.display = {year, month}
        },
        onClickNextYear() {
            const oldDate = new Date(this.display.year, this.display.month)
            const newDate = addYear(oldDate, 1)
            const [year, month] = getYearMonthDay(newDate)
            this.display = {year, month}
        },
        onClickPrevMonth() {
            const oldDate = new Date(this.display.year, this.display.month)
            const newDate = addMonth(oldDate, -1)
            const [year, month] = getYearMonthDay(newDate)
            this.display = {year, month}
        },
        onClickNextMonth() {
            const oldDate = new Date(this.display.year, this.display.month)
            const newDate = addMonth(oldDate, 1)
            const [year, month] = getYearMonthDay(newDate)
            this.display = {year, month}
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-date-picker {
    &-nav {
        display: flex;
    }
    &-yearAndMonth {
        margin: auto;
    }
    &-nav-item, &-weekday, &-cell {
        width: 32px;
        height: 32px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    &-cell {
        color: #ddd;
        &.currentMonth {
            color: #333;
        }
    }
}
/deep/.xxx {
    padding: 0;
}
</style>


