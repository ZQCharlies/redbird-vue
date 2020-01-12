<template>
  <div class="head-contain">  
    <div id="head-img">
      <!-- <img class="smaller-image" src="../assets/logo.png" alt="picture"> -->
      <h1><span>我的个人博客</span></h1>
    </div>
    <div>
      <el-menu router mode="horizontal" @select="handleSelect">
        <el-menu-item index="/home" ><b>博客</b></el-menu-item>
        <el-menu-item index=""><b>实验室</b></el-menu-item>
      </el-menu>
    </div>
    <div>
      <el-link icon="el-icon-edit">
        <router-link to="/backHome">个人中心</router-link>
        <!-- <router-link to="/home" @click="logout()">登出</router-link> -->
        <!-- <label @click="logout()">登出</label> -->
      </el-link>
    </div>
    <div>
      <el-input placeholder="请输入要搜索的内容" v-model="input" clearable></el-input>
      <el-button icon="el-icon-search" circle></el-button>
    </div>
    <div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.head-contain{
  margin-top: 5px;
  text-align: center;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:10px;/**设置圆角 */
}
.el-menu{
  background-color: rgba(255, 255, 255, 0);
}
.el-link {
  height: 80%;
  margin-right: 5px;
  margin-left: 5px;
}
.el-input {
  width: 200px;
}
.smaller-image{
  width: 50px;
  height: 50px;
  float: left;

}
#head-img{
 width: 20%;
 height: 100%;
}
</style>