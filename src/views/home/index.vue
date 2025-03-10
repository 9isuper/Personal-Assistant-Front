<script setup lang="ts">
import { ref } from 'vue'
import { Swipe, SwipeItem, Grid, GridItem, Card, NoticeBar, Icon } from 'vant'

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
      <img src="https://fsg-cloud-public.oss-cn-hangzhou.aliyuncs.com/fsg/cloud/cms/JsE2z4j3QNuMa9HUvE2vng.jpg  " alt="顶部图片" />
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
        <div class="list-header">
          <h3 class="title">商品列表</h3>
          <div class="more" @click="$router.push('/category')">
            更多
            <van-icon name="arrow" />
          </div>
        </div>
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
    display: flex;
    flex-direction: column;
    gap: 8px;

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .title {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
      }

      .more {
        color: #999;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 2px;
        cursor: pointer;

        &:active {
          opacity: 0.8;
        }
      }
    }

    .product-card {
      background: #fff;

      :deep(.van-card) {
        background: #fff;
        padding: 8px;
      }

      :deep(.van-card__header) {
        display: flex;
        align-items: flex-start;
      }

      :deep(.van-card__thumb) {
        width: 90px;
        height: 90px;
        margin-right: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }

      :deep(.van-card__content) {
        padding-right: 0;
      }

      :deep(.van-card__title) {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      :deep(.van-card__desc) {
        font-size: 12px;
        color: #999;
        margin-bottom: 4px;
      }

      :deep(.van-card__price) {
        color: #ff2c7d;
        font-weight: bold;
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