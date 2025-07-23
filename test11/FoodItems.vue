<template>
<h1>Food!</h1>
  <p>I like most types of food.</p>
  <span v-text="msg"/>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'This is a Test'
      }
    }
  }
</script>