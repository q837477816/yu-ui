<template>
    <div class="yu-date-picker" ref="wrapper">
        <yu-popover 
            ref="popover"
            position="bottom" 
            custom-class="xxx" 
            :container="popoverContainer"
            @open="onPopoverOpen">
            <yu-input 
                type="text" 
                :value="formattedValue" 
                @input="onInput"
                @change="onChange"/>
            <template slot="content">
                <div class="yu-date-picker-pop" @selectstart.prevent>
                    <div class="yu-date-picker-nav">
                        <span 
                            :class="[
                                'yu-date-picker-prev-year',
                                'yu-date-picker-nav-item',
                                {preYearNavDisabled}
                            ]"
                            @click="onClickPrevYear">
                            <yu-icon name="back"/>
                        </span>
                        <span 
                            :class="[
                                'yu-date-picker-prev-month', 
                                'yu-date-picker-nav-item',
                                {preMonthNavDisabled}
                            ]" 
                            @click="onClickPrevMonth">
                            <yu-icon name="left"/>
                        </span>
                        <span class="yu-date-picker-yearAndMonth" @click="onClickMonth">
                            <span>
                                {{display.year}}年
                            </span>
                            <span>
                                {{display.month + 1}}月
                            </span>
                        </span>
                        <span 
                            :class="[
                                'yu-date-picker-next-month', 
                                'yu-date-picker-nav-item',
                                {nextMonthNavDisabled}
                            ]" 
                            @click="onClickNextMonth">
                            <yu-icon name="right"/>
                        </span>
                        <span 
                            :class="[
                                'yu-date-picker-next-year', 
                                'yu-date-picker-nav-item',
                                {nextYearNavDisabled}
                            ]" 
                            @click="onClickNextYear">
                            <yu-icon name="next"/>
                        </span>
                    </div>
                    <div class="yu-date-picker-panels">
                        <div class="yu-date-picker-content">
                            <template v-if="mode === 'monthAndYear'">
                                <div class="yu-date-picker-selectYearAndMonth">
                                    <select :value="display.year" @change="onSelectYearChange">
                                        <option v-for="year in selectableYears" :key="year" :value="year">{{year}}</option>
                                    </select>年
                                    <select :value="display.month" @change="onSelectMonthChange">
                                        <option v-for="month in 12" :key="month" :value="month-1">{{month}}</option>
                                    </select>月
                                </div>
                            </template>
                            <template v-else>
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
                                        :class="{
                                            currentMonth: isCurrentMonth(day), 
                                            selected: isSelected(day),
                                            today: isToday(day)
                                        }"
                                        v-for="day in getWeek(i, visibleDays)"
                                        :key="day.getTime()"
                                        @click="onClickCell(day)">
                                        {{day.getDate()}}
                                    </span>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="yu-date-picker-actions">
                        <yu-button @click="onClickToday">今天</yu-button>
                        <yu-button @click="onClickClear">清除</yu-button>
                    </div>
                </div>
            </template>
        </yu-popover>
    </div>
</template>

<script>
import YuPopover from 'src/popover/popover'
import YuInput from 'src/input/input'
import YuIcon from 'src/icon'
import YuButton from 'src/button/button'
import { 
    getYearMonthDay, 
    getFirstDayOfMonth, 
    getLastDayOfMonth, 
    addYear, 
    addMonth 
} from '../utils'

