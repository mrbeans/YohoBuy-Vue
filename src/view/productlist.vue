<template>
  <div class="common-bg">
    <b-row>
      <b-col sm="6" cols="6" md="6" v-for="product in products" v-bind:key="product.product_id">
        <b-card v-bind:img-src="product.default_images" img-alt="Image" img-top tag="article" class="sm-6">
          <div class="product-content">
            <div class="desc">
                {{product.product_name}}
            </div>
          <div class="options">
              <div class="price">
                ￥{{product.sales_price}}
                </div>
                <div class="addtocart">
                    <b-btn size="sm" v-b-modal.modalsm v-on:click="addToCart(product.product_id)" variant="primary">加入购物车</b-btn>                
                </div>
          </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="modalsm" size="sm" title="有货" style="background-color:#fff;">
        {{listMsg}}
    </b-modal>
  </div>
</template>
<script>
  export default {
    name: 'ProductList',
    data() {
      return {
          listMsg:'来自有货的信息',
        dataUrl: 'https://api-dc2-qq.yoho.cn/?actiontype=0&app_version=6.6.0&business_line=yohobuy&client_secret=062748e3db06f34e7d51c85f5431b120&client_type=android&firstProductSkn=51855744&fromPage=aFP_StoreSearchProList&gender=1%2C3&limit=20&method=app.search.productList&new_filter=1&order=&os_version=android5.1.1%3Avivo_y35&page=1&physical_channel=1&productSize=240x319&screen_size=720x1280&standard=927_5253&title=LOGO+T%E6%81%A4&udid=8651660275749980572b58a41d7f330&uid=0&v=7&yh_channel=',
        products: [
        {
          "product_id": 831730,
          "product_name": "adidas Originals 男 短袖T恤",
          "default_images": "http://img11.static.yhbimg.com/goodsimg/2018/05/22/09/013f8f5e8773eddf8d2dff7364d18d752a.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 349,
          "stock_number":1
        }, {
          "product_id": 929428,
          "product_name": "KKtP  基础款圆领T恤",
          "default_images": "http://img12.static.yhbimg.com/goodsimg/2018/04/26/17/020154d5c3886a03dba71357f69c5fe1ad.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 299,
          "stock_number":1
        }, {
          "product_id": 1015463,
          "product_name": "Dickies 糖果色大Logo印花短袖T恤",
          "default_images": "http://img13.static.yhbimg.com/goodsimg/2018/05/21/17/028d7a6c006915deb6ceeb11a765dd34ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 259,
          "stock_number":1
        }, {
          "product_id": 1007895,
          "product_name": "outerspace OS夏日LOGO印花T恤",
          "default_images": "http://img12.static.yhbimg.com/goodsimg/2018/05/16/17/02fbbdf01bdb9bf4e08aad71f086a557ea.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 174,
          "stock_number":1
        }, {
          "product_id": 1015127,
          "product_name": "Wade  LOGO印花短袖文化衫",
          "default_images": "http://img12.static.yhbimg.com/goodsimg/2018/05/21/17/02d2434b5ac67527c04a126451c839c452.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 299,
          "stock_number":1
        }, {
          "product_id": 1015129,
          "product_name": "Wade  LOGO印花短袖文化衫",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/22/10/011ba1daf4154e7833523b2979f02caefa.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 299,
          "stock_number":1
        }, {
          "product_id": 1015135,
          "product_name": "Wade  LOGO印花短袖文化衫",
          "default_images": "http://img13.static.yhbimg.com/goodsimg/2018/05/22/09/028dc49ce739afb3f812d71ad840866787.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 269,
          "stock_number":1
        }, {
          "product_id": 1013639,
          "product_name": "Lightning Bear LOGO图案短袖T恤",
          "default_images": "http://img11.static.yhbimg.com/goodsimg/2018/05/22/11/012f8b192f4e406dd4df5f2547f4837657.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 188,
          "stock_number":1
        }, {
          "product_id": 1015619,
          "product_name": "COOL ALPACA酷泥马 拼接袖子小LogoT恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/23/13/01f6eb871bda999cec78974bb6ae049665.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 169,
          "stock_number":1
        }, {
          "product_id": 1015117,
          "product_name": "Wade  LOGO印花短袖T恤",
          "default_images": "http://img12.static.yhbimg.com/goodsimg/2018/05/19/16/02cf7c7f499a737e1b8206eacb59989776.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 339,
          "stock_number":1
        }, {
          "product_id": 1014179,
          "product_name": "O!OiMAIN 字母印花短袖T恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/19/16/0142e211c88585bf89ec751c570fbccab7.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 498,
          "stock_number":1
        }, {
          "product_id": 1014181,
          "product_name": "O!OiMAIN 字母印花短袖T恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/19/11/01b508e8cd92b38d66396ddfb869cd2b52.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 498,
          "stock_number":1
        }, {
          "product_id": 1014177,
          "product_name": "O!OiMAIN 字母印花短袖T恤",
          "default_images": "http://img11.static.yhbimg.com/goodsimg/2018/05/19/16/014ff79f788f52a82d5d135d2788dc3705.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 498,
          "stock_number":1
        }, {
          "product_id": 1014173,
          "product_name": "O!OiMAIN  撞色字母印花短袖T恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/19/16/01a507e3bdd6eec443c4ab2f55ffe606e3.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 968,
          "stock_number":1
        }, {
          "product_id": 987118,
          "product_name": "Into The Rainbow LOGO印花短袖T恤",
          "default_images": "http://img13.static.yhbimg.com/goodsimg/2018/05/25/11/0270328b6fe7d848c48576ff91c87ea49e.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 199,
          "stock_number":1
        }, {
          "product_id": 987112,
          "product_name": "Into The Rainbow LOGO字母短袖T恤",
          "default_images": "http://img12.static.yhbimg.com/goodsimg/2018/05/25/11/029fc88acf970d34d73819daf26035b43f.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 199,
          "stock_number":1
        }, {
          "product_id": 1011915,
          "product_name": "Red Charcoal  Classic LOGO短袖T恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/21/14/0160a4c3206edbd13e6ac799a5c270bbaa.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 199,
          "stock_number":1
        }, {
          "product_id": 1013565,
          "product_name": "corade 花朵掌柜T恤",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/19/16/01e0b62fd401aa82ff91e0bdcd2b7ed1c8.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 149,
          "stock_number":1
        }, {
          "product_id": 1013795,
          "product_name": "中国李宁 运动时尚系列男子短袖文化衫",
          "default_images": "http://img11.static.yhbimg.com/goodsimg/2018/05/20/12/01c95842741cfabaa3e58a9e86cd1daec2.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 119,
          "stock_number":1
        }, {
          "product_id": 1013799,
          "product_name": "中国李宁 运动时尚系列男子短袖文化衫",
          "default_images": "http://img10.static.yhbimg.com/goodsimg/2018/05/20/11/013ecf81dc0d8bfdce3de10720149ca5dd.jpg?imageMogr2/thumbnail/337x449/background/d2hpdGU=/position/center/quality/80",
          "sales_price": 119,
          "stock_number":1
        }]
      }
    },
    methods:{
        addToCart(productId){
            var SHOPPING_CART='shopping_cart_items';
            var product=this.products.find(x=>x.product_id===productId);
            if(product===undefined||product.product_id===undefined||product.product_id.length<=0){
                this.listMsg='商品无效，请刷新后重试';
            }
            var items=JSON.parse(localStorage.getItem(SHOPPING_CART))||[];
            //购物车为空，新增一个
            if(items===undefined||items.length<=0){
                items.push(product);
                localStorage.removeItem(SHOPPING_CART);
                localStorage.setItem(SHOPPING_CART,JSON.stringify(items));
                this.$router.push({
                    path: "/shoppingcart"
                });
                return;
            }
            //购物车不为空，但没有此商品
            var cur=items.find(x=>x.product_id===productId);
            if(cur===undefined||cur.product_id===undefined||cur.product_id.length<=0){
                items.push(product);
                localStorage.removeItem(SHOPPING_CART);
                localStorage.setItem(SHOPPING_CART,JSON.stringify(items));
                this.$router.push({
                    path: "/shoppingcart"
                });
                return;
            }
            //购物车不为空，存在此商品，只增加库存
            cur.stock_number++;
            localStorage.removeItem(SHOPPING_CART);
            localStorage.setItem(SHOPPING_CART,JSON.stringify(items));
            this.$router.push({
                path: "/shoppingcart"
            });
        }
    }
  }

</script>
<style>
  .common-bg {
    background-color: #efefef;
  }

  .row div {
    padding: 0;
    border-radius: 0;
    margin-bottom: 10px;
  }

  .card {
    border-radius: 0;
  }

  .row .card-body {
    height: 80px;
  }

    .product-content{
    height: 80px;
        width: 80%;
        margin-left: 20px;
        font-size: 14px;
    }
    .product-content .desc{
        height: 40px;
    }
    .product-content .options{
        line-height: 2em;
        display: inline;
        bottom: 0px;
    }
    .product-content .options .price{
        font-weight: 700;
        float: left;
    }
    .product-content .options .addtocart{
        float: right;
    }
</style>
