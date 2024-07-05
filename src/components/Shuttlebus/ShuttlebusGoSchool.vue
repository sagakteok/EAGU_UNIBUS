<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
    <v-row>
      <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
    </v-row>
    <v-row>
      <v-toolbar :style="ShuttlebusGoSchoolToolbar()">
        <v-btn density="comfortable">1번</v-btn>
        <v-btn density="comfortable">2번</v-btn>
      </v-toolbar>
    </v-row>
  </v-app>
</template>

<script>

import PageAppbar from "../Appbars/PageAppbar.vue";
import KakaoMap from "../../KaKaoMap.vue";

export default {
  components: {PageAppbar, KakaoMap},
  data() {
    return {
      ShuttlebusGoSchool: new URL(`/src/assets/ShuttlebusGoSchool.png`, import.meta.url).href
    };
  },
  methods: {
    ShuttlebusGoSchoolTitle() {
      return {
        width: '30vw',
        minWidth: '550px',
        bottom: '100px'
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        width: '50vw',
        minWidth: '550px',
        height: '70px',
        bottom: '200px'
      }
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>