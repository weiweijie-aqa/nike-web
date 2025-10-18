<template>
  <div style="width: 100%; height: 100%; font-size: 20px;">{{ data }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// JSON数据对象
const data = ref('未接收数据')

/* 接收 UE 消息 */
window.ue.interface.sendData = (jsonStr: string) => {
  data.value = JSON.parse(jsonStr)
}
</script>
