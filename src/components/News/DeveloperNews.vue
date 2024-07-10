<template>
  <v-app style="background-color: transparent">
    <Appbar/>
    <v-card :style="DeveloperNewsCard">
      <v-img :style="DeveloperNewsTitle" :src="DeveloperNews"/>
      <v-card-text>
        <v-col>
          <v-text-field v-bind="DeveloperNewsTextField" @click:append-inner="onClick"/>
        </v-col>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import Appbar from "../Appbar.vue";
export default {
  components: {Appbar},
  data() {
    return {
      DeveloperNews: new URL(`/src/assets/DeveloperNews.png`, import.meta.url).href
    };
  },
  methods: {
    onClick() {
    },
  },
  computed: {
    DeveloperNewsCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    DeveloperNewsTitle() {
      return {
        width: '250px',
        top: '50px',
        margin: 'auto'
      };
    },
    DeveloperNewsTextField() {
      return {
        style: {
          width: '200px',
          marginLeft: 'auto'
        },
        loading: this.loading,
        appendInnerIcon: 'mdi-magnify',
        density: 'compact',
        variant: 'solo',
        hideDetails: true,
        singleLine: true
      };
    }
  },
  mounted(){
    document.body.style.background = '#FFFFFF'
    document.body.style.backgroundSize = 'cover'
  }
}
</script>