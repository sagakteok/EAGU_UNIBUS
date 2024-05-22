<template>
  <v-app-bar color="transparent" elevation="0" prominent>
    <v-btn @click="gotomain()">
      <v-img width="100px" :src="UNIBUS"/>
    </v-btn>
    <v-btn variant="text" @click="gotoshuttle()">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">셔틀버스</div>
    </v-btn>
    <v-btn variant="text" @click="gotocity()">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">시내버스</div>
    </v-btn>
    <v-btn variant="text" @click="gotonews()">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">소식</div>
    </v-btn>
    <v-btn href="https://www.dju.ac.kr/">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">대전대학교</div>
    </v-btn>
  </v-app-bar>
</template>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      UNIBUS: new URL(`../assets/UNIBUS.svg`, import.meta.url).href
    };
  },
  methods: {
    gotomain() {
      router.push('/')
    },
    gotoshuttle(){
      router.push('/shuttle')
    },
    gotocity(){
      router.push('/city')
    },
    gotonews(){
      router.push('/news');
    }
  }
};
</script>