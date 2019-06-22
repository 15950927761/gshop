<template>
  <div>
    <section class="search">
      <header class="header">
        <a class="header_title">
          <span class="header_title_text">搜索</span>
        </a>
      </header>
      <form action="#" class="search_form">
        <input type="search" name="search" placeholder="请输入商家或美食的名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
    </section>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  .header{background-color:#02a774;position:fixed;z-index:100;left:0;top:0;width:100%;height:45px;line-height:45px;color:#fff;}
  .header_title{width:100%;}
  .header_title_text{font-size:14px;width:100%;display:block;text-align:center;font-weight:bold;font-size:20px;}
  .search{width:100%;}
  .search_form{margin-top:45px;background:#fff;padding:12px 8px;display:flex;justify-content: space-between;}
  .search_input{height:35px;padding:0 4px;border-radius:5px;font-weight:normal;width:80%;outline:none;border:none;background:#f1f1f1;font-size:13px;}
  .search_submit{background:#02a774;color:#fff;width:17%;border:none;height:33px;line-height:33px;border-radius:5px;font-weight:bold;}
</style>
