<template>
  <v-app-bar color="transparent" elevation="0" prominent>
    <text @click="gotomain()">
      <v-img style="width: 120px; margin-left: 20px; cursor: pointer;" :src="UNIBUS"/>
    </text>
    <text style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700; outline: none; margin-left: 30px; cursor: pointer" @click="gotoshuttle()">셔틀버스</text>
    <text style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700; outline: none; margin-left: 30px; cursor: pointer" @click="gotocity()">시내버스</text>
    <text style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700; outline: none; margin-left: 30px; cursor: pointer" @click="gotonews()">소식</text>
    <text style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700; outline: none; margin-left: 30px; cursor: pointer" @click="gotodju()">대전대학교</text>
  </v-app-bar>
</template>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      UNIBUS: new URL(`../assets/UNIBUS.png`, import.meta.url).href
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
    },
    gotodju(){
      window.location.href='https://www.dju.ac.kr/'
    }
  }
};
</script>