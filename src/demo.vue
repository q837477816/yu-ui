<template>
    <div class="demo-wrapper">
		<yu-input v-model="value" placeholder="请输入文本"></yu-input>
        {{ value }}
    </div>
</template>

<script>
export default {
	data() {
    	return {
			value: ''
    	};
  	},
};
</script>

<style lang="scss" scoped>
* {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
}

:root {
  	--font-size: 14px;
}
body {
  	font-size: var(--font-size);
}
.demo-wrapper {
  	padding: 20px;
}
</style>


