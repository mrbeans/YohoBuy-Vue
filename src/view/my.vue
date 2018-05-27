<template>
  <div class="profile">
    <b-card class="top-info">
      <div v-if="hasLogin">

      </div>
      <div v-else class="login-register">
        <div class="top-nav">
          <span>
            <img src="@/assets/icons/setting.png" alt="">
          </span>
          <span>
            <img src="@/assets/icons/qr_code.png" alt="">
          </span>
          <span>
            <img src="@/assets/icons/chat.png" alt="">
          </span>
        </div>
        <div>
          <router-link to="/login">
              <b-button>登录/注册</b-button>
          </router-link>
        </div>
      </div>
    </b-card>
    <div class="msg-cart">
      <div class="top-msg">
        <img src="@/assets/icons/speak.png" alt="">
        <span>会员体系全民升级,更新APP立享更多福利</span>
      </div>
    </div>
    <div class="order-cart">
      <div class="order-header">
        <div class="order-header-left">
          我的订单
        </div>
        <div class="order-header-right">
          全部订单 >
        </div>
      </div>
      <div class="order-content">
        <b-row class="text-center">
          <b-col>
            <img src="@/assets/icons/card.png" alt="">
            <span>代付款</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/prepare.png" alt="">
            <span>代发货</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/car.png" alt="">
            <span>待收货</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/comment.png" alt="">
            <span>待评价</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/phone.png" alt="">
            <span>退换货</span>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-img style="margin-top:10px;" fluid-grow src="http://img10.static.yhbimg.com/yhb-img01/2018/05/24/17/0174ebba8a40e7b26df86ecc3478917728.jpg?imageView2/2/w/1280/h/720"
      alt="" />

    <div class="other-cart">
      <div class="other-content">
        <b-row class="text-center">
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>优惠券</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>有货币</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>限购码</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>礼品卡</span>
          </b-col>
        </b-row>
      </div>
      <div class="other-content">
        <b-row class="text-center">
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>商品收藏</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>店铺收藏</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>咨询收藏</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/0.png" alt="">
            <span>浏览记录</span>
          </b-col>
        </b-row>
      </div>
      <div class="other-content">
        <b-row class="text-center">
          <b-col>
            <img src="@/assets/icons/lbs.png" alt="">
            <span>地址管理</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/comment.png" alt="">
            <span>我的晒单</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/phone.png" alt="">
            <span>服务反馈</span>
          </b-col>
          <b-col>
            <img src="@/assets/icons/payment.png" alt="">
            <span>有货分期</span>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>
<script>
  export default {
    name: 'Profile',
    data() {
      return {
        hasLogin: false
      }
    }
  }

</script>
<style>
  .profile {
    background-color: #efefef;
  }

  .profile .login-register {
    text-align: center;
  }

  .profile .top-info {
    background-color: #6c757d;
    height: 150px;
  }

  .profile .top-info .top-nav img {
    margin: 5px;
    width: 26px;
  }

  .profile .msg-cart {
    background-color: #fff;
    padding: 5px 15px;
    height: 40px;
    border-bottom: 1px solid #eee;
  }

  .profile .top-msg {
    font-size: 14px;
    line-height: 2em;
  }

  .profile .top-msg img {
    width: 20px;
    margin-right: 10px;
  }

  .profile .top-info button {
    margin-top: 20px;
    border: 2px solid #fff;
  }

  .profile .order-cart {
    background-color: #fff;
    margin-top: 10px;
    height: 130px;
    border: 1px solid #eee;
  }

  .profile .order-cart .order-header {
    border-bottom: 1px solid #eee;
    padding: 8px 10px;
    height: 40px;
  }

  .profile .order-cart .order-header .order-header-left {
    float: left;
  }

  .profile .order-cart .order-header .order-header-right {
    float: right;
  }

  .row {
    margin: 0;
  }

  .row .col {
    padding: 15px 0px;
  }

  .profile .order-cart .order-content span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
  }


  .profile .other-cart {
    background-color: #fff;
    margin-top: 10px;
    height: 270px;
    border: 1px solid #eee;
  }
  .profile .other-cart .other-content span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
  }
  .profile .other-cart .other-content {
    height: 90px;
    border: 1px solid #eee;
  }
.profile .empty{
    margin-top: 10px;
    background-color: #fff;
    height: 100px;
}
</style>
