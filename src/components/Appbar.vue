<script setup>
import {ref} from "vue";
const fname = ref("Vue");

function UNIBUS(name){
  return new URL(`/src/assets/UNIBUS.svg`, import.meta.url).href;
}
</script>

<template>
  <v-app-bar class="app-bar" color="transparent" elevation="0" prominent>
    <v-btn>
      <div class="app-bar-titletext">UNIBUS</div>
    </v-btn>
    <v-btn>
      <div class="app-bar-text">셔틀버스</div>
    </v-btn>
    <v-btn>
      <div class="app-bar-text">시내버스</div>
    </v-btn>
    <v-btn>
      <div class="app-bar-text">소식</div>
    </v-btn>
    <v-btn>
      <div class="app-bar-text">대전대학교</div>
    </v-btn>
  </v-app-bar>
</template>

<style>

.app-bar-titletext{
  font-family: "Inter-Bold", Helvetica;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 700;
}

.app-bar-text {
  font-family: "Inter-Bold", Helvetica;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 700;
}
</style>

<script>

</script>