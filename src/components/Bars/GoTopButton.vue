<template>
  <v-fab v-if="isMobile800" extended prepend-icon="mdi-chevron-up" text="맨 위로 가기" location="bottom center" base-color="#00837B" fixed app v-show="btnShow" @click="goTop()"/>
  <v-fab v-else extended prepend-icon="mdi-chevron-up" text="맨 위로 가기" location="bottom right" base-color="#00837B" fixed app v-show="btnShow" @click="goTop()"/>
</template>

<script>
export default {
  data() {
    return {
      btnShow: false,
      windowWidth: window.innerWidth
    }
  },
  methods:{
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
      })
    }
  },
  computed: {
    isMobile800() {
      return this.windowWidth < 800;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>