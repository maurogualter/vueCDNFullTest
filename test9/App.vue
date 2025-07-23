<template>
  <p>Choose what part of this page you want to see:</p>
  <button @click="activeComp = 'animal-collection'" >Animals</button>
  <button @click="activeComp = 'food-items'">Food</button><br>
  <div>
    <component :is="activeComp" :msgG="msgGlobal" @changeMsgGlobal="changeMsgGlobal($event)"></component>
  </div>
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