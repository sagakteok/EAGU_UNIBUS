<template>
  <div v-if="isMobile800">
    <v-scroll-y-reverse-transition>
      <v-fab extended prepend-icon="mdi-chevron-up" text="맨 위로 가기" location="bottom center" base-color="#00837B" fixed app v-show="FabOption" @click="goTop()"/>
    </v-scroll-y-reverse-transition>
  </div>
  <div v-else>
    <v-scroll-y-reverse-transition>
      <v-fab extended prepend-icon="mdi-chevron-up" text="맨 위로 가기" location="bottom right" base-color="#00837B" fixed app v-show="FabOption" @click="goTop()"/>
    </v-scroll-y-reverse-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Transition1: false,
      btnShow: false,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    handleScroll() {
      this.btnShow = window.scrollY > 0;
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  },
  computed: {
    isMobile800() {
      return this.windowWidth < 800;
    },
    FabOption() {
      return this.Transition1 && this.btnShow;
    }
  },
  mounted() {
    setTimeout(() => {
      this.Transition1 = true;
    }, 0);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
