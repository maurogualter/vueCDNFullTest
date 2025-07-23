<template>
  <p>Choose what part of this page you want to see 2:</p>

  <nav><router-link to="/">Home</router-link> | <router-link to="/fooditems">fooditems</router-link> | <router-link to="/animalCollection">animalCollection</router-link></nav>
  <main>
    <router-view />
  </main>

</template>


<script>

import FoodItems from '~/FoodItems.vue'
import AnimalCollection from '~/AnimalCollection.vue'

export default {
  components: {
    'food-items': FoodItems,
    'animal-collection': AnimalCollection
  },

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