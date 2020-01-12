<template>
  <div class="login-container">
    <div class="login-box">
      <el-avatar :size="150" :src="circleUrl"></el-avatar>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="login-loginForm"
      >
        <el-form-item label="用户名" prop="uname">
          <el-input v-model="loginForm.uname" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="loginForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-search"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "../network/request";
export default {
  data() {
    var checkUname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
      return callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        uname: [{ validator: checkUname, trigger: "blur" }]
      },
      loginForm: {
        uname: "wzq",
        pass: "1234"
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          console.log("error submit!!");
          return;
        }
        request({
          method: "post",
          url: "/user/login",
          data: {
            data:this.loginForm
          }
        })
          .then(res => {           
            console.log(res);
            if(res.code == 20002){
                return this.$message.error("登录失败");//elementUI的提示组件               
            }else{
                this.$message.success("登录成功")//elementUI的提示组件   
                console.log(res);
                //保存token
                window.sessionStorage.setItem('token',res.data.token)
                //通过编程式将导航跳转到后台页面
                this.$router.push('/backHome');
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #253138;
  height: 100%;
}
.login-box {
  background-color: rgb(255, 255, 255,0.3);
  width: 600px;
  height: 400px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-input {
  width: 70%;
  align-content: left;
}
.el-form-item {
  text-align: left;
  margin-left: 40px;
}
</style>