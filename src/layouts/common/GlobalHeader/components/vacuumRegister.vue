<template>
  <div>
    <n-button type="primary">{{ number }}</n-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { getSum } from '@/service/api/parm';

defineOptions({ name: 'vacuumRegister' });

let timerId: number;
const number = ref(0);
onMounted(() => {
  timerId = setInterval(updateRegister, 1000);
});

onUnmounted(() => {
  clearInterval(timerId);
});

async function updateRegister() {
  const { data } = await getSum();
  // 更新页面元素
  if (data) {
    number.value = data;
  }
}
</script>

<style scoped></style>
