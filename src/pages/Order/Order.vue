<template>
  <section class="order">
    <HeaderTop title="订单列表"></HeaderTop>
    <section class="order_no_login">
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
      components:{
        HeaderTop
      }
    }
</script>

<style>
  .order{width:100%;height:100vh;}
  .order_no_login{margin-top:45px;text-align:center;}
  .order_no_login img{width:100%;}
  .order_no_login h3{font-size:16px;font-weight:normal;color:#666;font-size:15px;}
  .order_no_login button{background:#02a774;color:#fff; border:none;margin-top:10px;padding:8px 20px;font-size:16px; border-radius:5px;}
</style>
