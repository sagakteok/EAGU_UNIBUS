<template>
  <v-row>
    <v-img style="width: 300px" :src="slogan"/>
  </v-row>
  <v-row>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props" :style="MainHomeCards(isHovering, 'right')" @click="gotocity()">
        <v-img :style="MainHomeLeftCardImage()" :src="citybus"/>
      </v-card>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props" :style="MainHomeCards(isHovering, 'left')" @click="gotoshuttle()">
        <v-img :style="MainHomeRightCardImage()" :src="shuttlebus"/>
      </v-card>
    </v-hover>
  </v-row>
</template>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      slogan: new URL('/src/assets/slogan.png', import.meta.url).href,
      shuttlebus: new URL('/src/assets/shuttlebus.png', import.meta.url).href,
      citybus: new URL('/src/assets/Citybus.png', import.meta.url).href,
    };
  },
  methods: {
    gotoshuttle(){
      router.push('/shuttle')
    },
    gotocity(){
      router.push('/city');
    },
    MainHomeCards(isHovering, position) {
      return {
        backgroundColor: isHovering ? '#00FF7C' : '#FFFFFF',
        border: '4px solid',
        borderColor: '#006933',
        borderRadius: '60px',
        boxShadow: isHovering ? '0px 0px 30px #000000' : '0px 0px 30px #00000050',
        height: '250px',
        width: '250px',
        [position]: '15px',
        top: '100px'
      };
    },
    MainHomeLeftCardImage(){
      return{
        top: '50px',
        width: '150px',
        margin: 'auto'
      };
    },
    MainHomeRightCardImage(){
      return{
        top: '60px',
        width: '170px',
        margin: 'auto'
      };
    }
  }
};
</script>

<style>
body {
  background-image: url('../assets/MainHome.png');
  background-size: cover;
  width: auto;
  height: auto;
}
</style>
