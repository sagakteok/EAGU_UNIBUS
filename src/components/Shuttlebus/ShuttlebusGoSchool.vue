<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
      <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
      <v-toolbar :style="ShuttlebusGoSchoolToolbar()">
        <v-btn density="comfortable">1번</v-btn>
        <v-btn density="comfortable">2번</v-btn>
      </v-toolbar>
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
        top: '-300px',
        width: '30vw',
        minWidth: '550px',
        margin: 'auto'
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        width: '50vw',
        minWidth: '700px',
        bottom: '700px',
        margin: 'auto'
      }
    }
  },
  mounted(){
    document.body.style.backgroundColor = '#006933'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>