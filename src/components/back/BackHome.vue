<template>
  <el-container class="backhome-container">
    <el-aside width="200px">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <!-- <i class="el-icon-location"></i> -->
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <!-- <i class="el-icon-document"></i> -->
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <!-- <i class="el-icon-setting"></i> -->
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>
          <span>这是一个属于我的个人博客</span>
        </div>
        <div>
          <el-button round @click="backHome()">首页</el-button>
          <el-button type="warning" round @click="logout()">退出</el-button>
        </div>
      </el-header>
      <el-main>
        <Edit></Edit>
      </el-main>
      <el-footer>
      <label>
        <span>
          <b>redbird个人博客</b>
        </span>
      </label>
      <label>©版权所有©2020 WZQ</label>
    </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Edit from "./Edit";
import Edit1 from "./Edit1";
export default {
  components: {
    Edit,
    Edit1
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/home");
    },
    backHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.el-aside{
  background-color: rgb(179, 192, 209, 0.7);
  border-radius: 5px;
  margin: 0 auto;
  align-items: center;
  align-content: center;
}
.backhome-container {
  width: 95%;
  margin: 0 auto;
  margin-top:10px;
}
.el-header {
  background-color: rgb(179, 192, 209, 0.7);
  color: #333;
  text-align: center;
  line-height: 80px;
  border-radius: 5px;
  align-items: center; /*元素上下居中*/
  display: flex;
  justify-content: space-between;
}
.el-footer {
  background-color: rgb(179, 192, 209, 0.5);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: rgb(233, 238, 243, 0.5);
  color: #333;
  text-align: center;
  margin-top: 10px;
  border-radius: 5px;
}
.Edit {
  width: 100%;
}
.el-tabs {
  min-height: 100%;
}
</style>