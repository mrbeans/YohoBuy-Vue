<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <img src="@/assets/icons/menu.png" class="d-inline-block align-top" alt="BV">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-10" type="text" placeholder="Search" />
      </b-nav-form>
      <img src="@/assets/icons/chat.png" class="d-inline-block align-top" alt="BV">
    </b-navbar>
    <b-carousel background="#ababab" :interval="4000" controls indicators>
      <b-carousel-slide v-for="(image,index) in imageList" v-bind:key="index" v-bind:img-src="'http://img11.static.yhbimg.com/yhb-img01/2018/05/21/09/'+image+'.jpg?imageView2/2/w/720/h/539/format/webp/q/85'" />
    </b-carousel>
    <div>
      <b-img fluid-grow src="http://img11.static.yhbimg.com/yhb-img01/2018/05/22/15/01a11562d341a96ae3509aa47ed1605b66.jpg?imageView2/2/w/675/h/326/format/webp/q/85" alt="" />
    </div>
    <div>
      <b-img fluid-grow src="http://img10.static.yhbimg.com/yhb-img01/2018/05/14/18/019af368e1e1ed7728df650d968f6e98eb.gif?imageView2/2/w/675/h/456" alt="" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {
        imageList: [
          '01d44be1a36fa18c3812e5e181ad976a27',
          '014ecb19e4178c714f8840298394f4237c',
          '01a17061e7d2263ceed1fcd60ac8d6612b',
          '01f56ed2df86b51bedc6f6ca73b8b15ce6',
          '01c35d81ec509e8895ca0a50da53c38159',
        ]
      }
    },
    created() {
      // this.axios.get("https://api-dc2-qq.yoho.cn/?app_version=6.6.0&business_line=yohobuy&client_secret=864d2ed44a2f1cb560179229f706a7ae&client_type=android&fromPage=aFP_Lanuch&gender=1%2C3&method=app.sort.get.rec&os_version=android5.1.1%3Avivo_y35&physical_channel=1&screen_size=720x1280&udid=8651660275749980572b58a41d7f330&uid=0&v=7&yh_channel=1&")
      // .then(response => {
      //   console.log(response);
      //   // this.dataModel = response.data;
      // });
    }
  };
</script>
<!--
v-bind:img-src="'https://img11.static.yhbimg.com/yhb-img01/2018/05/18/15/'+image+'.jpg?imageView2/2/w/1150/h/450'"
imageList: [
          '0150850b474cca7e079daacad59577df85',
          '016aba66712dc47b7b774ecc826314b57c',
          '01c2fc86f343b0520bbd37415819c22fa1',
          '019139eff9a42046fb08afe1cf3c419670',
          '0148f72bb4b21fd3fafef3424744bc6533',
          '011b16afb3ac0a86eea0cfce72b6cf7cea',
          '0116731ad7317624a43863807c924bcf63'
        ]
-->