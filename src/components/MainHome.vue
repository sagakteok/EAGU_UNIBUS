<template>
    <v-row>
      <v-img style="width: 300px" :src="slogan"/>
    </v-row>
    <v-row>
      <v-card style="color: #006933; border: 4px solid; border-color: #006933; border-radius: 60px; box-shadow: 0px 0px 30px #00000050; height: 250px; width: 250px; right: 15px; top: 100px;" hover @click="gotoshuttle()">
        <v-img style="top: 60px; width: 180px; margin: auto;" :src="shuttlebus"/>
      </v-card>
      <v-card style="color: #006933; border: 4px solid; border-color: #006933; border-radius: 60px; box-shadow: 0px 0px 30px #00000050; height: 250px; width: 250px; left: 15px; top: 100px;" hover @click="gotocity()">
        <v-img style="top: 60px; width: 150px; margin: auto" :src="citybus"/>
      </v-card>
    </v-row>
</template>

<style>
body {
  background-image: url('../assets/MainHome.png');
  background-size: cover;
  width: auto;
  height: auto;
}
</style>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      slogan: new URL('/src/assets/slogan.png', import.meta.url).href,
      shuttlebus: new URL('/src/assets/shuttlebus.png', import.meta.url).href,
      citybus: new URL('/src/assets/citybus.png', import.meta.url).href,
    };
  },
  methods: {
    gotoshuttle(){
      router.push('/shuttle')
    },
    gotocity(){
      router.push('/city');
    }
  }
};
</script>