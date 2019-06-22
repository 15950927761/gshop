<template>
  <!--首页顶部-->
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title ellipsis">
        <span class="header_title_text">{{title}}</span>
      </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
    export default {
      props:{
        title:String
      }
    }
</script>

<style>
  .header{background-color:#02a774;position:fixed;z-index:100;left:0;top:0;width:96%;height:45px;padding:0 2%;line-height:45px;color:#fff;}
  .header_title{width:60%;text-align:center;display:inline-block;position:absolute;left:20%;font-weight:bold;height:45px;line-height:40px;}
  .header_title_text{font-size:14px;width:100%;}
</style>
