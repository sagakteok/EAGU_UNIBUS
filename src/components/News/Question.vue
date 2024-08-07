<template>
  <div v-if="isMobile500">
    <MobileHeader500/>
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" :style="QuestionTitle()">자주 묻는 질문</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <text v-show="Transition1" :style="QuestionSubTitle()">UNIBUS 서비스에서 궁금했던 점을 해결해보세요.</text>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <Footer500/>
  </div>
  <div v-else-if="isMobile800">
    <MobileHeader800/>
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" :style="QuestionTitle()">자주 묻는 질문</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <text v-show="Transition1" :style="QuestionSubTitle()">UNIBUS 서비스에서 궁금했던 점을 해결해보세요.</text>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <Footer800/>
  </div>
  <div v-else>
    <DesktopHeader/>
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" :style="QuestionTitle()">자주 묻는 질문</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <text v-show="Transition1" :style="QuestionSubTitle()">UNIBUS 서비스에서 궁금했던 점을 해결해보세요.</text>
        </v-scroll-y-transition>
      </v-row>
    </div>
  </div>
  <GoTopButton/>
</template>

<script>
import DesktopHeader from "../Bars/DesktopHeader.vue";
import MobileHeader500 from "../Bars/MobileHeader500.vue";
import MobileHeader800 from "../Bars/MobileHeader800.vue";
import GoTopButton from "../Bars/GoTopButton.vue";
import Footer500 from "../Bars/Footer500.vue";
import Footer800 from "../Bars/Footer800.vue";

export default {
  components: {DesktopHeader, MobileHeader500, MobileHeader800, GoTopButton, Footer500, Footer800},
  data() {
    return {
      isMobile: false,
      Transition1: false,
      Transition2: false,
      Transition3: false,
      Transition4: false,
      Transition5: false,
      model: null,
      windowWidth: window.innerWidth
    };
  },
  methods: {
    QuestionTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '600',
        fontSize: '60px',
        color: '#006933',
        margin: 'auto',
        marginTop: '60px'
      };
    },
    QuestionSubTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '600',
        fontSize: '15px',
        margin: 'auto',
        marginTop: '0px'
      };
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    isMobile800() {
      return this.windowWidth < 800;
    },
    isMobile500() {
      return this.windowWidth < 500;
    }
  },
  mounted() {
    document.body.animate(
        [
          {opacity: 0},
          {opacity: 1},
        ],
        {
          duration: 200,
          easing: 'ease-in-out',
        }
    );
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
    setTimeout(() => {
      this.Transition2 = true;
    }, 400)
    setTimeout(() => {
      this.Transition3 = true;
    }, 500)
    setTimeout(() => {
      this.Transition4 = true;
    }, 530)
    setTimeout(() => {
      this.Transition5 = true;
    }, 560)
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>