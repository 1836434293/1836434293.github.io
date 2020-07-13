<template>
  <div class="shop">
    <router-view />
    <!-- 邮件留言 -->
    <van-tabbar route v-show="this.$route.meta.isshow">
      <van-tabbar-item replace to="/shop/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/shop/kc" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/shop/yk" icon="thumb-circle-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/shop/lx" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace to="/shop/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style lang="less">
.van-tabbar-item__icon {
  font-size: 40px;
}
.van-tabbar {
  height: 100px;
}
.van-tabbar-item {
  font-size: 23px;
}
.van-tabbar-item--active {
  color: rgb(235, 97, 0);
}
// 邮件留言

</style>