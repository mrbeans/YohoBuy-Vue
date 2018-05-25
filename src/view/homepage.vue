<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
                <img src="@/assets/icons/menu.png" class="d-inline-block align-top" alt="BV">
            <b-navbar-nav class="ml-8">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-10" type="text" placeholder="Search"/>
                </b-nav-form>
            </b-navbar-nav>
                <img src="@/assets/icons/chat.png" class="d-inline-block align-top" alt="BV">
        </b-navbar>
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://img10.static.yhbimg.com/yhb-img01/2018/05/18/15/0150850b474cca7e079daacad59577df85.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img10.static.yhbimg.com/yhb-img01/2018/05/18/15/016aba66712dc47b7b774ecc826314b57c.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img10.static.yhbimg.com/yhb-img01/2018/05/18/15/01c2fc86f343b0520bbd37415819c22fa1.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img11.static.yhbimg.com/yhb-img01/2018/05/18/15/019139eff9a42046fb08afe1cf3c419670.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img11.static.yhbimg.com/yhb-img01/2018/05/18/15/0148f72bb4b21fd3fafef3424744bc6533.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img11.static.yhbimg.com/yhb-img01/2018/05/18/15/011b16afb3ac0a86eea0cfce72b6cf7cea.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
      <b-carousel-slide img-src="https://img11.static.yhbimg.com/yhb-img01/2018/05/18/15/0116731ad7317624a43863807c924bcf63.jpg?imageView2/2/w/1150/h/450"></b-carousel-slide>
    </b-carousel>
        <b-nav fill class="bottom-nav">
            <b-nav-item active>首页</b-nav-item>
            <b-nav-item>发现</b-nav-item>
            <b-nav-item>购物车</b-nav-item>
            <b-nav-item>我的</b-nav-item>
        </b-nav>
    </div>
</template>
<script>
export default {
    name:'HomePage'
}
</script>
<style>
    .bottom-nav{
        bottom: 0;
        position: fixed;
        width: 100%;
    }
    .bottom-nav li{
        border-radius:0;
    }
</style>
