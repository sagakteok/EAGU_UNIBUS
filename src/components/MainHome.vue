<template>
  <div>
    <v-dialog-transition>
      <v-img v-show="Transition1" :src="mainhome" cover width="100vw" height="100vh">
        <div>
          <v-scroll-y-reverse-transition>
            <v-img v-show="Transition2" :src="UNIBUS" :style="MainHomeTitle()"/>
          </v-scroll-y-reverse-transition>
          <v-row>
            <v-scroll-y-transition>
              <text v-show="Transition2" :style="MainHomeSubTitle()">대전대 버스 정보를 한 곳에서 확인해보세요.</text>
            </v-scroll-y-transition>
          </v-row>
        </div>
        <div :style="MainHomeCardsDivision()">
          <v-hover v-slot="{ isHovering, props }">
            <v-scroll-y-reverse-transition>
              <v-card v-show="Transition3" v-bind="props" :style="MainHomeCards(isHovering)" class="ma-5" :elevation="isHovering ? 10 : 2" @click="gotocity()" :ripple="false">
                <v-icon icon="mdi-bus-stop" :style="MainHomeCardsIcon(isHovering)"/>
                <text :style="MainHomeCardsText(isHovering)">시내통학버스</text>
              </v-card>
            </v-scroll-y-reverse-transition>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-scroll-y-reverse-transition>
              <v-card v-show="Transition4" v-bind="props" :style="MainHomeCards(isHovering)" class="ma-5" :elevation="isHovering ? 10 : 2" @click="gotoshuttle()" :ripple="false">
                <v-icon icon="mdi-bus-marker" :style="MainHomeCardsIcon(isHovering)"/>
                <text :style="MainHomeCardsText(isHovering)">셔틀버스</text>
              </v-card>
            </v-scroll-y-reverse-transition>
          </v-hover>
        </div>
      </v-img>
    </v-dialog-transition>
  </div>
</template>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      Transition1: false,
      Transition2: false,
      Transition3: false,
      Transition4: false,
      UNIBUS: new URL('/src/assets/UNIBUS.png', import.meta.url).href,
      shuttlebus: new URL('/src/assets/shuttlebus.png', import.meta.url).href,
      citybus: new URL('/src/assets/Citybus.png', import.meta.url).href,
      mainhome: new URL('/src/assets/MainHome.png', import.meta.url).href
    };
  },
  methods: {
    gotoshuttle() {
      router.push('/shuttle');
    },
    gotocity() {
      router.push('/city');
    },
    MainHomeTitle() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(300px, 70vw, 70vh)',
        margin: 'auto',
        marginTop: '20vh',
      };
    },
    MainHomeSubTitle() {
      return {
        transition: 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: '600',
        fontSize: 'clamp(15px, 3.5vw, 3.5vh)',
        color: '#FFFFFF',
        margin: 'auto',
        marginTop: '30px'
      };
    },
    MainHomeCardsDivision(){
      return {
        width: '100vw',
        maxWidth: '1600px',
        margin: 'auto',
        marginTop: '14vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    },
    MainHomeCards(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        backgroundColor: isHovering ? '#00FF7C' : '#FFFFFF',
        border: '4px solid #006933',
        borderRadius: '50px',
        height: '240px',
        width: '240px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    },
    MainHomeCardsIcon(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontSize: '120px',
        filter: isHovering ? 'blur(7px)' : 'none',
        color: isHovering ? '#FFFFFF' : '#006933'
      };
    },
    MainHomeCardsText(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        position: 'absolute',
        fontFamily: 'Inter-Bold, Helvetica',
        fontWeight: 700,
        fontSize: '35px',
        color: isHovering ? '#006933' : '#FFFFFF00',
      };
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
    }, 200)
    setTimeout(() => {
      this.Transition3 = true;
    }, 500)
    setTimeout(() => {
      this.Transition4 = true;
    }, 530)
  }
};
</script>