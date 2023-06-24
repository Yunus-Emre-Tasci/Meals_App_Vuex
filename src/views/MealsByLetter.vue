<template>
  <div class="flex justify-center gap-2 mt-2 ">
     <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
     </router-link>
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { computed } from "vue"


const letters="ABCDEFGHIJKLMNOPQRSTUWXYZ".split("")
const meals=computed(()=>store.state.mealsByLetter)

</script>