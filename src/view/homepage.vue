<template>
    <div style="height:100%;">
        <router-view />
        <b-nav fill class="bottom-nav">
            <b-nav-item active>
                <router-link to="/">
                    首页
                </router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="productlist">
                    发现
                </router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="shoppingcart">
                    购物车
                </router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="my">
                    我的
                </router-link>
            </b-nav-item>
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
        border-top: 2px solid #eee;
        background: #fff;
    }
    .bottom-nav li{
        border-radius:0;
    }
    .bottom-nav li a{
        color: rgb(177, 177, 177);
        text-decoration:none;
    }
</style>
