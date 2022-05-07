<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside />
    </el-aside>
    <el-container>
      <el-header width="auto">
        <CommonHeader />
      </el-header>
      <CommonTag/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTag from "../components/CommonTag";
export default {
  name: "Home",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
