<template>
  <div class="page-content">
    <div class="left">
      <div class="top">
        <slot name="lt"></slot>
      </div>
      <div class="bottom">
        <slot name="lb"></slot>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <slot name="rt"></slot>
      </div>
      <div class="bottom">
        <slot name="rb"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(true)
const hideView = () => {
  if (flag.value) {
    // 控制左侧区域宽度为0，实现隐藏效果
    const leftElement = document.querySelector('.left') as HTMLElement
    const rightElement = document.querySelector('.right') as HTMLElement
    if (leftElement) {
      leftElement.style.transform = 'translateX(-100%)'
    }
    if (rightElement) {
      rightElement.style.transform = 'translateX(100%)'
    }
  } else {
    // 控制左侧区域宽度为0，实现隐藏效果
    const leftElement = document.querySelector('.left') as HTMLElement
    const rightElement = document.querySelector('.right') as HTMLElement
    if (leftElement) {
      leftElement.style.transform = 'translateX(0)'
    }
    if (rightElement) {
      rightElement.style.transform = 'translateX(0)'
    }
  }
  flag.value = !flag.value
}
window.ue.interface.handleHide = () => {
  hideView()
}
</script>

<style scoped lang="scss">
.page-content {
  width: 3840px;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: black;

  .left {
    width: 960px;
    height: 888px;
    background: #f8f8f780;
    box-sizing: border-box;
    padding: 8px;
    background: rgba(248, 248, 247, 0.5);
    border-radius: 0px 8px 8px 0px;
    transition: all 0.6s ease;

    .top {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      margin-bottom: 8px;
    }

    .bottom {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
    }
  }

  .right {
    width: 960px;
    height: 888px;
    background: rgba(248, 248, 247, 0.5);
    border-radius: 8px 0px 0px 8px;
    padding: 8px;
    box-sizing: border-box;
    transition: all 0.6s ease;
    .top {
      width: 100%;
      height: 432px;
      border-radius: 8px;
      margin-bottom: 8px;
      box-sizing: border-box;
    }

    .bottom {
      width: 100%;
      height: 432px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
