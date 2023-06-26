<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
           <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover"/>
           </router-link>
           <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
           <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum maxime quas porro repudiandae voluptate praesentium doloremque ea nemo eum omnis.</p>
           <div class="text-center">
            <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
           </div>
           </div>
        </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

  const {meal}=defineProps({
    meal:Object
  })
</script>