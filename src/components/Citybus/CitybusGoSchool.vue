<template>
  <v-main>
    <Appbar/>
    <v-img :style="CitybusGoSchoolBannerStyle()" :src="CitybusGoSchoolBanner" cover>
      <text :style="CitybusGoSchoolTitle()">시내통학 버스로 등교하기</text>
    </v-img>
    <v-toolbar :style="CitybusGoSchoolToolbar()">
      <v-menu :location="'bottom center'" transition="slide-y-transition">
        <template v-slot:activator="{props: activatorProps}">
          <v-hover v-slot:default="{isHovering, props: hoverProps}">
            <text :style="CitybusGoSchoolToolbarText(isHovering)" v-bind="mergeProps(activatorProps, hoverProps)">{{ selectedCourse || '코스를 선택하세요.' }}</text>
          </v-hover>
        </template>
        <v-list :style="MenuListStyle()">
          <v-hover v-slot="{ isHovering, props }" v-for="course in courses" :key="course">
            <v-list-item-title v-bind="props" :style="ListTexts(isHovering)" @click="selectCourse(course)">{{ course }}</v-list-item-title>
          </v-hover>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-main>
</template>

<script>
import Appbar from "../Appbar.vue";
import KakaoMap from "../../KaKaoMap.vue";
import {mergeProps} from "vue";

export default {
  components: { Appbar, KakaoMap },
  data() {
    return {
      CitybusGoSchoolBanner: new URL('/src/assets/CitybusGoSchoolBanner.png', import.meta.url).href,
      drawer: false,
      selectedCourse: null,
      courses: [
        '관저동 방면',
        '송강동 방면',
        '만년동 방면',
        '도룡동 방면',
        '테크노밸리 방면',
        '내동 방면',
        '자운대 방면',
        '도안 방면',
        '오정동 방면'
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
    CitybusGoSchoolBannerStyle(){
      return{
        transition: 'all 0s ease-in-out',
        width: '100vw',
        height: 'clamp(150px, 15vw, 270px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        textShadow: '0px 0px 3px #00000090'
      }
    },
    CitybusGoSchoolTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '700',
        fontSize: 'clamp(40px, 4vw, 60px)',
        color: '#FFFFFF'
      };
    },
    CitybusGoSchoolToolbar(){
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(500px, 60vw, 1280px)',
        height: 'clamp(32px, 3.2vw, 48px)',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#00837B',
      }
    },
    CitybusGoSchoolToolbarText(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        margin: 'auto',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: 'clamp(16px, 1.6vw, 24px)',
        fontWeight: isHovering ? '700' : '600',
        cursor: 'pointer'
      }
    },
    MenuListStyle() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(150px, 13vw, 200px)',
        height: 'clamp(180px, 35vh, 530px)',
        background: '#7FB99A',
        color: '#FFFFFF',
        borderRadius: '10px',
        marginTop: '20px',
        boxShadow: '0px 0px 10px #00000050'
      };
    },
    ListTexts(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: 'clamp(19.5px, 1.5vw, 22.5px)',
        fontSize: 'clamp(15px, 1.3vw, 20px)',
        fontWeight: '700',
        textAlign: 'center',
        cursor: 'pointer'
      };
    },
    selectCourse(course) {
      this.selectedCourse = course;
    }
  },
  mounted() {
    document.body.style.background = '#FFFFFF';
    document.body.style.backgroundSize = 'cover';
  },
};
</script>
