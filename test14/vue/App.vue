<template>
  <p>Choose what part of this page you want to see 14:</p>

  <nav>
      <router-link to="/test14">Home</router-link>
    | <router-link to="/test14/fooditems2">fooditems</router-link>
    | <router-link to="/test14/animalCollection2">animalCollection</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
<br>
  <span v-text="msgGlobal"></span> -

</template>


<script>

export default {

  data() {
    return {
      activeComp: 'animal-collection',
      msgGlobal: 'Mauro Gualter',
    }
  },
  methods: {
    changeMsgGlobal (username) {
      this.msgGlobal = username;
    }
  }
}
</script>

<style scoped>
button {
  padding: 5px;
  margin: 10px;
}
div {
  border: dashed black 1px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>