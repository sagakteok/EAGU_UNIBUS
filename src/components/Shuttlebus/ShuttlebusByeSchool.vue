<template>
  <v-img class="ShuttlebusByeSchool" :src="ShuttlebusByeSchool"></v-img>
  <v-layout>
    <v-card class="card"></v-card>
  </v-layout>

</template>

<style>

body {
  background-image: url('../../assets/MainHome.svg');
  background-size: cover;
  width: auto;
  height: auto;
}

.ShuttlebusByeSchool{
  bottom:190px;
  width:600px;
  top: 5px;
  margin: auto;
}

.card{
  top: 100px;
  width: 700px;
  height: 400px;
  margin: auto;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #000000;
}

</style>

<script>
export default {
  data() {
    return {
      ShuttlebusByeSchool: new URL(`/src/assets/ShuttlebusByeSchool.svg`, import.meta.url).href
    };
  }
}
</script>