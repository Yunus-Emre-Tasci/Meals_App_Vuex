<template>
    <div class="p-6">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" @change="searchMeals"/>
    </div>
    <!-- <pre>{{ meals }}</pre> -->
</template>

<script setup>
import { ref } from "vue";
import store from "../store"

const keyword=ref("")
const meals=computed(()=>store.state.searchMeals)

function searchMeals(){
   store.dispatch("searchMeals",keyword.value)
}

</script>