<template>
  <div class="demo-wrapper" style="display: flex; justify-content: center;">
    <yu-table
      :columns="columns"
      :data="data"
      indexVisible
    ></yu-table>
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
          field: "name",
          render: (h, { row, index }) => {
            let edit;

            if (this.editIndex === index) {
              edit = [h('input', {
                domProps: {
                  value: row.name
                },
                on: {
                  input: (event) => {
                    this.editName = event.target.value;
                  }
                }
              })];
            } else {
              edit = row.name;
            }

            return h('div', [
              edit
            ]);
          }
        },
        {
          label: "年龄",
          field: "age"
        },
        {
          label: "出生日期",
          field: "birthday",
          render: (h, { row, column, index }) => {
            const date = new Date(parseInt(row.birthday));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const birthday = `${year}-${month}-${day}`;

            return h("span", birthday);
          }
        },
        {
          label: "地址",
          field: "address"
        },
        {
          label: "操作",
          render: (h, {row, index}) => {
            if (this.editIndex === index) {
              return [
                h('yu-button', {
                  on: {
                    click: () => {
                      this.data[index].name = this.editName;
                      this.data[index].age = this.editAge;
                      this.data[index].birthday = this.editBirthday;
                      this.data[index].address = this.editAddress;
                      this.editIndex = -1;
                    }
                  }
                }, '保存'),
                h('yu-button', {
                  style: {
                    marginLeft: '6px'
                  },
                  on: {
                    click: () => {
                      this.editIndex = -1;
                    }
                  }
                }, '取消')
              ]
            } else {
              return h('yu-button', {
                on: {
                  click: () => {
                    this.editName = row.name;
                    this.editAge = row.age;
                    this.editAddress = row.address;
                    this.editBirthday = row.birthday;
                    this.editIndex = index;
                  }
                }
              }, '修改');
            }
          }
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

  methods: {}
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


