<template>
   <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-purple-500">Ingredients</h1>
   </div>
   <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2  bg-white border-gray-200 focus:ring-purple-500 focus:border-purple-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of filteredIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
    </div> 
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import axiosClient from "../../axiosClient";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();
const keyword=ref("")
const ingredients=ref([])
const filteredIngredients=computed(()=>{
    if(!filteredIngredients) return ingredients
    return ingredients.value.filter(i=>i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(()=>{
    axiosClient.get("list.php?i=list").then(({data})=>{
     ingredients.value=data.meals
    })
})

</script>