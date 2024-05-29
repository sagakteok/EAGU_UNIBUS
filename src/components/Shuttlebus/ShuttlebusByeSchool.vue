<template>
  <v-img :style="ShuttlebusByeSchoolTitle()" :src="ShuttlebusByeSchool"/>
  <v-layout>
    <v-card :style="ShuttlebusByeSchoolCard()"/>
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
      ShuttlebusByeSchool: new URL(`/src/assets/ShuttlebusByeSchool.png`, import.meta.url).href
    };
  },
  methods:{
    ShuttlebusByeSchoolTitle(){
      return{
        bottom: '190px',
        width: '600px',
        top: '5px',
        margin: 'auto'
      };
    },
    ShuttlebusByeSchoolCard(){
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