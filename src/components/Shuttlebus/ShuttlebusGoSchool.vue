<template>
  <v-layout>
    <v-card :style="ShuttlebusGoSchoolCard()">
      <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
      <hr style="margin-top: 60px">
      <v-toolbar>
        <v-container style="margin-right: 500px;">
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-btn density="comfortable">1번</v-btn>
            </v-col>

            <v-col cols="auto">
              <v-btn density="comfortable">2번</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-toolbar>
      <kakao-map/>
    </v-card>


  </v-layout>
</template>

<style>
body{
  background-image: url('../../assets/MainHome.png');
  background-size: cover;
  width: auto;
  height: auto;
}
</style>

<script>


import KakaoMap from "../../KaKaoMap.vue";

export default {
  components: {KakaoMap},
  data() {
    return {
      ShuttlebusGoSchool: new URL(`/src/assets/ShuttlebusGoSchool.png`, import.meta.url).href
    };
  },
  methods: {
    ShuttlebusGoSchoolCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    ShuttlebusGoSchoolTitle() {
      return {
        width: '350px',
        top: '50px',
        margin: 'auto'
      };
    },
  }
}
</script>