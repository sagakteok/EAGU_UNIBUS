<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
    <v-row>
      <v-img :style="CitybusGoSchoolTitle()" :src="CitybusGoSchool"/>
    </v-row>
    <v-row>
      <v-toolbar :style="CitybusGoSchoolToolbar()">
        <v-btn density="comfortable">1번</v-btn>
        <v-btn density="comfortable">2번</v-btn>
        <v-btn density="comfortable">3번</v-btn>
        <v-btn density="comfortable">4번</v-btn>
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
      CitybusGoSchool: new URL(`/src/assets/CitybusGoSchool.png`, import.meta.url).href
    };
  },
  methods: {
    CitybusGoSchoolTitle() {
      return {
        width: '30vw',
        minWidth: '550px',
        bottom: '100px'
      };
    },
    CitybusGoSchoolToolbar(){
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