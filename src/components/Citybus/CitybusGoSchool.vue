<template>
  <v-app>
    <PageAppbar/>
    <v-img :style="CitybusGoSchoolTitle()" :src="CitybusGoSchool"/>
    <v-toolbar :style="CitybusGoSchoolToolbar()">
      <v-btn density="comfortable">1번</v-btn>
      <v-btn density="comfortable">2번</v-btn>
      <v-btn density="comfortable">3번</v-btn>
      <v-btn density="comfortable">4번</v-btn>
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
      CitybusGoSchool: new URL(`/src/assets/CitybusGoSchool.png`, import.meta.url).href
    };
  },
  methods: {
    CitybusGoSchoolTitle() {
      return {
        top: '-300px',
        width: '30vw',
        minWidth: '550px',
        margin: 'auto'
      };
    },
    CitybusGoSchoolToolbar(){
      return {
        width: '50vw',
        minWidth: '700px',
        bottom: '700px',
        margin: 'auto'
      }
    }
  }
}
</script>