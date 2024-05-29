<template>
  <v-layout>
    <v-card :style="ShuttlebusByeSchoolCard()">
      <v-img :style="ShuttlebusByeSchoolTitle()" :src="ShuttlebusByeSchool"/>
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
      ShuttlebusByeSchool: new URL(`/src/assets/ShuttlebusByeSchool.png`, import.meta.url).href
    };
  },
  methods: {
    ShuttlebusByeSchoolCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    ShuttlebusByeSchoolTitle() {
      return {
        width: '350px',
        top: '50px',
        margin: 'auto'
      };
    },
  }
}
</script>