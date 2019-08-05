<template>
  	<div class="demo-wrapper">
		<yu-date-picker :value="d" @input="d = $event"></yu-date-picker>
		<p>other content</p>
  	</div>
</template>

<script>
export default {
	  data() {
    	return {
			d: new Date()
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


