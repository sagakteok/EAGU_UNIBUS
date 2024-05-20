<script setup>

import {ref} from "vue";
const fname = ref("Vue");

function CitybusByeSchool(name){
  return new URL(`/src/assets/CitybusByeSchool.svg`, import.meta.url).href;
}

</script>

<template>
  <v-img class="CitybusByeSchool" :src="CitybusByeSchool(fname)"></v-img>
  <v-layout>
    <Appbar/>
    <v-card class="card"></v-card>
  </v-layout>

</template>

<style>

body {
  background-image: url('../../assets/MainHome.svg');
  background-size: cover;
  width: auto;
  height: auto;
}

.CitybusByeSchool{
  bottom:190px;
  width:600px;
  top: 5px;
  margin: auto;
}

.card{
  top: 100px;
  width: 700px;
  height: 400px;
  margin: auto;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #000000;
}

</style>

<script>

import Appbar from "../Appbar.vue";
export default {
  name: "App",
  components: {Appbar}
};

</script>