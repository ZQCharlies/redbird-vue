<template>
  <div id="main-contioner">
    <div id="list">
      <ul id="articleList">
        <li v-for="item in list" v-bind:key="item.uuid">
          <h1>
            <router-link :to="{path:'/article',query:{uuid:item.uuid}}">
              <p style="color:#409EFF">{{item.title}}</p>
            </router-link>
          </h1>
          {{item.abscontent}}
          <p
            style="font-family:arial;font-size:10px;"
          >作者：{{item.author}}&nbsp;|阅读：{{item.viewcount}}&nbsp;|喜欢：{{item.likecount}}&nbsp;|评论：{{item.commcount}}&nbsp;|创建时间：{{item.createtime}}</p>
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="3"
      :total="count"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>
<script>
import request from "../../network/request";
export default {
  data() {
    return {
      list: [
        {
          uuid: "111111111",
          title: "",
          abscontent: "",
          author: "",
          tage: "",
          content: "",
          viewcount: 0,
          commcount: 0,
          likecount: 0,
          createtime: "",
          updatetime: ""
        }
      ],
      flag: false,
      code: "",
      message: "",
      count: 0,
      pageSize: 5,
      pageNum: 1,
      pageCount: 0
    };
  },
  created() {
    request({
      methods: "get",
      url: "/article/getCount"
    })
      .then(res => {
        this.count = res.data;
        this.pageCount = Math.ceil(this.count / this.pageSize);
        console.log(this.pageCount+"-----------1");
        request({
          url: "/article/" + this.pageNum + "/" + this.pageSize
        })
          .then(res => {
            // console.log(res);
            console.log(this.pageCount+"-----------2");
            this.list = res.data.list;
            this.code = res.data.code;
            this.message = res.data.message;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.$data.pageNum = val;
      request({
        url: "/article/" + this.$data.pageNum + "/" + this.$data.pageSize
      })
        .then(res => {
          console.log(res);
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
.el-pagination {
  box-align: bottom;
  width: 100%;
}
#list {
  width: 100%;
  text-align: left;
}
.ul,
li {
  list-style-type: none;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  background-color: rgb(237, 237, 237,0.4);
  border-radius: 10px;
}
/* 去掉下滑线 */
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>