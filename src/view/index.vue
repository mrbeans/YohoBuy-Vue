<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <img src="@/assets/icons/menu.png" class="d-inline-block align-top" alt="BV">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-10" type="text" placeholder="Search" />
      </b-nav-form>
      <img src="@/assets/icons/chat.png" class="d-inline-block align-top" alt="BV">
    </b-navbar>
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" background="#ababab" v-model="slide" :interval="4000">
      <b-carousel-slide v-for="(image,index) in imageList" v-bind:key="index">
          <b-img fluid-grow v-bind:src="'http://img11.static.yhbimg.com/yhb-img01/2018/05/21/09/'+image+'.jpg?imageView2/2/w/720/h/539/format/webp/q/85'" alt="" />
      </b-carousel-slide>
    </b-carousel>
    <b-img fluid-grow src="http://img11.static.yhbimg.com/yhb-img01/2018/05/22/15/01a11562d341a96ae3509aa47ed1605b66.jpg?imageView2/2/w/675/h/326/format/webp/q/85" alt=""/>
    <b-img fluid-grow src="http://img10.static.yhbimg.com/yhb-img01/2018/05/14/18/019af368e1e1ed7728df650d968f6e98eb.gif?imageView2/2/w/675/h/456" alt="" />
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          '01d44be1a36fa18c3812e5e181ad976a27',
          '014ecb19e4178c714f8840298394f4237c',
          '01a17061e7d2263ceed1fcd60ac8d6612b',
          '01f56ed2df86b51bedc6f6ca73b8b15ce6',
          '01c35d81ec509e8895ca0a50da53c38159',
          '011b16afb3ac0a86eea0cfce72b6cf7cea',
          '0116731ad7317624a43863807c924bcf63'
        ]
      }
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    }
  }

</script>
