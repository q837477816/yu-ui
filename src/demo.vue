<template>
  <div class="demo-wrapper" style="display: flex; justify-content: center;">
    <yu-table
      :columns="columns"
      :data="data"
      indexVisible>

      <template slot-scope="{row, index}" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="birthday">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="address">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <yu-button @click="handleSave(index)">保存</yu-button>
          <yu-button @click="editIndex = -1">取消</yu-button>
        </div>
        <div v-else>
          <yu-button @click="handleEdit(row, index)">操作</yu-button>
        </div>
      </template>

    </yu-table>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      columns: [
        {
          label: "姓名",
          slot: "name",
        },
        {
          label: "年龄",
          slot: "age"
        },
        {
          label: "出生日期",
          slot: "birthday",
        },
        {
          label: "地址",
          slot: "address"
        },
        {
          label: "操作",
          slot: "action"
        }
      ],
      data: [
        {
          name: "王小明",
          age: 18,
          birthday: "919526400000",
          address: "北京市朝阳区芍药居"
        },
        {
          name: "张小刚",
          age: 25,
          birthday: "696096000000",
          address: "北京市海淀区西二旗"
        },
        {
          name: "李小红",
          age: 30,
          birthday: "563472000000",
          address: "上海市浦东新区世纪大道"
        },
        {
          name: "周小伟",
          age: 26,
          birthday: "687024000000",
          address: "深圳市南山区深南大道"
        }
      ],
      editName: '',  // 第一列输入框
      editAge: '',  // 第二列输入框
      editBirthday: '',  // 第三列输入框
      editAddress: '',  // 第四列输入框
      editIndex: -1,  // 当前聚焦的输入框的行数
    };
  },

  mounted() {},

  methods: {
    handleEdit (row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editAddress = row.address;
      this.editBirthday = row.birthday;
      this.editIndex = index;
    },
    handleSave (index) {
      this.data[index].name = this.editName;
      this.data[index].age = this.editAge;
      this.data[index].birthday = this.editBirthday;
      this.data[index].address = this.editAddress;
      this.editIndex = -1;
    },
    getBirthday (birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}-${month}-${day}`;
    }
  }
};
</script>

<style>
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


