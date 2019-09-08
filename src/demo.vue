<template>
  <div class="demo-wrapper">
    <!-- <yu-checkbox v-model="single">单选</yu-checkbox>

    数据：{{ single }}-->

    <yu-tree :data="data" checkbox-visible />
  </div>
</template>

<script>
import YuTree from "src/tree/tree";
export default {
  components: { YuTree },
  data() {
    return {
      data: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// :root {
//   	--font-size: 14px;
// }
// body {
//   	font-size: var(--font-size);
// }
// .demo-wrapper {
//   	padding: 20px;
// }
</style>


