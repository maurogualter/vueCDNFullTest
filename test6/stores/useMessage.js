export const useMessageStore = Pinia.defineStore('message', () => {
  const { ref } = VueDemi
  const hello = 'Hello World!'
  const setupMsg = 'Setup , Vue3.2+ '
  const messageChange = ref('aa')

  return {
    hello,
    setupMsg,
    messageChange,
  }
})
