<template>
  <div>
    <v-img :src="mainhome" cover width="100vw" height="100vh">
      <v-row style="margin: 0">
        <v-hover v-slot="{ isHovering, props }">
          <v-scroll-y-reverse-transition>
            <v-card v-show="scrollY1" v-bind="props" :style="MainHomeCards(isHovering)" @click="gotocity()" :ripple="false">
              <v-icon icon="mdi-bus-stop" :style="MainHomeCardsIcon(isHovering)"/>
              <text :style="MainHomeCardsText(isHovering)">시내통학버스</text>
            </v-card>
          </v-scroll-y-reverse-transition>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-scroll-y-reverse-transition>
            <v-card v-show="scrollY2" v-bind="props" :style="MainHomeCards(isHovering)" @click="gotoshuttle()" :ripple="false">
              <v-icon icon="mdi-bus-marker" :style="MainHomeCardsIcon(isHovering)"/>
              <text :style="MainHomeCardsText(isHovering)">셔틀버스</text>
            </v-card>
          </v-scroll-y-reverse-transition>
        </v-hover>
      </v-row>
    </v-img>
  </div>

</template>

<script>
import router from "../router.js";

export default {
  data() {
    return {
      scrollY1: false,
      scrollY2: false,
      slogan: new URL('/src/assets/slogan.png', import.meta.url).href,
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
    SloganStyle() {
      return {
        marginTop: 'clamp(50px, 5vw, 10vh)'
      };
    },
    MainHomeCards(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        backgroundColor: isHovering ? '#00FF7C' : '#FFFFFF',
        border: 'solid calc(clamp(2.5px, 0.5vw, 4px))',
        borderColor: '#006933',
        borderRadius: 'clamp(24px, 7.2vw, 60px)',
        boxShadow: isHovering ? '0px 0px 30px #000000' : '0px 0px 30px #00000050',
        height: 'clamp(180px, 30vw, 270px)',
        width: 'clamp(180px, 30vw, 270px)',
        margin: 'auto',
        marginTop: 'clamp(50px, 10vh, 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    },
    MainHomeCardsIcon(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        position: 'absolute',
        fontSize: 'clamp(96px, 16vw, 144px)',
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
        fontSize: 'clamp(26.7px, 4.4vw, 40px)',
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
          duration: 400,
          easing: 'ease-in-out',
        }
    );
    setTimeout(() => {
      this.scrollY1 = true;
      this.scrollY2 = true;
    }, 100)
  }
};
</script>