<template>
  <div>
    <section class="search">
      <HeaderTop title="搜索"></HeaderTop>
      <form action="#" class="search_form">
        <input type="search" name="search" placeholder="请输入商家或美食的名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
    </section>
  </div>
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
  .search{width:100%;}
  .search_form{margin-top:45px;background:#fff;padding:12px 8px;display:flex;justify-content: space-between;}
  .search_input{height:35px;padding:0 4px;border-radius:5px;font-weight:normal;width:80%;outline:none;border:none;background:#f1f1f1;font-size:13px;}
  .search_submit{background:#02a774;color:#fff;width:17%;border:none;height:33px;line-height:33px;border-radius:5px;font-weight:bold;}
</style>
