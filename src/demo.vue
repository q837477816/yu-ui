<template>
  <div class="demo-wrapper" style="display: flex; justify-content: center;">
    <!-- <yu-table
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

    </yu-table> -->
    <yu-scroll style="width: 500px; height: 500px;">
      <p>112345678911121314151617181920112345678911121314151617181920112345678911121314151617181920112345678911121314151617181920</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>19</p>
      <p>20</p>
      <p>21</p>
      <p>22</p>
      <p>23</p>
      <p>24</p>
      <p>25</p>
      <p>26</p>
      <p>27</p>
      <p>28</p>
      <p>29</p>
      <p>30</p>
      <p>31</p>
      <p>32</p>
      <p>33</p>
      <p>34</p>
      <p>35</p>
      <p>36</p>
      <p>37</p>
      <p>38</p>
      <p>39</p>
      <p>40</p>
      <p>41</p>
      <p>42</p>
      <p>43</p>
      <p>44</p>
      <p>45</p>
      <p>46</p>
      <p>47</p>
      <p>48</p>
      <p>49</p>
      <p>50</p>
      <p>51</p>
      <p>52</p>
      <p>53</p>
      <p>54</p>
      <p>55</p>
      <p>56</p>
      <p>57</p>
      <p>58</p>
      <p>59</p>
      <p>60</p>
      <p>61</p>
      <p>62</p>
      <p>63</p>
      <p>64</p>
      <p>65</p>
      <p>66</p>
      <p>67</p>
      <p>68</p>
      <p>69</p>
      <p>70</p>
      <p>71</p>
      <p>72</p>
      <p>73</p>
      <p>74</p>
      <p>75</p>
      <p>76</p>
      <p>77</p>
      <p>78</p>
      <p>79</p>
      <p>80</p>
      <p>81</p>
      <p>82</p>
      <p>83</p>
      <p>84</p>
      <p>85</p>
      <p>86</p>
      <p>87</p>
      <p>88</p>
      <p>89</p>
      <p>90</p>
      <p>91</p>
      <p>92</p>
      <p>93</p>
      <p>94</p>
      <p>95</p>
      <p>96</p>
      <p>97</p>
      <p>98</p>
      <p>99</p>
      <p>100</p>
    </yu-scroll>
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
  created() {

  },
  mounted() {
    // const arr = [
    //   {
    //     name: "王小明",
    //     age: 18,
    //     birthday: "919526400000",
    //     address: "北京市朝阳区芍药居"
    //   },
    //   {
    //     name: "张小刚",
    //     age: 25,
    //     birthday: "696096000000",
    //     address: "北京市海淀区西二旗"
    //   },
    //   {
    //     name: "李小红",
    //     age: 30,
    //     birthday: "563472000000",
    //     address: "上海市浦东新区世纪大道"
    //   },
    //   {
    //     name: "周小伟",
    //     age: 26,
    //     birthday: "687024000000",
    //     address: "深圳市南山区深南大道"
    //   },
    //   {
    //     name: "王小明",
    //     age: 18,
    //     birthday: "919526400000",
    //     address: "北京市朝阳区芍药居"
    //   },
    //   {
    //     name: "张小刚",
    //     age: 25,
    //     birthday: "696096000000",
    //     address: "北京市海淀区西二旗"
    //   },
    //   {
    //     name: "李小红",
    //     age: 30,
    //     birthday: "563472000000",
    //     address: "上海市浦东新区世纪大道"
    //   },
    //   {
    //     name: "周小伟",
    //     age: 26,
    //     birthday: "687024000000",
    //     address: "深圳市南山区深南大道"
    //   },{
    //     name: "王小明",
    //     age: 18,
    //     birthday: "919526400000",
    //     address: "北京市朝阳区芍药居"
    //   },
    //   {
    //     name: "张小刚",
    //     age: 25,
    //     birthday: "696096000000",
    //     address: "北京市海淀区西二旗"
    //   },
    //   {
    //     name: "李小红",
    //     age: 30,
    //     birthday: "563472000000",
    //     address: "上海市浦东新区世纪大道"
    //   },
    //   {
    //     name: "周小伟",
    //     age: 26,
    //     birthday: "687024000000",
    //     address: "深圳市南山区深南大道"
    //   },{
    //     name: "王小明",
    //     age: 18,
    //     birthday: "919526400000",
    //     address: "北京市朝阳区芍药居"
    //   },
    //   {
    //     name: "张小刚",
    //     age: 25,
    //     birthday: "696096000000",
    //     address: "北京市海淀区西二旗"
    //   },
    //   {
    //     name: "李小红",
    //     age: 30,
    //     birthday: "563472000000",
    //     address: "上海市浦东新区世纪大道"
    //   },
    //   {
    //     name: "周小伟",
    //     age: 26,
    //     birthday: "687024000000",
    //     address: "深圳市南山区深南大道"
    //   },{
    //     name: "王小明",
    //     age: 18,
    //     birthday: "919526400000",
    //     address: "北京市朝阳区芍药居"
    //   },
    //   {
    //     name: "张小刚",
    //     age: 25,
    //     birthday: "696096000000",
    //     address: "北京市海淀区西二旗"
    //   },
    //   {
    //     name: "李小红",
    //     age: 30,
    //     birthday: "563472000000",
    //     address: "上海市浦东新区世纪大道"
    //   },
    //   {
    //     name: "周小伟",
    //     age: 26,
    //     birthday: "687024000000",
    //     address: "深圳市南山区深南大道"
    //   }
    // ]
    // let i = 500
    // while (i--) {
    //   this.data = [...this.data, ...arr]
    // }
    // console.log(this.data)
  },

  methods: {
    // handleEdit (row, index) {
    //   this.editName = row.name;
    //   this.editAge = row.age;
    //   this.editAddress = row.address;
    //   this.editBirthday = row.birthday;
    //   this.editIndex = index;
    // },
    // handleSave (index) {
    //   this.data[index].name = this.editName;
    //   this.data[index].age = this.editAge;
    //   this.data[index].birthday = this.editBirthday;
    //   this.data[index].address = this.editAddress;
    //   this.editIndex = -1;
    // },
    // getBirthday (birthday) {
    //   const date = new Date(parseInt(birthday));
    //   const year = date.getFullYear();
    //   const month = date.getMonth() + 1;
    //   const day = date.getDate();

    //   return `${year}-${month}-${day}`;
    // }
  }
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


