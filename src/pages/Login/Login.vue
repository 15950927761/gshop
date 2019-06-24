<template>
  <div class="off">
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:" class="on">短信登录</a>
            <a href="javascript:">密码登录</a>
          </div>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="login_hidden on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖账号的手机号，登录时自动注册，且代码同意外卖协议
              <a href="javascript:">《用户服务协议》</a>
            </section>
          </div>
          <div class="login_hidden">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码">
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text"></span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <!--<img src="./images/captcha.svg" alt="" class="get_verification">-->
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2" ></i>
      </a>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style>
  .loginContainer{width:100%;height:100%;background:#fff;}
  .loginInner{padding-top:60px;width:80%;margin:0 auto;}
  .login_hidden{display:none;}
  .on{display:block;}
  .login_logo{font-size:40px;font-weight:bold; color:#02a774;text-align:center;}
  .login_header_title{display:flex;justify-content:space-around;padding:30px 0 0 0;font-size:15px;}
  .login_header_title a{color:#333;line-height:24px;}
  .login_header_title .on{color:#02a774;border-bottom:2px solid #02a774;}
  .login_content{width:90%;margin:0 auto;}
  .login_message,.login_verification{width:100%;line-height:30px;border:1px solid #eee;margin:10px 0;position:relative;}
  .login_message input,.login_verification input{width:100%;height:28px;line-height:28px;border:none;text-indent:5px;}
  .get_verification{background:none;position:absolute;right:0; top:6px;border:none;}
  .login_hint{font-size:13px;color:#888;line-height:24px;}
  .login_hint a{color:#02a774;}
  .login_submit{width:100%;background:#02a774;font-size:16px;color:#fff;margin:15px 0;border:none;height:40px;line-height:40px;border-radius:5px;}
  .about_us{text-align:center; color:#888;display:block;text-align:center;font-size:13px;}
  .go_back{position:fixed;left:0; top:5px;}
  .go_back .iconfont{font-size:24px;color:#888;}
</style>
