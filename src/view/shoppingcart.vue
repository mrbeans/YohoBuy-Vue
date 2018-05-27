<template>
  <div class="common-bg">
    <div v-for="product in products" :key="product.product_id" class="clearfix cart-item">
      <div class="product-img">
        <b-img left v-bind:src="product.default_images" />
      </div>
      <div class="product-info" right>
        <div class="product-title">商品名称：{{product.product_name}}</div>
        <div class="product-price">价格：￥{{product.sales_price}}</div>
        <div class="product-stock">商品数量：{{product.stock_number}}</div>
        <div class="product-option">
          <b-btn size="sm" variant="primary" v-on:click="removeFromCart(product.product_id)">删除</b-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ShoppingCart',
    data() {
      return {
        products: [{
          "product_id": '',
          "product_name": "",
          "default_images": "",
          "sales_price": '',
          "stock_number": ''
        }]
      }
    },
    methods:{
        removeFromCart(productId){
            var items=JSON.parse(localStorage.getItem('shopping_cart_items'))||[];
            var item=items.find(x=>x.product_id===productId);
            if(item!==undefined&&item.product_id!==undefined){
                var itemIndex=items.findIndex(x=>x.product_id===productId)
                items.splice(itemIndex,1);
            }
            this.products=items;
            localStorage.removeItem('shopping_cart_items');
            localStorage.setItem('shopping_cart_items',JSON.stringify(items));
        }
    },
    created(){
        this.products=JSON.parse(localStorage.getItem('shopping_cart_items'))||[];
    }
  }

</script>
<style>
html,body,#app{
    height: 100%;
}
  .common-bg {
      height: 100%;
    background-color: #efefef;
  }

  .cart-item {
    height: 160px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }

  .product-img {
    width: 40%;
    float: left;
  }
  .product-img img{
      width: 100px;
  }

  .product-info {
    width: 60%;
    float: left;
    font-size: 14px;
  }

  .product-info .product-title {
    height: 40px;
  }

  .product-info .product-price,
  .product-info .product-stock {
    margin: 5px 0;
    height: 20px;
  }

  .product-info .product-option {
    height: 40px;
  }

</style>
