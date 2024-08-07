<template>
  <v-fab icon="mdi-home" location="bottom end" base-color="success" size="50" fixed app appear @click="gotomain()"/>
</template>

<script>
import router from "../../router.js";
export default{
  data(){
    return{
    }
  },
  methods: {
    gotomain() {
      router.push('/')
    },
  }
}
</script>