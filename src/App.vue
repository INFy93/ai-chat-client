<template>
  <div class="min-h-screen bg-gray-900 text-white p-4">
    <h1 class="text-2xl font-bold mb-4">🌧️ Навия встречает тебя...</h1>
    <div class="bg-gray-800 p-4 rounded mb-4 max-w-xl">
      <p>{{ greeting }}</p>
    </div>
    <input v-model="userMessage" class="w-full p-2 rounded text-black" placeholder="Напиши что-нибудь..." @keydown.enter="sendMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const greeting = `Ты идёшь по мокрой аллее. Где-то рядом — шелест листвы и тяжёлые капли. Из темноты слышится голос... "Эй... ты в порядке?"`

const userMessage = ref('')
function sendMessage() {
  alert(`Ты написал: ${userMessage.value}`)
  userMessage.value = ''
}
</script>
