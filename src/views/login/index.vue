<template>
  <div class="login">
    <div class="login-container">
      <h2>登录</h2>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Form, Field, CellGroup, Button, showToast } from 'vant'
import { login } from '@/api/user'

const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')

const onSubmit = async (values: any) => {
  try {
    const res = await login(values)
    if (res.token) {
      localStorage.setItem('token', res.token)
      showToast('登录成功')
      // 如果有重定向地址，则跳转到重定向地址
      const redirect = route.query.redirect as string
      router.replace(redirect || '/mine')
    }
  } catch (error: any) {
    showToast(error.message || '登录失败')
  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fa;

  .login-container {
    width: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    margin: 20px;

    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #323233;
    }

    .submit-btn {
      margin-top: 20px;
      padding: 0 16px;
    }
  }
}
</style> 