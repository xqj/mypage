<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    created(){
      this.auth();
    },
    methods:{
      auth(){
        var that=this;
        that.$router.push("/home");
      }
    }
  }
</script>


