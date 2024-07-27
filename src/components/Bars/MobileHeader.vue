<template>
  <v-app-bar :style="AppbarStyle()" elevation="0">
    <v-app-bar-title>
      <text>
        <v-img :style="MobileUNIBUS()" :src="UNIBUS"/>
      </text>
    </v-app-bar-title>
    <v-hover v-slot="{ isHovering, props }">
      <v-app-bar-nav-icon v-model="drawer" :style="AppbarNavIconStyle(isHovering || drawer)" variant="text" v-bind="props" @click.stop="drawer = !drawer"/>
    </v-hover>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :style="DrawerStyle()" :location="'top'" temporary>
    <v-list v-model:opened="open">
      <v-hover v-slot="{ isHovering, props }">
        <v-list-item v-bind="props" :style="DrawerButtonStyle(isHovering)" @click="gotocity()" :ripple="false">시내통학버스</v-list-item>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-list-item v-bind="props" :style="DrawerButtonStyle(isHovering)" @click="gotoshuttle()">셔틀버스</v-list-item>
      </v-hover>
      <v-list-group>
        <template v-slot:activator="{props: activatorProps}">
          <v-hover v-slot:default="{isHovering, props: hoverProps}">
            <v-list-item v-bind="mergeProps(activatorProps, hoverProps)" :style="DrawerButtonStyle(isHovering)">소식</v-list-item>
          </v-hover>
        </template>
        <div :style="DrawerBottomMargin()"/>
        <v-list-item :style="ListGroupStyle()">
          <v-hover v-slot="{isHovering, props}">
            <v-list-item-title v-bind="props" :style="ListGroupText(isHovering)" @click="gototransportationnews()">공지사항</v-list-item-title>
          </v-hover>
          <v-hover v-slot="{isHovering, props}">
            <v-list-item-title v-bind="props" :style="ListGroupText(isHovering)" @click="gotodevelopernews()">개발 관련 소식</v-list-item-title>
          </v-hover>
          <v-hover v-slot="{isHovering, props}">
            <v-list-item-title v-bind="props" :style="ListGroupText(isHovering)" @click="gotoquestion()">자주 묻는 질문</v-list-item-title>
          </v-hover>
          <div :style="DrawerBottomMargin()"/>
        </v-list-item>
      </v-list-group>
      <v-hover v-slot="{ isHovering, props }">
        <v-list-item v-bind="props" :style="DrawerButtonStyle(isHovering)" @click="gotodju()">대전대학교</v-list-item>
      </v-hover>
    </v-list>
    <div :style="DrawerBottomMargin()"/>
  </v-navigation-drawer>
</template>

<script>
import router from "../../router.js";
import {mergeProps} from "vue";

export default {
  data() {
    return {
      UNIBUS: new URL(`../../assets/BlackUNIBUS.png`, import.meta.url).href,
      drawer: false,
      group: null,
      windowWidth: window.innerWidth,
      open: ['소식']
    };
  },
  methods: {
    mergeProps,
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
        borderBottom: '1px solid #00000030',
      }
    },
    AppbarNavIconStyle(isHovering) {
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        textShadow: isHovering ? '0px 0px 3px #1FD38780' : 'none',
        fontSize: '15px',
        color: isHovering ? '#1FD387' : '#000000',
        outline: 'none',
        cursor: 'pointer'
      };
    },
    MobileUNIBUS() {
      return {
        transition: 'all 0s ease-in-out',
        width: 'clamp(100px, 15vw, 120px)',
      };
    },
    DrawerStyle(){
      return{
        background: '#7FB99A',
      }
    },
    DrawerBottomMargin(){
      return{
        marginBottom: '25px',
      }
    },
    DrawerButtonStyle(isHovering){
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        color: isHovering ? '#00FF7C' : '#FFFFFF',
        marginTop: '15px',
        marginLeft: '25px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'left',
        cursor: 'pointer'
      };
    },
    ListGroupStyle(){
      return{
        backgroundColor: '#E5FFF1',
        boxShadow: 'inset 0px 2px 5px #00000020, inset 0px -2px 5px #00000020'
      }
    },
    ListGroupText(isHovering){
      return {
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontFamily: 'Inter-Bold, Helvetica',
        textShadow: isHovering ? '0px 0px 3px #1FD38780' : 'none',
        color: isHovering ? '#0CA054' : '#003319',
        marginTop: '25px',
        marginLeft: '15px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'left',
        cursor: 'pointer',
      };
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>
