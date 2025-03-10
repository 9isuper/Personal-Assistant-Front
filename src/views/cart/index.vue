<script setup lang="ts">
import { ref, computed } from 'vue'
import { Checkbox, SubmitBar, Card, showToast } from 'vant'

const cartItems = ref([
  {
    id: 1,
    title: '商品1',
    price: 199,
    thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',
    quantity: 2,
    checked: true
  },
  {
    id: 2,
    title: '商品2',
    price: 299,
    thumb: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    quantity: 1,
    checked: true
  }
])

const allChecked = computed({
  get: () => cartItems.value.every(item => item.checked),
  set: (checked) => {
    cartItems.value.forEach(item => item.checked = checked)
  }
})

const totalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.checked)
    .reduce((total, item) => total + item.price * item.quantity, 0)
})

const onSubmit = () => {
  showToast('提交订单')
}
</script>

<template>
  <div class="cart">
    <div class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <Card class="cart-card">
          <template #thumb>
            <Checkbox v-model="item.checked" />
            <img :src="item.thumb" class="thumb-img" />
          </template>
          <template #title>
            <span class="title">{{ item.title }}</span>
          </template>
          <template #price>
            <span class="price">¥{{ item.price }}</span>
          </template>
          <template #num>
            <span class="quantity">x{{ item.quantity }}</span>
          </template>
        </Card>
      </div>
    </div>

    <SubmitBar
      class="submit-bar"
      :price="totalPrice * 100"
      button-text="结算"
      @submit="onSubmit"
    >
      <Checkbox v-model="allChecked">全选</Checkbox>
    </SubmitBar>
  </div>
</template>

<style scoped lang="scss">
.cart {
  min-height: 100vh;
  padding-bottom: 50px;
  background: #f7f8fa;

  .cart-list {
    padding: 10px;
  }

  .cart-item {
    margin-bottom: 10px;
  }

  .cart-card {
    background: #fff;

    :deep(.van-card__thumb) {
      display: flex;
      align-items: center;
      
      .van-checkbox {
        margin-right: 8px;
      }
      
      .thumb-img {
        width: 88px;
        height: 88px;
      }
    }
  }

  .submit-bar {
    bottom: 50px;
  }
}
</style> 