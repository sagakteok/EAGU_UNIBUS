<template>
  <div v-if="isMobile500">
    <MobileHeader500/>
    <Footer500/>
  </div>
  <div v-else-if="isMobile800">
    <MobileHeader800/>
    <Footer800/>
  </div>
  <div v-else>
    <DesktopHeader/>
  </div>
  <v-card :style="DeveloperNewsCard">
    <v-img :style="DeveloperNewsTitle" :src="DeveloperNews"/>
    <v-card-text>
      <v-col>
        <v-text-field v-bind="DeveloperNewsTextField" @click:append-inner="onClick"/>
      </v-col>
    </v-card-text>
  </v-card>
  <GoTopButton/>
</template>

<script>
import DesktopHeader from "../Bars/DesktopHeader.vue";
import MobileHeader500 from "../Bars/MobileHeader500.vue";
import MobileHeader800 from "../Bars/MobileHeader800.vue";
import Footer500 from "../Bars/Footer500.vue";
import Footer800 from "../Bars/Footer800.vue";
import GoTopButton from "../Bars/GoTopButton.vue";

export default {
  components: {DesktopHeader, MobileHeader500, MobileHeader800, Footer500, Footer800 ,GoTopButton},
  data() {
    return {
      DeveloperNews: new URL(`/src/assets/DeveloperNews.png`, import.meta.url).href,
      isMobile: false,
      windowWidth: window.innerWidth
    };
  },
  methods: {
    onClick() {},
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    DeveloperNewsCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    DeveloperNewsTitle() {
      return {
        width: '200px',
        top: '50px',
        margin: 'auto'
      };
    },
    DeveloperNewsTextField() {
      return {
        style: {
          width: '200px',
          marginLeft: 'auto'
        },
        loading: this.loading,
        appendInnerIcon: 'mdi-magnify',
        density: 'compact',
        variant: 'solo',
        hideDetails: true,
        singleLine: true
      };
    },
    isMobile800() {
      return this.windowWidth < 800;
    },
    isMobile500(){
      return this.windowWidth < 500;
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<script setup>
</script>