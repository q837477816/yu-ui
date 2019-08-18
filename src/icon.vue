<template>
    <svg class="yu-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`" />
    </svg>
</template>

<script>
import './svg.js' 
export default {
    name: 'YuIcon',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .yu-icon{width: 1em; height: 1em;}
</style>
