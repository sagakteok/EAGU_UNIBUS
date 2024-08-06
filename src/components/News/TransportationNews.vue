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
  <div>
    <v-row>
      <v-scroll-y-reverse-transition>
        <text v-show="Transition1" :style="TransportationNewsTitle()">공지사항</text>
      </v-scroll-y-reverse-transition>
    </v-row>
    <v-row>
      <v-scroll-y-transition>
        <text v-show="Transition1" :style="TransportationNewsSubTitle()">교통 관련 변경 사항, 중요 공지들을 확인해보세요.</text>
      </v-scroll-y-transition>
    </v-row>
  </div>
  <div :style="NewNoticeDivision()">
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition2" :style="NewNoticeTitle()">새로운 소식</text>
        </v-scroll-y-reverse-transition>
      </v-row>
    </div>
    <v-dialog-transition>
      <div :style="SlideGroupStyle()" v-show="Transition2">
        <v-hover v-slot="{isHovering, props}">
          <v-scroll-y-reverse-transition>
            <v-card v-show="Transition3" v-bind="props" :style="NewsCardStyle(isHovering)" :elevation="isHovering ? 5 : 0" class="ma-3" @click="" :ripple="false">
              <v-card-text>1</v-card-text>
            </v-card>
          </v-scroll-y-reverse-transition>
        </v-hover>
        <v-hover v-slot="{isHovering, props}">
          <v-scroll-y-reverse-transition>
            <v-card v-show="Transition4" v-bind="props" :style="NewsCardStyle(isHovering)" :elevation="isHovering ? 5 : 0" class="ma-3" @click="" :ripple="false">
              <v-card-text>2</v-card-text>
            </v-card>
          </v-scroll-y-reverse-transition>
        </v-hover>
        <v-hover v-slot="{isHovering, props}">
          <v-scroll-y-reverse-transition>
            <v-card v-show="Transition5" v-bind="props" :style="NewsCardStyle(isHovering)" :elevation="isHovering ? 5 : 0" class="ma-3" @click="" :ripple="false">
              <v-card-text>3</v-card-text>
            </v-card>
          </v-scroll-y-reverse-transition>
        </v-hover>
      </div>
    </v-dialog-transition>
  </div>
  <div :style="NewsListDivision()">
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition2" :style="NewNoticeTitle()">게시물 목록</text>
        </v-scroll-y-reverse-transition>
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

export default {
  components: {DesktopHeader, MobileHeader500, MobileHeader800, GoTopButton},
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
    TransportationNewsTitle() {
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
    TransportationNewsSubTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '600',
        fontSize: '15px',
        margin: 'auto',
        marginTop: '0px'
      };
    },
    NewNoticeDivision(){
      return {
        width: '100vw',
        maxWidth: '1600px',
        margin: 'auto',
        marginTop: '60px',
      }
    },
    NewNoticeTitle(){
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '500',
        fontSize: '30px',
        color: '#006933',
        marginLeft: '40px'
      }
    },
    SlideGroupStyle(){
      return {
        width: '100vw',
        maxWidth: '1600px',
        background: '#B0E0D1',
        borderRadius: '40px',
        marginTop: '30px',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    NewsCardStyle(isHovering){
      return {
        transition: 'all .1s linear 0s',
        width: isHovering ? '378px' : '360px',
        height: isHovering ? '315px' : '300px',
        background: '#FFFFFF',
        border: '2px solid #39B997',
        borderRadius: '50px',
      }
    },
     NewsListDivision() {
        return {
          width: '100vw',
          maxWidth: '1600px',
          margin: 'auto',
          marginTop: '150px'
        }
     },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    isMobile800() {
      return this.windowWidth < 800;
    },
    isMobile500(){
      return this.windowWidth < 500;
    }
  },
  mounted(){
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
    setTimeout(()=>{
      this.Transition2 = true;
    }, 400)
    setTimeout(()=>{
      this.Transition3 = true;
    }, 500)
    setTimeout(()=>{
      this.Transition4 = true;
    }, 530)
    setTimeout(()=>{
      this.Transition5 = true;
    }, 560)
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>