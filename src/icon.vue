<template>
    <svg class="yu-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
import './svg.js' 
export default {
    name: 'icon',
    props: {
        name: {
            type: String
        }
    }
}
</script>

<style lang="scss">
    .yu-icon{width: 1em; height: 1em;}
</style>
