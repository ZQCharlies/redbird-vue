<template>
  <div>
    <div class="info-container">
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
      <br />
      <label><b>Charlies</b></label>
      <br />
      <label>联系</label>
      <br />
      <br />
    </div>
    <div id="category-container">
      <p>分类</p>
      <el-tag v-for="item in categoryList" v-bind:key="item.id">
        {{item.name}}
      </el-tag>
      
    </div>
    <div id="tags-container">
      <p>标签</p>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>
    
  </div>
</template>

<script>
import request from "../../network/request";
export default {
  data() {
    return {
      circleUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      categoryList:[
        { id:1,
          name:'标签1',
          pid:'',
          description:''
          }]
    };
  },
  created(){
    request({
      url: "/category"
    })
      .then(res => {
        console.log(res);
        this.categoryList = res.data.jsonArray;
      
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.info-container {
  width: 100%;
  margin: 0 auto;
  margin-top:20px; 
}
.el-avatar {
  border-style: solid;
  margin: 10px auto;
  top: 10px;
}
.el-tag {
  margin: 4px;
}
#tags-container {
    background-color: rgb(240, 255, 255,0.5);
    border-radius: 10px;
}
#category-container{
  background-color: rgb(222, 184, 135,0.7);
  padding: 10px;
  border-radius: 10px;
}
</style>