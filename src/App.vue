<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'

const router = useRouter()
const active = ref(0)
</script>

<template>
  <div class="app-container">
    <router-view />
    <Tabbar v-model="active" class="bottom-tab">
      <TabbarItem icon="home-o" @click="router.push('/')">首页</TabbarItem>
      <TabbarItem icon="apps-o" @click="router.push('/category')">分类</TabbarItem>
      <TabbarItem icon="shopping-cart-o" @click="router.push('/cart')">购物车</TabbarItem>
      <TabbarItem icon="user-o" @click="router.push('/mine')">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
}

.bottom-tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
}
</style>
