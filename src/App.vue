<template>
  <AppBar/>
  <router-view/>
</template>

<script>
import AppBar from "./components/Appbar.vue";

export default {
  components: {AppBar}
};
</script>