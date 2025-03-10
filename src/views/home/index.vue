<script setup lang="ts">
import { ref } from 'vue'
import { Swipe, SwipeItem, Grid, GridItem, Card, NoticeBar } from 'vant'

const banners = ref([
  { id: 1, image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg' },
  { id: 2, image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' }
])

const categories = ref([
  { id: 1, name: '新品上市', icon: 'new-o' },
  { id: 2, name: '热门推荐', icon: 'fire-o' },
  { id: 3, name: '优惠活动', icon: 'gift-o' },
  { id: 4, name: '全部分类', icon: 'apps-o' }
])

const products = ref([
  {
    id: 1,
    title: '商品1',
    desc: '商品描述信息',
    price: '199.00',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
  },
  {
    id: 2,
    title: '商品2',
    desc: '商品描述信息',
    price: '299.00',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  }
])
</script>

<template>
  <div class="home">
    <!-- 顶部图片 -->
    <div class="top-image">
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="顶部图片" />
      <!-- 公告栏 -->
      <NoticeBar
        left-icon="volume-o"
        scrollable
        text="这是一条公告信息，可以在这里显示重要通知。"
        class="notice-bar"
        color="transparent"
        background="transparent"
      />
    </div>

    <!-- 分类导航 -->
    <Grid :column-num="4" :border="false" class="category-grid">
      <GridItem v-for="item in categories" :key="item.id" :icon="item.icon" :text="item.name" />
    </Grid>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 轮播图 -->
      <Swipe class="banner" :autoplay="3000" indicator-color="white">
        <SwipeItem v-for="item in banners" :key="item.id">
          <img :src="item.image" class="banner-image" />
        </SwipeItem>
      </Swipe>

      <!-- 商品列表 -->
      <div class="product-list">
        <Card
          v-for="item in products"
          :key="item.id"
          :price="item.price"
          :title="item.title"
          :desc="item.desc"
          :thumb="item.image"
          class="product-card"
        >
          <template #tags>
            <div class="card-tags">
              <span class="tag">新品</span>
            </div>
          </template>
          <template #footer>
            <div class="card-footer">
              <div class="button">查看详情</div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding-bottom: 50px;
  min-height: 100vh;
}

.top-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #fff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .notice-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(2px);

    :deep(.van-notice-bar__wrap) {
      color: #fff;
    }

    :deep(.van-notice-bar__left-icon) {
      color: #fff;
    }
  }
}

.category-grid {
  background: #fff;
  padding: 15px 0;
}

.main-content {
  position: relative;
  z-index: 1;
  margin: 12px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(100, 101, 102, 0.08);

  .banner {
    height: 150px;

    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-list {
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    .product-card {
      background: #fff;
      height: 100%;

      :deep(.van-card__content) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      :deep(.van-card__thumb) {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .card-tags {
        margin-top: 4px;
        
        .tag {
          padding: 2px 6px;
          background: #ffd6e7;
          color: #ff2c7d;
          border-radius: 4px;
          font-size: 12px;
        }
      }

      .card-footer {
        margin-top: 8px;
        text-align: right;

        .button {
          display: inline-block;
          padding: 4px 12px;
          background: #ff2c7d;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }
}

// 添加渐变背景容器
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff calc(200px + 53px), #f7f8fa 60%);
  z-index: 0;
}
</style> 