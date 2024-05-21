<template>
    <v-img class="MainUNIBUS" :src="UNIBUS"/>
    <v-img class="slogan" :src="slogan"/>
    <v-layout>
      <v-card class="card1" hover @click="gotoshuttle()">
        <v-img class="cardimages" :src="shuttlebus"/>
        <v-img class="ShuttlebusText" :src="ShuttlebusText"/>
      </v-card>
      <v-card class="card2" hover @click="gotocity()">
        <v-img class="cardimages" :src="citybus"/>
        <v-img class="CitybusText" :src="CitybusText"/>
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
import router from "../router.js";

export default {
  data() {
    return {
      UNIBUS: new URL(`../assets/UNIBUS.svg`, import.meta.url).href,
      slogan: new URL('/src/assets/slogan.svg', import.meta.url).href,
      shuttlebus: new URL('/src/assets/shuttlebus.svg', import.meta.url).href,
      citybus: new URL('/src/assets/citybus.svg', import.meta.url).href,
      ShuttlebusText: new URL('/src/assets/ShuttlebusText.svg', import.meta.url).href,
      CitybusText: new URL('/src/assets/CitybusText.svg', import.meta.url).href
    };
  },
  methods: {
    gotoshuttle(){
      router.push('/gotoshuttle')
    },
    gotocity(){
      router.push('/city');
    }
  }
};
</script>