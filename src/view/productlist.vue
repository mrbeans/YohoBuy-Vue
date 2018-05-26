<template>
  <div class="common-bg">
    <b-row>
      <b-col sm="6" cols="6" md="6" v-for="product in products" v-bind:key="product.product_id">
        <b-card v-bind:img-src="product.default_images" img-alt="Image" img-top tag="article" class="sm-6">
          <p class="card-text">
            {{product.product_name}}
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [{
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, {
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, {
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, {
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, {
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, {
          product_id: 1007895,
          product_name: 'outerspace OS夏日LOGO印花T恤',
          default_images: 'http://img13.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80',
          stock_number: 10,
          market_price: 219,
          sales_price: 174,
          is_discount: 'Y'
        }, ]
      }
    }
  }

</script>
<style>
    .common-bg{
        background-color: #efefef;
    }
    .row div{
        padding: 0;
        border-radius: 0;
        margin-bottom: 10px;
    }
    .card {
        border-radius: 0;        
    }
    .row .card-text{
        margin:0 10px;
    }
</style>
