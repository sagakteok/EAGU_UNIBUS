<template>
  <div v-if="isMobile500">
    <MobileHeader500/>
  </div>
  <div v-else-if="isMobile800">
    <MobileHeader800/>
  </div>
  <div v-else>
    <DesktopHeader/>
  </div>
  <v-card :style="QuestionCard">
    <v-img :style="QuestionTitle" :src="Question"/>
    <v-card-text>
      <v-col>
        <v-text-field v-bind="QuestionTextField" @click:append-inner="onClick"/>
      </v-col>
    </v-card-text>
  </v-card>
  <GoTopButton/>
</template>

<script>
import DesktopHeader from "../Bars/DesktopHeader.vue";
import MobileHeader500 from "../Bars/MobileHeader500.vue";
import MobileHeader800 from "../Bars/MobileHeader800.vue";
import GoTopButton from "../Bars/GoTopButton.vue";

export default {
  components: {DesktopHeader, MobileHeader500, MobileHeader800, GoTopButton},
  data() {
    return {
      Question: new URL(`/src/assets/Question.png`, import.meta.url).href,
      isMobile: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onClick() {},
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    QuestionCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    QuestionTitle() {
      return {
        width: '200px',
        top: '50px',
        margin: 'auto'
      };
    },
    QuestionTextField() {
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
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>