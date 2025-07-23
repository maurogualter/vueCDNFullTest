<template>
  <h1>Animals!!!</h1>
  <p>I want to learn about at least one new animal every year.</p>
  <span v-text="msgG"/>
  <br/>
  <button @click='changeMsg()'>Change msg Global</button>
</template>


<script>

export default {
  props: {
    msgG: String
  },
  methods: {
    changeMsg() {
      this.$emit('changeMsgGlobal')
    }
  }
}
</script>