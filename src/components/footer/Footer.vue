<template>
  <div class="footer">
    <ul class="footer-ul">
      <router-link class="footer-li" to="/index">首页</router-link>
      <router-link class="footer-li" to="/goods">商品</router-link>
      <router-link class="footer-li" to="/list">列表</router-link>
      <router-link class="footer-li" to="/my">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<script scpoed lang="less">
.footer {
  height: 48px;
  background: rgb(68,171,71);
  .footer-ul {
    display: flex;
    justify-content: space-around;
    height: 100%;
    .footer-li{
      flex: 1;
      text-align: center;
      line-height: 48px;
      color: #fff;
      &.router-link-active {
        background: rgb(252,191,0);
        color: #000;
      }
    }
  }
}
</script>
