<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
    <v-row>
      <v-img :style="CitybusGoSchoolTitle()" :src="CitybusGoSchool"/>
    </v-row>
    <v-row>
      <v-toolbar :style="CitybusGoSchoolToolbar()">
        <text>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
        </text>
        <text>
          코스 표시할 예정
        </text>
      </v-toolbar>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined" elevation="10" style="background: #FFFFFF">
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">관저동 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">송강동 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">만년동 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">도룡동 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">테크노밸리 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">내동 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">자운대 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">도안 방면</v-list-item>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item v-bind="props" :style="ListTexts(isHovering)">오정동 방면</v-list-item>
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
      CitybusGoSchool: new URL(`/src/assets/CitybusGoSchool.png`, import.meta.url).href,
      drawer: false,
      group: null,
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
        bottom: '100px',
      };
    },
    CitybusGoSchoolToolbar() {
      return {
        width: '50vw',
        minWidth: '550px',
        height: '70px',
        bottom: '200px',
      };
    },
    ListTexts(isHovering) {
      return {
        transition: 'all .1s linear 0s',
        color: isHovering ? '#006933' : '#000000',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: '25px',
        marginLeft: '15px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'left',
        cursor: 'pointer'
      };
    },
  },
  mounted() {
    document.body.style.background = '#FFFFFF';
    document.body.style.backgroundSize = 'cover';
  },
};
</script>
