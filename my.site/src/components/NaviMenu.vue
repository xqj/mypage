<template>
  <div id="header-wrap">
    <div id="header" class="row">
      <a id="logo" href="/"></a>
      <div id="mobile-nav" class="hide-for-medium-up">
        <ul>
          <li><button class="toggle"><i class="fa fa-bars"></i></button></li>
        </ul>
      </div>
      <div id="nav">
        <ul>
          <li id="about-link"><router-link to="/home/about">About</router-link></li>
          <li id="work-link"><router-link to="/home/work">MyCat</router-link></li>
          <li id="contact-link"><router-link to="/home/contact">Contact</router-link></li>
          <li	id="blog-link"><a href="https://blog.csdn.net/xqj198404/" target="_blank">Blog</a></li>
        </ul>
      </div>
    </div>	<!-- END header -->
  </div> <!-- END header-wrap -->
</template>

<script>
    export default {
        name: "NaviMenu"
    }
</script>

<style scoped>

</style>
