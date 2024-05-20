<script setup>
import {ref} from "vue";
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


</script>

<template>
  <v-img class="UNIBUS" :src="UNIBUS(fname)"/>
  <v-img class="slogan" :src="slogan(fname)"/>
  <v-layout>
      <v-card class="card1" hover link>
        <v-img class="cardimages" :src="shuttlebus(fname)"/>
        <div class="cards-text">셔틀버스</div>
      </v-card>
      <v-card class="card2" hover link>
        <v-img class="cardimages" :src="citybus(fname)"/>
        <div class="cards-text">시내버스</div>
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

.UNIBUS{
  width: 400px;
  margin: auto;
}

.slogan{
  top: 15px;
  width:300px;
  align: center;
  margin: auto;
}

.card1{
  color: #006933;
  border: 4px solid;
  border-color: #006933;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #00000040;
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
  box-shadow: 0px 0px 30px #00000040;
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

.cards-text{
  color: #006933;
  font-family: "Inter-Bold", Helvetica;
  font-size: 30px;
  font-weight: 900;
  left: 70px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 170px;
}

</style>

<script>

</script>