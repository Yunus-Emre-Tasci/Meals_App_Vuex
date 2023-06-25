<template>
    
</template>

<script setup>
import { onMounted } from "vue";
import axiosClient from "../../axiosClient";



const ingredients=ref([])

onMounted(async()=>{
    const response =await axiosClient.get("list.php?i=list")
    console.log(response.data);
    ingredients.value=response.data
})

</script>