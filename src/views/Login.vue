<template>
  <div>
    <el-card header="请登陆" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      localStorage.token = res.data.token    //保存token
      this.$router.push('/')          //登陆成功后跳转路由
      this.$message({             //登陆成功的提示信息
        type: 'success',
        message: '登陆成功'
      })
    }
  }
};
</script>

<style scoped>
.login-card {
  width: 30rem;
  margin: 5rem auto;
}
</style>