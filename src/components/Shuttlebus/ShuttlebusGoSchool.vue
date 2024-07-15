<template>
  <v-app style="background-color: transparent">
    <Appbar/>
    <text>
      <v-row>
        <v-img :style="ShuttlebusGoSchoolTitle()" :src="ShuttlebusGoSchool"/>
      </v-row>
      <v-row>
        <v-toolbar :style="ShuttlebusGoSchoolToolbar()">
          <v-menu :location="'bottom center'" transition="slide-y-transition">
            <template v-slot:activator="{props: activatorProps}">
              <v-hover v-slot:default="{isHovering, props: hoverProps}">
                <text :style="ShuttlebusGoSchoolToolbarText(isHovering)" v-bind="mergeProps(activatorProps, hoverProps)">{{ selectedCourse || '코스를 선택하세요.' }}</text>
              </v-hover>
            </template>
            <v-list :style="MenuListStyle()">
              <v-hover v-slot="{ isHovering, props }" v-for="course in courses" :key="course">
                <v-list-item-title v-bind="props" :style="ListTexts(isHovering)" @click="selectCourse(course)">{{ course }}</v-list-item-title>
              </v-hover>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-row>
    </text>
  </v-app>
</template>

<script>

import Appbar from "../Appbar.vue";
import KakaoMap from "../../KaKaoMap.vue";
import {mergeProps} from "vue";

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
    mergeProps,
    ShuttlebusGoSchoolTitle() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(300px, 60vw, 600px)',
        marginTop: '110px',
      };
    },
    ShuttlebusGoSchoolToolbar(){
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(300px, 60vw, 600px)',
        height: '60px',
        marginTop: '70px',
        background: '#00000090'
      }
    },
    ShuttlebusGoSchoolToolbarText(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        margin: 'auto',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: 'clamp(15px, 3vw, 20px)',
        fontWeight: isHovering ? '800' : '600',
        cursor: 'pointer'
      }
    },
    MenuListStyle() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(150px, 13vw, 200px)',
        height: 'clamp(135px, 18.5vh, 150px)',
        background: '#7FB99A',
        color: '#FFFFFF',
        borderRadius: '10px',
        marginTop: '25px',
        boxShadow: '0px 0px 10px #00000050'
      };
    },
    ListTexts(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: 'clamp(20px, 2vh, 25px)', // Example using vh units for margin
        fontSize: 'clamp(16px, 1.3vw, 20px)', // Example using vw units for font size,
        fontWeight: '700',
        textAlign: 'center',
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