export default {
    name: 'YuDatePicker',
    components: { YuPopover, YuInput, YuIcon, YuButton },
    props: {
        value: {
            type: Date
        },
        range: {
            type: Array,
            default: () => [new Date(1970, 1), new Date()]
        }
    },
    data() {
        let [year, month] = getYearMonthDay(this.value || new Date())
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
            if (!this.value) return ''
            let [year, month, day] = getYearMonthDay(this.value)
            month = (month + 1 < 10 ? '0' : '') + (month + 1)
            day = (day < 10 ? '0' : '') + day
            return `${year}-${month}-${day}`
        },
        selectableYears() {
            const years = []
            const [startYear] = getYearMonthDay(this.range[0])
            const [endYear] = getYearMonthDay(this.range[1])
            for (let i = startYear; i <= endYear; i++) {
                years.push(i)
            }
            return years
        },
        preYearNavDisabled() {
            const preYearDate = new Date(this.display.year - 1, this.display.month)
            return preYearDate < this.range[0]
        },
        nextYearNavDisabled() {
            const nextYearDate = new Date(this.display.year + 1, this.display.month)
            return nextYearDate > this.range[1]
        },
        preMonthNavDisabled() {
            const preMonthDate = new Date(this.display.year, this.display.month - 1)
            return preMonthDate < this.range[0]
        },
        nextMonthNavDisabled() {
            const nextMonthDate = new Date(this.display.year, this.display.month + 1)
            return nextMonthDate > this.range[1]
        }
    },
    mounted() {
        this.popoverContainer = this.$refs.wrapper
    },
    methods: {
        onClickMonth() {
            this.mode = this.mode === 'monthAndYear' ? 'day' : 'monthAndYear'
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
                this.$refs.popover.close()
            }
        },
        isCurrentMonth(date) {
            const {year, month} = this.display
            let [year1, month1] = getYearMonthDay(date)
            return year1 === year && month1 === month
        },
        isSelected(date) {
            if (!this.value) return false
            const [year, month, day] = getYearMonthDay(date)
            const [year1, month1, day1] = getYearMonthDay(this.value)
            return year === year1 && month === month1 && day === day1
        },
        isToday(date) {
            const [year, month, day] = getYearMonthDay(date)
            const [year1, month1, day1] = getYearMonthDay(new Date())
            return year === year1 && month === month1 && day === day1
        },
        onClickPrevYear() {
            if (!this.preYearNavDisabled) {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = addYear(oldDate, -1)
                const [year, month] = getYearMonthDay(newDate)
                this.display = {year, month}
            }
        },
        onClickNextYear() {
            if (!this.nextYearNavDisabled) {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = addYear(oldDate, 1)
                const [year, month] = getYearMonthDay(newDate)
                this.display = {year, month}
            }
        },
        onClickPrevMonth() {
            if (!this.preMonthNavDisabled) {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = addMonth(oldDate, -1)
                const [year, month] = getYearMonthDay(newDate)
                this.display = {year, month}
            }
        },
        onClickNextMonth() {
            if (!this.nextMonthNavDisabled) {
                const oldDate = new Date(this.display.year, this.display.month)
                const newDate = addMonth(oldDate, 1)
                const [year, month] = getYearMonthDay(newDate)
                this.display = {year, month}
            }
        },
        onSelectYearChange(e) {
            const year = Number.parseInt(e.target.value)
            const date = new Date(year, this.display.month)
            if (date < this.range[0] || date > this.range[1]) {
                alert('no')
                e.preventDefault()
                e.target.value = this.display.year
            } else {
                this.display.year = year
            }
        },
        onSelectMonthChange(e) {
            const month = Number.parseInt(e.target.value)
            const date = new Date(this.display.year, month)
            if (date < this.range[0] || date > this.range[1]) {
                alert('no')
                e.preventDefault()
                e.target.value = this.display.month
            } else {
                this.display.month = month
            }
        },
        onClickToday() {
            const today = new Date()
            const [year, month, day] = getYearMonthDay(today)
            this.display = {year, month}
            this.$emit('input', today)
        },
        onClickClear() {
            this.$emit('input', undefined)
            this.$refs.popover.close()
        },
        onPopoverOpen() {
            this.mode = 'day'
        },
        onInput(value) {
            const regex = /^([1-9]\d{3})-(0[1-9]|1[12])-(0[1-9]|[12][0-9]|3[01])$/
            const result = value.match(regex)
            if (result) {
                const year = Number.parseInt(result[1])
                const month = Number.parseInt(result[2]) - 1
                const day = Number.parseInt(result[3])
                this.display = {year, month}
                this.$emit('input', new Date(year, month, day))
            }
        },
        onChange(value, e) {
            const regex = /^([1-9]\d{3})-(0[1-9]|1[12])-(0[1-9]|[12][0-9]|3[01])$/
            const result = value.match(regex)
            if (!result) {
                e.target.value = this.formattedValue
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
$cell-width: 32px;
$cell-height: 32px;
.yu-date-picker {
    &-nav {
        display: flex;
    }
    &-yearAndMonth {
        width: calc(#{$cell-width} * 3);
        margin: auto;
        text-align: center;
        cursor: pointer;
    }
    &-nav-item, &-weekday, &-cell {
        width: $cell-width;
        height: $cell-height;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    &-nav-item {
        cursor: pointer;
        &.preYearNavDisabled, 
        &.preMonthNavDisabled,
        &.nextYearNavDisabled,
        &.nextMonthNavDisabled {
            cursor: not-allowed;
        }
    }
    &-cell {
        color: #ddd;
        cursor: not-allowed;
        border-radius: $border-radius;
        box-sizing: border-box;
        &.currentMonth {
            color: #333;
            &:hover {
                cursor: pointer;
                background-color: $blue;
                color: #fff;
            }
        }
        &.today {
            border: 1px solid red;
            background-color: $grey;
        }
        &.selected {
            border: 1px solid $blue;
        }
    }
    &-selectYearAndMonth {
        width: calc(#{$cell-width} * 7);
        height: calc(#{$cell-height} * 7);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-actions {
        padding: 8px;
        text-align: right;
    }
}
/deep/.xxx {
    padding: 0;
}
</style>


