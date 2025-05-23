<script setup>
import { ref } from 'vue'
import { useMessageStore } from '~/stores/useMessage.js'

const storeMsg = useMessageStore();

</script>

<template>
  <div un-cloak>{{ storeMsg.setupMsg }}</div>
</template>
