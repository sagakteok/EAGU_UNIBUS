<template>
  <v-img :style="CitybusByeSchoolTitle()" :src="CitybusByeSchool"/>
  <v-layout>
    <v-card :style="CitybusByeSchoolCard()"/>
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
    CitybusByeSchoolTitle() {
      return {
        bottom: '190px',
        width: '600px',
        top: '5px',
        margin: 'auto'
      };
    },
    CitybusByeSchoolCard(){
      return{
        top: '100px',
        width: '700px',
        height: '400px',
        margin: 'auto',
        borderRadius: '60px',
        boxShadow: '0px 0px 30px #000000'
      };
    }
  }
}
</script>