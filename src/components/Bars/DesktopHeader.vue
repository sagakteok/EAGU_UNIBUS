<template>
  <v-app-bar :style="AppbarStyle()" elevation="0" scroll-threshold="0">
    <text>
      <v-img :style="DesktopClickUNIBUS()" @click="gotomain()" :src="UNIBUS"/>
    </text>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" @click="gotocity()" :style="HoverTexts(isHovering)">시내통학버스</text>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" @click="gotoshuttle()" :style="HoverTexts(isHovering)">셔틀버스</text>
    </v-hover>
    <v-menu open-on-hover v-model="menuOpen" transition="slide-y-transition">
      <template v-slot:activator="{ props: activatorProps }">
        <v-hover v-slot:default="{ isHovering, props: hoverProps }">
          <text v-bind="mergeProps(activatorProps, hoverProps)" :style="HoverTexts(isHovering || menuOpen)">소식</text>
        </v-hover>
      </template>
      <v-list :style="MenuListStyle()">
        <v-hover v-slot="{ isHovering, props }">
          <v-list-item-title v-bind="props" @click="gototransportationnews()" :style="ListTexts(isHovering)">공지사항</v-list-item-title>
        </v-hover>
        <div class="jb-division-line" :style="MenuLineStyle()"/>
        <v-hover v-slot="{ isHovering, props }">
          <v-list-item-title v-bind="props" @click="gotodevelopernews()" :style="ListTexts(isHovering)">개발 관련 소식</v-list-item-title>
        </v-hover>
        <div class="jb-division-line" :style="MenuLineStyle()"/>
        <v-hover v-slot="{ isHovering, props }">
          <v-list-item-title v-bind="props" @click="gotoquestion()" :style="ListTexts(isHovering)">자주 묻는 질문</v-list-item-title>
        </v-hover>
      </v-list>
    </v-menu>
    <v-hover v-slot="{ isHovering, props }">
      <text v-bind="props" @click="gotodju()" :style="HoverTexts(isHovering)">대전대학교</text>
    </v-hover>
  </v-app-bar>
</template>

<script>
import router from "../../router.js";
import { mergeProps } from "vue";

export default {
  data() {
    return {
      UNIBUS: new URL(`../../assets/BlackUNIBUS.png`, import.meta.url).href,
      group: null,
      menuOpen: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    mergeProps,
    gotomain() {
      router.push('/')
    },
    gotoshuttle() {
      router.push('/shuttle')
    },
    gotocity() {
      router.push('/city')
    },
    gotodevelopernews() {
      router.push('/DeveloperNews');
    },
    gotoquestion() {
      router.push('/Question');
    },
    gototransportationnews() {
      router.push('/TransportationNews');
    },
    gotodju() {
      window.location.href = 'https://www.dju.ac.kr/'
    },
    AppbarStyle() {
      return {
        background: '#FFFFFF',
      }
    },
    DesktopClickUNIBUS() {
      return {
        transition: 'all 0s ease-in-out',
        width: '120px',
        marginLeft: '20px',
        cursor: 'pointer'
      };
    },
    HoverTexts(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        color: isHovering ? '#1FD387' : '#000000',
        fontSize: isHovering ? '22px' : '20px',
        fontWeight: isHovering ? '700' : '500',
        outline: 'none',
        marginLeft: '20px',
        cursor: 'pointer'
      };
    },
    MenuListStyle() {
      return {
        transition: 'all 0s ease-in-out',
        width: '160px',
        height: '170px',
        backgroundColor: '#386156',
        color: '#FFFFFF',
        borderRadius: '10px',
        marginTop: '15px',
        boxShadow: '0px 0px 10px #00000050',
      };
    },
    ListTexts(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: '10px',
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center',
        cursor: 'pointer'
      };
    },
    MenuLineStyle() {
      return {
        transition: 'all 0s ease-in-out',
        borderTop: '1px solid #444444',
        width: '125px',
        margin: '10px auto',
        borderColor: '#FFFFFF90'
      };
    },
  }
};
</script>
