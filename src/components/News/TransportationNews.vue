<template>
  <div v-if="!isMobile">
    <DesktopHeader/>
  </div>
  <div v-else>
    <MobileHeader/>
    <Footer/>
  </div>
  <v-card :style="TransportationNewsCard">
    <v-img :style="TransportationNewsTitle" :src="TransportationNews"/>
    <v-card-text>
      <v-col>
        <v-text-field v-bind="TransportationNewsTextField" @click:append-inner="onClick"/>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import DesktopHeader from "../Bars/DesktopHeader.vue";
import MobileHeader from "../Bars/MobileHeader.vue";
import Footer from "../Bars/Footer.vue";
export default {
  components: {DesktopHeader, MobileHeader, Footer},
  data() {
    return {
      TransportationNews: new URL(`/src/assets/TransportationNews.png`, import.meta.url).href,
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
    TransportationNewsCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    TransportationNewsTitle() {
      return {
        width: '200px',
        top: '50px',
        margin: 'auto'
      };
    },
    TransportationNewsTextField() {
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
    isMobile() {
      return this.windowWidth < 800;
    },
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