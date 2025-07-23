<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals</router-link>
  <router-link to="/food">Food</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  background-color: black;
  border: solid 1px black;
  color: white;
  padding: 5px;
  margin: 10px;
}
a:hover,
a.router-link-active {
  background-color: rgb(110, 79, 13);
}
div {
  border: dashed black 1px;
  padding: 20px;
  margin: 10px;
  display: inline-block;
}
</style>


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
      router: router
    }
  },
  created() {
    router.addRoute({
      component: AnimalCollection,
      name: "animals",
      path: "/animals"
    },
    {
      component: FoodItems,
      name: "food",
      path: "/food"
    })
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