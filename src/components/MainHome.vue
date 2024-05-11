<template>
  <v-app-bar :elevation="0">
    <v-btn icon="mdi-dots-vertical" @click="drawer = !drawer" location="right"></v-btn>
    <v-toolbar-title location="left">UNIBUS</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" color="#006934" app>
    목록
  </v-navigation-drawer>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
}
</script>