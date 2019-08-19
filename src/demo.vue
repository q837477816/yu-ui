<template>
  	<div class="demo-wrapper">
		<yu-button loading>加载中</yu-button>
		<yu-button icon="back">加载中</yu-button>
		<yu-button disabled>加载中</yu-button>
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


