<template>
  <v-app style="background-color: transparent">
    <MainAppBar/>
    <v-row>
      <v-img :style="SloganStyle()" :src="slogan"/>
    </v-row>
    <v-row>
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" :style="MainHomeCards(isHovering, 'right')" @click="gotocity()">
          <v-img :style="MainHomeLeftCardImage()" :src="citybus"/>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" :style="MainHomeCards(isHovering, 'left')" @click="gotoshuttle()">
          <v-img :style="MainHomeRightCardImage()" :src="shuttlebus"/>
        </v-card>
      </v-hover>
    </v-row>
  </v-app>
</template>

<script>
import router from "../router.js";
import MainAppBar from "../components/Appbars/MainAppbar.vue";

export default {
  components: {MainAppBar},
  data() {
    return {
      slogan: new URL('/src/assets/slogan.png', import.meta.url).href,
      shuttlebus: new URL('/src/assets/shuttlebus.png', import.meta.url).href,
      citybus: new URL('/src/assets/Citybus.png', import.meta.url).href,
    };
  },
  methods: {
    gotoshuttle() {
      router.push('/shuttle');
    },
    gotocity() {
      router.push('/city');
    },
    SloganStyle() {
      return {
        width: '300px',
        top: '20px'
      };
    },
    MainHomeCards(isHovering, position) {
      return {
        backgroundColor: isHovering ? '#00FF7C' : '#FFFFFF',
        border: '4px solid',
        borderColor: '#006933',
        borderRadius: '60px',
        boxShadow: isHovering ? '0px 0px 30px #000000' : '0px 0px 30px #00000050',
        height: '250px',
        width: '250px',
        [position]: '15px',
        top: '20px'
      };
    },
    MainHomeLeftCardImage() {
      return {
        top: '50px',
        width: '150px',
        margin: 'auto'
      };
    },
    MainHomeRightCardImage() {
      return {
        top: '60px',
        width: '170px',
        margin: 'auto'
      };
    }
  },
  mounted(){
    document.body.style.backgroundImage = "url(src/assets/MainHome.png)"
    document.body.style.backgroundSize = 'cover'
  }
};
</script>
