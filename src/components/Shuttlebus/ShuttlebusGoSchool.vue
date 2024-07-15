<template>
  <v-app style="background-color: transparent">
    <Appbar/>
    <text>
      <v-row>
        <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
      </v-row>
      <v-row>
        <v-toolbar :style="ShuttlebusGoSchoolToolbar()">
          <v-menu>
            <template v-slot:activator="{props}">
              <v-btn icon="mdi-dots-vertical" color="#FFFFFF" v-bind="props"/>
            </template>
            <v-list :style="MenuListStyle()">
              <v-hover v-slot="{ isHovering, props }" v-for="course in courses" :key="course">
                <v-list-item-title v-bind="props" :style="ListTexts(isHovering)" @click="selectCourse(course)">{{ course }}</v-list-item-title>
              </v-hover>
            </v-list>
          </v-menu>
          <text :style="ShuttlebusGoSchoolToolbarText()">{{ selectedCourse || '코스를 선택하세요.' }}</text>
        </v-toolbar>
      </v-row>
    </text>
  </v-app>
</template>

<script>

import Appbar from "../Appbar.vue";
import KakaoMap from "../../KaKaoMap.vue";

export default {
  components: {Appbar, KakaoMap},
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
        marginTop: '110px',
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        width: '50vw',
        minWidth: '550px',
        height: '70px',
        marginTop: '70px',
        background: '#00000090'
      }
    },
    ShuttlebusGoSchoolDrawer(){
      return {
        background: '#FFFFFF'
      }
    },
    ShuttlebusGoSchoolDrawerClose(){
      return {
        position: 'absolute',
        right: '10px',
        margin: '10px'
      }
    },
    ShuttlebusGoSchoolToolbarText(){
      return {
        margin: 'auto',
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: '30px',
        fontWeight: '700'
      }
    },
    MenuListStyle() {
      return {
        width: '200px',
        height: '150px',
        background: '#7FB99A',
        color: '#FFFFFF',
        borderRadius: '10px',
        marginTop: '25px',
        boxShadow: '0px 0px 10px #00000050'
      };
    },
    ListTexts(isHovering) {
      return {
        transition: 'all .1s linear 0s',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
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
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>