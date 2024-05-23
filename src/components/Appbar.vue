<template>
  <v-app-bar color="transparent" elevation="0" prominent>
    <v-hover v-slot="{ isHovering, props }">
      <text @click="gotomain()">
        <v-img v-bind="props" :style="{width: '120px', marginLeft: '20px', cursor: 'pointer'}" :src="UNIBUS"/>
      </text>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" :style="{ transition: 'all .07s linear 0s', fontFamily: 'Inter-Bold, Helvetica', textDecoration: isHovering ? 'underline' : 'none', color: isHovering ? '#00FF7C' : '#FFFFFF', fontSize: isHovering ? '22px' : '20px', fontWeight: 700, outline: 'none', marginLeft: '30px', cursor: 'pointer'}" @click="gotoshuttle()">셔틀버스</text>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" :style="{ transition: 'all .07s linear 0s', fontFamily: 'Inter-Bold, Helvetica', textDecoration: isHovering ? 'underline' : 'none', color: isHovering ? '#00FF7C' : '#FFFFFF', fontSize: isHovering ? '22px' : '20px', fontWeight: 700, outline: 'none', marginLeft: '30px', cursor: 'pointer'}" @click="gotocity()">시내버스</text>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" :style="{ transition: 'all .07s linear 0s', fontFamily: 'Inter-Bold, Helvetica', textDecoration: isHovering ? 'underline' : 'none', color: isHovering ? '#00FF7C' : '#FFFFFF', fontSize: isHovering ? '22px' : '20px', fontWeight: 700, outline: 'none', marginLeft: '30px', cursor: 'pointer'}" @click="gotonews()">소식</text>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" :style="{ transition: 'all .07s linear 0s', fontFamily: 'Inter-Bold, Helvetica', textDecoration: isHovering ? 'underline' : 'none', color: isHovering ? '#00FF7C' : '#FFFFFF', fontSize: isHovering ? '22px' : '20px', fontWeight: 700, outline: 'none', marginLeft: '30px', cursor: 'pointer'}" @click="gotodju()">대전대학교</text>
    </v-hover>
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