<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parent" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      parent: [],
    };
  },
  created() {
    this.fetchParent();
    this.id && this.fetch();
  },
  methods: {
    // 发起请求
    async save() {
      // 查询是否存在ID 若存在则则修改内容 若不存在就添加内容
      if (this.id) {
        const res = await this.$http.put(
          `rest/categories/${this.id}`,
          this.model
        );
      } else {
        const res = await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    // 请求name 显示在输入框上
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchParent() {
      const res = await this.$http.get(`rest/categories`);
      this.parent = res.data;
    },
  },
};
</script>

<style>
</style>