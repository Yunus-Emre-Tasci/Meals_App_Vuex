<template>
   <div class="p-8">
       <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
      <router-link :to="{name:'byIngredient', params:{ingredient}}" class="bg-white block rounded p-3 mb-3 shadow" :key="ingredient.idIngredient" v-for="ingredient of ingredients">
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
    </div> 
</template>

<script setup>
import { onMounted,ref } from "vue";
import axiosClient from "../../axiosClient";



const ingredients=ref([])

onMounted(async()=>{
    const response =await axiosClient.get("list.php?i=list")
    console.log(response.data);
    ingredients.value=response.data
})

</script>