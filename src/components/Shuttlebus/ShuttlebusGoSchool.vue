<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
    <v-row>
      <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
    </v-row>
    <v-row>
      <v-toolbar :style="ShuttlebusGoSchoolToolbar()">
        <v-app-bar-nav-icon color="#FFFFFF" variant="text" @click.stop="drawer = !drawer"/>
        <text :style="ShuttlebusGoSchoolToobarText()">{{ selectedCourse || '코스를 선택하세요.' }}</text>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" elevation="10" :style="ShuttlebusGoSchoolDrawer()" permanent>
        <v-hover v-slot="{ isHovering, props }" v-for="course in courses" :key="course">
          <v-list-item-title v-bind="props" :style="ListTexts(isHovering)" @click="selectCourse(course)">{{ course }}</v-list-item-title>
        </v-hover>
      </v-navigation-drawer>
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
      ShuttlebusGoSchool: new URL(`/src/assets/ShuttlebusGoSchool.png`, import.meta.url).href,
      drawer: false,
      selectedCourse: null,
      courses: [
        '대전역 동광장 방면',
        '복합터미널 방면'
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    ShuttlebusGoSchoolTitle() {
      return {
        width: '20vw',
        minWidth: '550px',
        bottom: '100px'
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        width: '50vw',
        minWidth: '550px',
        height: '70px',
        bottom: '200px',
        background: '#00000090'
      }
    },
    ShuttlebusGoSchoolDrawer(){
      return {
        background: '#FFFFFF'
      }
    },
    ShuttlebusGoSchoolToobarText(){
      return {
        margin: 'auto',
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: '30px',
        fontWeight: '700'
      }
    },
    ListTexts(isHovering) {
      return {
        transition: 'all .1s linear 0s',
        color: isHovering ? '#006933' : '#000000',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: '25px',
        marginLeft: '25px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'left',
        cursor: 'pointer'
      };
    },
    selectCourse(course) {
      this.selectedCourse = course;
      this.drawer = false;
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>