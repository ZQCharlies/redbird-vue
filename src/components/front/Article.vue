<template>
  <el-container class="article-container">
    <el-header>
      <Head></Head>
    </el-header>
    <el-main>
      <h1>{{title}}</h1>
      <p>
        <small>作者：{{author}} | 创建时间：{{createtime}}</small>
      </p>
      <p><small>分类：{{category}}</small></p>
      <div v-if="tages.length>0">
         <el-tag :key="tag" v-for="tag in tages">{{tag}}</el-tag>
      </div>
      <el-container class="article-content">
        <p v-html="content"></p>
      </el-container>
    </el-main>
    <el-footer>
      <Foot></Foot>
    </el-footer>
  </el-container>
</template>

<script>
import request from "../../network/request";
import Head from "../common/Head";
import Foot from "../common/Foot";
export default {
  components:{
    Head,
    Foot
  },
  data() {
    return {
      uuid: "",
      author: "",
      title: "",
      abscontent: "",
      content: "",
      category:"",
      tages: [],
      createtime: ""
    };
  },
  created() {
    request({
      url: "/article/" + this.$route.query.uuid
    })
      .then(res => {
        // console.log(res);
        (this.uuid = res.data.uuid),
          (this.author = res.data.author),
          (this.title = res.data.title),
          (this.abscontent = res.data.abscontent),
          (this.content = res.data.content),
          this.category = res.data.category,
          (this.createtime = res.data.createtime);
          if(res.data.tage !== '')
            if(res.data.tage.length ==1)
            this.tages = res.data.tage
            else  this.tages = res.data.tage.split(","),
          console.log(this.tages)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.el-container{
  min-height: 100%;
}
.article-container {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  min-height: 100%;
}
.el-footer{
  margin-top:10px; 
  align-items: center;
}
.el-main {
  width: 95%;
  margin: 0 auto;
  margin-top:30px; 
  background-color: rgb(255, 255, 255,0.5);
  border-radius: 5px;
  min-height: 100%;
}
.article-content {
  text-align: left;
  min-height: 100%;
}
/* 去掉下滑线 */
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.el-tag + .el-tag {
  margin-left: 5px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 20px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>