<script setup>
import {ref} from "vue";
import router from "../router.js";
const fname = ref("Vue");

function UNIBUS(name){
  return new URL(`/src/assets/UNIBUS.svg`, import.meta.url).href;
}

</script>

<template>
  <v-app-bar class="app-bar" color="transparent" elevation="0" prominent>
    <v-btn @click="router.push('/')">
      <v-img width="100px" :src="UNIBUS(fname)"/>
    </v-btn>
    <v-btn variant="text" @click="router.push('/shuttle')">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">셔틀버스</div>
    </v-btn>
    <v-btn variant="text" @click="router.push('/city')">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">시내버스</div>
    </v-btn>
    <v-btn variant="text" @click="router.push('/news')">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">소식</div>
    </v-btn>
    <v-btn href="https://www.dju.ac.kr/">
      <div style="font-family: 'Inter-Bold', Helvetica; color: #FFFFFF; font-size: 20px; font-weight: 700;">대전대학교</div>
    </v-btn>
  </v-app-bar>
</template>

<script>

</script>