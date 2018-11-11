<template>
  <div class="content">
    <!-- <mt-button type="danger">默认按钮</mt-button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<script scpoed lang="less">
.content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</script>
