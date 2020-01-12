<template>
  <el-container class="home-container">
    <el-header>
      <Head></Head>
    </el-header>
    <el-container class="home-main-aside">
      <el-main>
        <ArticleList></ArticleList>
      </el-main>
      <el-aside>
        <Asid></Asid>
      </el-aside>
    </el-container>
    <el-footer>
      <Foot></Foot>
    </el-footer>
  </el-container>
</template>

<script>
import Head from "../common/Head";
import Foot from "../common/Foot";
import ArticleList from "./ArticleList";
import Asid from "./Asid";
export default {
  name: "Home",
  components: {
    Head,
    Foot,
    ArticleList,
    Asid
  }
};
</script>

<style scoped>
.el-header
{
  color: #000000;
  text-align: center;
}
.el-footer {
  color: #000000;
  text-align: center;
}
.home-container {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  min-height: 100%;
}
.home-main-aside{
    height: 1000px;
}
</style>