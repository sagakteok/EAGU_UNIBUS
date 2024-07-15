<template>
  <v-app style="background-color: transparent">
    <Appbar/>
    <text>
      <v-row>
        <v-img :style="CitybusGoSchoolTitle()" :src="CitybusGoSchool"/>
      </v-row>
      <v-row>
        <v-toolbar :style="CitybusGoSchoolToolbar()">
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
          <text :style="CitybusGoSchoolToolbarText()">{{ selectedCourse || '코스를 선택하세요.' }}</text>
        </v-toolbar>
      </v-row>
    </text>
  </v-app>
</template>

<script>
import Appbar from "../Appbar.vue";
import KakaoMap from "../../KaKaoMap.vue";

export default {
  components: { Appbar, KakaoMap },
  data() {
    return {
      CitybusGoSchool: new URL(`/src/assets/CitybusGoSchool.png`, import.meta.url).href,
      drawer: false,
      menuVisible: false,
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
    CitybusGoSchoolTitle() {
      return {
        width: '30vw',
        minWidth: '550px',
        marginTop: '110px',
      };
    },
    CitybusGoSchoolToolbar() {
      return {
        width: '50vw',
        minWidth: '550px',
        height: '70px',
        marginTop: '70px',
        background: '#00000090'
      };
    },
    CitybusGoSchoolDrawer(){
      return {
        background: '#FFFFFF'
      }
    },
    CitybusGoSchoolDrawerClose(){
      return {
        position: 'absolute',
        right: '10px',
        margin: '10px'
      }
    },
    CitybusGoSchoolToolbarText(){
      return{
        margin: 'auto',
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: '30px',
        fontWeight: '700'
      }
    },
    MenuListStyle() {
      return {
        width: '180px',
        height: '540px',
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
  mounted() {
    document.body.style.background = '#FFFFFF';
    document.body.style.backgroundSize = 'cover';
  },
};
</script>
