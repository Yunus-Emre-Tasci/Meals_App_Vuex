<template>
    <header class="bg-white shadow h-16 flex justify-between items-center px-5">
      <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5 text-xl text-purple-500 font-bold">
        Home
      </router-link>
      <div class="flex gap-2">
        <router-link :to="{name:'byName'}" class="px-3 py-2 rounded h-full text-purple-600 hover:text-black transition-colors hover:bg-purple-200">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="px-3 py-2 rounded h-full text-purple-600 hover:text-black transition-colors hover:bg-purple-200">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="px-3 py-2 rounded text-purple-600 hover:text-black h-full transition-colors hover:bg-purple-200">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>