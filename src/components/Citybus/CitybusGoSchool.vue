<template>
  <v-img :style="CitybusGoSchoolTitle()" :src="CitybusGoSchool"/>
  <v-layout>
    <v-card :style="CitybusGoSchoolCard()"/>
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
      CitybusGoSchool: new URL(`/src/assets/CitybusGoSchool.png`, import.meta.url).href
    };
  },
  methods:{
    CitybusGoSchoolTitle(){
      return{
        bottom: '190px',
        width: '600px',
        top: '5px',
        margin: 'auto'
      };
    },
    CitybusGoSchoolCard(){
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