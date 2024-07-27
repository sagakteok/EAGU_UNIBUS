<template>
  <v-bottom-navigation :style="BottomNavStyle()" elevation="0">
    <v-fab :style="FabStyle()" icon="mdi-home" location="right" base-color="#00837B" size="60" absolute appear @click="gotomain()"/>
  </v-bottom-navigation>
</template>

<script>
import router from "../../router.js";
export default{
  data(){
    return{
    }
  },
  methods:{
    gotomain() {
      router.push('/')
    },
    BottomNavStyle(){
      return{
        height: '100px',
        background: 'transparent'
      }
    },
    FabStyle(){
      return{
        marginRight: '20px',
        fontSize: '20px',
      }
    }
  }
}
</script>