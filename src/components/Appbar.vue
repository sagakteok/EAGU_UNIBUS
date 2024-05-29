<template>
  <v-layout>
    <v-app-bar color="transparent" elevation="0" prominent>
      <text @click="gotomain()">
        <v-img :style="ClickUNIBUS()" :src="UNIBUS"/>
      </text>
      <v-hover v-slot="{ isHovering, props }">
        <text v-bind="props" @click="gotoshuttle()" :style="HoverTexts(isHovering)">셔틀버스</text>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <text v-bind="props" @click="gotocity()" :style="HoverTexts(isHovering)">시내버스</text>
      </v-hover>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props: activatorProps }">
          <v-hover v-slot:default="{ isHovering, props: hoverProps }">
            <text v-bind="mergeProps(activatorProps, hoverProps)" :style="HoverTexts(isHovering)">소식</text>
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
  </v-layout>
</template>

<script>
import router from "../router.js";
import { mergeProps } from "vue";
export default {
  data() {
    return {
      UNIBUS: new URL(`../assets/UNIBUS.png`, import.meta.url).href
    };
  },
  methods: {
    mergeProps,
    gotomain() {
      router.push('/')
    },
    gotoshuttle(){
      router.push('/shuttle')
    },
    gotocity(){
      router.push('/city')
    },
    gotodevelopernews(){
      router.push('/DeveloperNews');
    },
    gotoquestion(){
      router.push('/Question');
    },
    gototransportationnews(){
      router.push('/TransportationNews');
    },
    gotodju(){
      window.location.href='https://www.dju.ac.kr/'
    },
    ClickUNIBUS(){
      return{
        width: '120px',
        marginLeft: '20px',
        cursor: 'pointer'
      };
    },
    HoverTexts(isHovering) {
      return {
        transition: 'all .07s linear 0s',
        fontFamily: 'Inter-Bold, Helvetica',
        textDecoration: isHovering ? 'underline' : 'none',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontSize: isHovering ? '22px' : '20px',
        fontWeight: 700,
        outline: 'none',
        marginLeft: '30px',
        cursor: 'pointer'
      };
    },
    MenuListStyle(){
      return{
        width: '160px',
        height: '170px',
        backgroundColor: '#00331990',
        color: '#FFFFFF',
        borderRadius: '10px',
        top: '15px',
        left: '-57px',
        elevation: '30'
      };
    },
    ListTexts(isHovering) {
      return {
        transition: 'all .1s linear 0s',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        fontFamily: 'Inter-Bold, Helvetica',
        marginTop: '10px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
        cursor: 'pointer'
      };
    },
    MenuLineStyle(){
      return{
        borderTop: '1px solid #444444',
        width: '125px',
        margin: '10px auto',
        borderColor: '#FFFFFF90'
      };
    }
  }
};
</script>
