<template>
  <div>
    <router-link to="/register">
      <b-button sm class="register">注册</b-button>
    </router-link>
    <b-img fluid-grow src="http://img01.yohomars.com/mars/2017/09/08/a4fb06740bb5f885cf8d08764fdcb990.jpg?imageView2/1/w/750/h/300/q/80/format/webp"
      alt="" />
    <div class="account-cart">
      <div class="account-option">
        <img src="@/assets/icons/number.png" alt="">
        <input type="phone" v-model="loginPhone" name="login-phone" id="login-phone" v-on:input="inputPhone">
      </div>
      <div class="account-option">
        <img src="@/assets/icons/lock.png" alt="">
        <input type="password" v-model="loginPwd" name="login-pwd" id="login-pwd" v-on:input="inputPwd">
      </div>
      <b-btn v-if="hasPhone&&hasPwd" v-b-modal.modalsm class="col-md-11" v-on:click="submitLogin" variant="primary" style="margin-top:10px;">登录</b-btn>
      <b-btn v-else class="col-md-11" disabled style="margin-top:10px;">登录</b-btn>
      <b-modal id="modalsm" size="sm" title="有货" style="background-color:#fff;">
        {{loginMsg}}
      </b-modal>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginPhone: '',
        loginPwd: '',
        loginMsg: '来自有货的提醒',
        hasPhone: false,
        hasPwd: false
      }
    },
    methods: {
      inputPhone() {
        if (this.loginPhone.length > 0) {
          this.hasPhone = true;
        } else {
          this.hasPhone = false;
        }
      },
      inputPwd() {
        if (this.loginPwd.length > 0) {
          this.hasPwd = true;
        } else {
          this.hasPwd = false;
        }
      },
      submitLogin() {
        //检测是否注册
        var users = JSON.parse(localStorage.getItem("registerUser")) || [];
        if (users === undefined || users.length <= 0) {
          this.loginMsg = '登录失败，手机号未注册';
          return;
        };
        var cur = users.find(x => x.registerPhone === this.loginPhone);
        if (cur === undefined) {
          this.loginMsg = '登录失败，手机号未注册';
          return;
        }
        if (cur.registerPwd !== this.loginPwd) {
          this.loginMsg = '密码错误，请重新登录';
          return;
        }

        this.$router.push({
            path: "/my"
        });
      }
    }
  }

</script>
<style>
  .account-cart {
    height: 100px;
    border: 1px solid #eee;
  }

  .account-option {
    padding: 10px 15px;
    height: 50px;
    border-bottom: 1px solid #eee;
  }

  .account-option img {
    width: 28px;
  }

  .account-option input {
    float: right;
    width: 85%;
    height: 35px;
    outline: none;
    background: transparent;
    border: none;
    outline: medium;
  }

  *:focus {
    outline: none;
    background-color: transparent;
  }

  .register {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
  }

</style>
