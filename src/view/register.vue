<template>
  <div>
    <b-img fluid-grow src="http://img01.yohomars.com/mars/2017/09/08/a4fb06740bb5f885cf8d08764fdcb990.jpg?imageView2/1/w/750/h/300/q/80/format/webp"
      alt="" />
    <div class="account-cart">
      <div class="account-option">
        <img src="@/assets/icons/number.png" alt="">
        <input type="phone" v-model="registerPhone" name="register-phone" id="register-phone" v-on:input="inputPhone">
      </div>
      <div class="account-option">
        <img src="@/assets/icons/lock.png" alt="">
        <input type="password" v-model="registerPwd" name="register-pwd" id="register-pwd" v-on:input="inputPwd">
      </div>
      <b-button v-if="hasPhone&&hasPwd" v-b-modal.modalsm class="col-md-11" v-on:click="submitRegister" variant="primary" style="margin-top:10px;">注册</b-button>
      <b-button v-else class="col-md-11" disabled style="margin-top:10px;">注册</b-button>
      <b-modal id="modalsm" size="sm" title="有货" style="background-color:#fff;">
        {{registerMsg}}
      </b-modal>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Register',
    data() {
      return {
        registerPhone: '',
        registerPwd: '',
        registerMsg: '来自有货的提醒',
        hasPhone: false,
        hasPwd: false
      }
    },
    methods: {
      inputPhone() {
        if (this.registerPhone.length > 0) {
          this.hasPhone = true;
        } else {
          this.hasPhone = false;
        }
      },
      inputPwd() {
        if (this.registerPwd.length > 0) {
          this.hasPwd = true;
        } else {
          this.hasPwd = false;
        }
      },
      submitRegister() {
        var REGISTER_KEY = "registerUser";
        var users = JSON.parse(localStorage.getItem(REGISTER_KEY)) || [];
        if (users !== undefined && users.length > 0) {
          var cur = users.find(x => x.registerPhone === this.registerPhone);
          if (cur !== undefined && cur.registerPhone.length > 0) {
            this.registerMsg= '手机号已注册，请登录';
            return;
          }
        };
        var newUser = {
          'registerPhone': this.registerPhone,
          'registerPwd': this.registerPwd
        };
        users.push(newUser);
        localStorage.removeItem(REGISTER_KEY);
        localStorage.setItem(REGISTER_KEY, JSON.stringify(users));
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

</style>
