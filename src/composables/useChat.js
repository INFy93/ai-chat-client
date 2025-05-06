import { ref } from 'vue'

export function useChat() {
  const messages = ref([
    { role: 'navia', text: 'Ты идёшь по мокрой аллее. Где-то рядом — шелест листвы и капли. Из темноты слышится голос...' }
  ])
  const loading = ref(false)

  const sendMessage = async (text) => {
    if (!text.trim()) return
    messages.value.push({ role: 'user', text })
    loading.value = true

    try {
      const res = await fetch('https://ai-chat-server-dod9.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })
      const data = await res.json()
      messages.value.push({ role: 'navia', text: data.reply })
    } catch (err) {
      messages.value.push({ role: 'navia', text: 'Ошибка при соединении с сервером.' })
    } finally {
      loading.value = false
    }
  }

  return { messages, sendMessage, loading }
}
