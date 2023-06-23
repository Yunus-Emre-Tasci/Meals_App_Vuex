<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center px-5">
      <router-link :to="{name:'home'}">
        Home
      </router-link>
      <div class="flex gap-2">
        <router-link :to="{name:'byName'}" class="px-3 py-2 rounded h-full transition-colors hover:bg-purple-200">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="px-3 py-2 rounded h-full transition-colors hover:bg-purple-200">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'byIngredient'}" class="px-3 py-2 rounded h-full transition-colors hover:bg-purple-200">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
