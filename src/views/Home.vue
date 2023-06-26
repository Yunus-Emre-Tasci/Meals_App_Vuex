<template>
<div class="p-8 pb-2 text-purple-500">
    <h1 class="text-4xl font-bold mb-6">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue"
import axiosClient from "../../axiosClient"
import Meals from "../components/Meals.vue";

const meals=ref([])

onMounted(()=>{
  for(let i=0;i<11;i++){
    axiosClient.get(`random.php`).then(({data})=>meals.value.push(data.meals[0]))
  }
})
</script>