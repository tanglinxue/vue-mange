<template>
  <div class="tags">
    <el-tag size="small" v-for="(tag,index) in tabsList" :key="tag.name" :closable="tag.name !== 'home'"
    :effect='$route.name === tag.name ? "dark":"plain"' @click='changeMenu(tag)' @close='handleClose(tag,index)'> 
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState("tab", ["tabsList"]),
  },
  methods: {
     ...mapMutations("tab", ["closeTag"]),
    changeMenu(item) {
      this.$router.push({name: item.name})
    },
    handleClose(tag,index){
      const len = this.tabsList.length - 1;
      this.closeTag(tag)
      if(tag.name !== this.$route.name){
        return 
      }
      if(index === len){
        this.$router.push({
          name:this.tabsList[index-1].name
        })
      }else{
          this.$router.push({
          name:this.tabsList[index].name
        })
      }
    },

 
  },
};
</script>


<style lang="less" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
