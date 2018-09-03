<template>
  <el-container>
    <el-header><navimenu></navimenu></el-header>
    <el-container>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
    import NaviMenu from './NaviMenu'
    export default {
      name: "Main",
      created: function () {
        this.$router.push("/home/index");
      },
      components: {
        "navimenu": NaviMenu
      }
    }
</script>

<style scoped>

</style>
