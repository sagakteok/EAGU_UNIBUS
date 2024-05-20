<template>
  <v-layout>
    <AppBar/>
  </v-layout>
  <MainHome/>
</template>

<script>
import AppBar from "./components/Appbar.vue";
import MainHome from "./components/MainHome.vue";

export default {
  name: "App",
  components: {AppBar, MainHome}
};
</script>