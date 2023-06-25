<template>
    <!-- <div class="p-8">
       <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
      <router-link :to="{name:'byIngredient', params:{ingredient:ingredient.idIngredient}}" class="bg-white block rounded p-3 mb-3 shadow" :key="ingredient.idIngredient" v-for="ingredient of ingredients">
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
    </div> -->
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue"
import store from "../store";

const route=useRoute()
const meals=computed(()=>store.state.mealsByIngredient)

onMounted(()=>{
    store.dispatch("searchMealsByIngredient",route.params.ingredient)
})

</script>