<template>
  <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
  <v-layout>
    <v-card :style="ShuttlebusGoSchoolCard()"/>
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
      ShuttlebusGoSchool: new URL(`/src/assets/ShuttlebusGoSchool.png`, import.meta.url).href
    };
  },
  methods:{
    ShuttlebusGoSchoolTitle(){
      return{
        bottom: '190px',
        width: '600px',
        top: '5px',
        margin: 'auto'
      };
    },
    ShuttlebusGoSchoolCard(){
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