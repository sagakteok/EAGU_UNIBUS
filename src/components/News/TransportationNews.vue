<template>
  <v-layout>
    <v-card class="Newscard">
      <v-img class="TransportationNews" :src="TransportationNews"/></v-card>
  </v-layout>

</template>

<style>

body {
  background-image: url('../../assets/MainHome.svg');
  background-size: cover;
  width: auto;
  height: auto;
}

.TransportationNews{
  width:200px;
  top: 50px;
  margin: auto;
}

.Newscard{
  top: 20px;
  width: 1000px;
  height: 600px;
  margin: auto;
  border-radius: 60px;
  box-shadow: 0px 0px 30px #00000090;
}

</style>

<script>
export default {
  data() {
    return {
      TransportationNews: new URL(`/src/assets/TransportationNews.svg`, import.meta.url).href
    };
  }
}
</script>