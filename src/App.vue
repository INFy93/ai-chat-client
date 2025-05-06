<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 flex flex-col">
    <h1 class="text-2xl font-bold mb-4">Навия 💬</h1>
    <div class="flex flex-col gap-2 mb-4 overflow-y-auto grow">
      <ChatMessage v-for="(msg, i) in messages" :key="i" :message="msg"/>
    </div>
    <div class="flex gap-2">
      <input
          v-model="userInput"
          :disabled="loading"
          class="flex-1 p-2 rounded text-black"
          placeholder="Напиши что-нибудь..."
          @keydown.enter="handleSend"
      />
      <button :disabled="loading" class="bg-blue-600 px-4 py-2 rounded" @click="handleSend">
        Отправить
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useChat} from './composables/useChat'
import ChatMessage from './components/ChatMessage.vue'

const userInput = ref('')
const {messages, sendMessage, loading} = useChat()

function handleSend() {
  if (userInput.value.trim()) {
    sendMessage(userInput.value)
    userInput.value = ''
  }
}
</script>
