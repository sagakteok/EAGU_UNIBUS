<template>
  <v-layout>
    <v-card :style="CitybusByeSchoolCard()">
      <v-img :style="CitybusByeSchoolTitle()" :src="CitybusByeSchool"/>
    </v-card>
  </v-layout>
</template>

<style>
body {
  background-image: url('../../assets/MainHome.png');
  background-size: cover;
  width: auto;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {
      CitybusByeSchool: new URL(`/src/assets/CitybusByeSchool.png`, import.meta.url).href
    };
  },
  methods: {
    CitybusByeSchoolCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    CitybusByeSchoolTitle() {
      return {
        width: '350px',
        top: '50px',
        margin: 'auto'
      };
    },
  }
}
</script>