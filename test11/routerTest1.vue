<template>
<h1>Router Test!</h1>
  <p>This is a router test 1.</p>
  <span v-text="msg"/>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'This is a Test 1'
      }
    }
  }
</script>