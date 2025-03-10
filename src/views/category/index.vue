<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect } from 'vant'

const activeId = ref(1)
const activeIndex = ref(0)
const items = ref([
  {
    text: '手机数码',
    children: [
      { text: '手机', id: 1 },
      { text: '平板', id: 2 },
      { text: '笔记本电脑', id: 3 }
    ]
  },
  {
    text: '家用电器',
    children: [
      { text: '电视', id: 4 },
      { text: '空调', id: 5 },
      { text: '洗衣机', id: 6 }
    ]
  },
  {
    text: '服装鞋包',
    children: [
      { text: '女装', id: 7 },
      { text: '男装', id: 8 },
      { text: '鞋靴', id: 9 }
    ]
  }
])
</script>

<template>
  <div class="category">
    <TreeSelect
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="items"
      class="tree-select"
    />
  </div>
</template>

<style scoped lang="scss">
.category {
  height: 100vh;
  padding-bottom: 50px;
  
  .tree-select {
    height: 100%;
  }
}
</style> 