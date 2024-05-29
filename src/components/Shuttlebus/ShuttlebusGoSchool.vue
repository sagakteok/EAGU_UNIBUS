<template>
  <v-layout>
    <v-card :style="ShuttlebusGoSchoolCard()">
      <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
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