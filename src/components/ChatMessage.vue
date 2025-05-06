<template>
  <div :class="['p-2 my-1 rounded max-w-[80%]', message.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-700 text-white self-start']">
    {{ message.text }}
  </div>
</template>

<script setup>
defineProps({ message: Object })
</script>
