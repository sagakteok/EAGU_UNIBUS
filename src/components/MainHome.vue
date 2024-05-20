<script setup>
import {ref} from "vue";
import router from "../router.js";
const fname = ref("Vue");

function UNIBUS(name){
  return new URL(`/src/assets/UNIBUS.svg`, import.meta.url).href;
}

function slogan(name){
  return new URL('/src/assets/slogan.svg', import.meta.url).href;
}

function shuttlebus(name){
  return new URL('/src/assets/shuttlebus.svg', import.meta.url).href;
}

function citybus(name){
  return new URL('/src/assets/citybus.svg', import.meta.url).href;
}

function ShuttlebusText(name){
  return new URL('/src/assets/ShuttlebusText.svg', import.meta.url).href;
}

function CitybusText(name){
  return new URL('/src/assets/CitybusText.svg', import.meta.url).href;
}


</script>

<template>
    <v-img class="MainUNIBUS" :src="UNIBUS(fname)"/>
    <v-img class="slogan" :src="slogan(fname)"/>
    <v-layout>
      <v-card class="card1" hover @click="router.push('/shuttle')">
        <v-img class="cardimages" :src="shuttlebus(fname)"/>
        <v-img class="ShuttlebusText" :src="ShuttlebusText(fname)"/>
      </v-card>
      <v-card class="card2" hover @click="router.push('/city')">
        <v-img class="cardimages" :src="citybus(fname)"/>
        <v-img class="CitybusText" :src="CitybusText(fname)"/>
      </v-card>
  </v-layout>
</template>

<style>
body {
  background-image: url('../assets/MainHome.svg');
  background-size: cover;
  width: auto;
  height: auto;
}

.MainUNIBUS{
  width: 400px;
  margin: auto;
}

.slogan{
  top: 15px;
  width:300px;
  margin: auto;
}

.card1{
  color: #006933;
  border: 4px solid;
  border-color: #006933;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #00000050;
  height: 250px;
  position: relative;
  width: 250px;
  right: 15px;
  top: 100px;
}

.card2{
  color: #006933;
  border: 4px solid;
  border-color: #006933;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #00000050;
  height: 250px;
  position: relative;
  width: 250px;
  left: 15px;
  top: 100px;
}

.cardimages{
  top: 15px;
  width: 170px;
  margin: auto;
}

.ShuttlebusText{
  top: 5px;
  width: 110px;
  margin: auto;
}

.CitybusText{
  top: 5px;
  width: 110px;
  margin: auto;
}

</style>

<script>

</script>