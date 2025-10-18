<script setup lang="ts">
import { RouterView } from 'vue-router'
function fitScreen() {
  const baseWidth = 3840;
  const baseHeight = 1080;
  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY); // 保持比例缩放

  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = 'top left';
  document.body.style.width = `${baseWidth}px`;
  document.body.style.height = `${baseHeight}px`;
  document.body.style.overflow = 'hidden';
}

window.addEventListener('resize', fitScreen);
fitScreen();
</script>

<template>
  <RouterView />
</template>

<style scoped>
/* App组件样式已移至全局样式文件 */
</style>
