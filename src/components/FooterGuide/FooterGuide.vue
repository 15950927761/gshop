<template>
    <div class="footer_guide">
      <span class="guide_item" :class="{on:'/msite' === $route.path}" @click="goTo('/msite')">
        <span class="item_icon">
          <i class="iconfont icon-pro-home"></i>
        </span>
        <span>外卖</span>
      </span>
      <span class="guide_item" :class="{on:'/search' === $route.path}" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont icon-pro-search"></i>
        </span>
        <span>搜索</span>
      </span>
      <span class="guide_item" :class="{on:'/order' === $route.path}" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icon-pro-catalog"></i>
        </span>
        <span>订单</span>
      </span>
      <span class="guide_item" :class="{on:'/profile' === $route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-pro-user-manage"></i>
        </span>
        <span>我的</span>
      </span>
    </div>
</template>

<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style scoped>
  .footer_guide{width:100%;height:30px;display:flex;justify-content: space-around;padding:10px 0;border-top:1px solid #eee;position:fixed;bottom:0;left:0;background:#f8f8f8;}
  .guide_item{display:flex;flex-direction:column;font-size:13px;justify-content:space-around;text-align:center;color:#555;cursor: pointer;}
  .iconfont{font-size:24px;}
  .on{color:#01ab8d;}
</style>
