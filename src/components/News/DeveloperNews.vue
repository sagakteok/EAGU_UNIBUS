<script setup>

import {ref} from "vue";
const fname = ref("Vue");

function DeveloperNews(name){
  return new URL(`/src/assets/DeveloperNews.svg`, import.meta.url).href;
}

</script>

<template>
  <v-layout>
    <v-card class="Newscard">
      <v-img class="DeveloperNews" :src="DeveloperNews(fname)"/></v-card>
  </v-layout>

</template>

<style>

body {
  background-image: url('../../assets/MainHome.svg');
  background-size: cover;
  width: auto;
  height: auto;
}

.DeveloperNews{
  width:250px;
  top: 50px;
  margin: auto;
}

.Newscard{
  top: 20px;
  width: 1000px;
  height: 600px;
  margin: auto;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #000000;
}

</style>

<script>

</script>