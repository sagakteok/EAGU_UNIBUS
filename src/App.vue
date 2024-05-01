<template>
  <v-app>
    <test/>
    <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/test.vue";

export default {
  name: "App",
  components: {Test, HelloWorld},
};
</script>