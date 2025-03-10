<script setup lang="ts">
import { ref } from 'vue'
import { Cell, CellGroup, Image as VanImage } from 'vant'

const userInfo = ref({
  avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  nickname: '用户名',
  level: '普通会员'
})

const menuItems = ref([
  { title: '我的订单', icon: 'orders-o' },
  { title: '我的收藏', icon: 'star-o' },
  { title: '收货地址', icon: 'location-o' },
  { title: '客服中心', icon: 'service-o' },
  { title: '设置', icon: 'setting-o' }
])
</script>

<template>
  <div class="mine">
    <!-- 用户信息 -->
    <div class="user-info">
      <VanImage
        round
        width="64"
        height="64"
        :src="userInfo.avatar"
        class="avatar"
      />
      <div class="info">
        <div class="nickname">{{ userInfo.nickname }}</div>
        <div class="level">{{ userInfo.level }}</div>
      </div>
    </div>

    <!-- 菜单列表 -->
    <CellGroup inset class="menu-group">
      <Cell
        v-for="item in menuItems"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        is-link
      />
    </CellGroup>
  </div>
</template>

<style scoped lang="scss">
.mine {
  min-height: 100vh;
  padding-bottom: 50px;
  background: #f7f8fa;

  .user-info {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #fff;

    .info {
      margin-left: 16px;

      .nickname {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      .level {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .menu-group {
    margin-top: 12px;
  }
}
</style> 