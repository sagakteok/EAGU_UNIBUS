<template>
  <v-app style="background-color: transparent">
    <Appbar/>
    <v-card :style="TransportationNewsCard">
      <v-img :style="TransportationNewsTitle" :src="TransportationNews"/>
      <v-card-text>
        <v-col>
          <v-text-field v-bind="TransportationNewsTextField" @click:append-inner="onClick"/>
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
      TransportationNews: new URL(`/src/assets/TransportationNews.png`, import.meta.url).href
    };
  },
  methods: {
    onClick() {
    }
  },
  computed: {
    TransportationNewsCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    TransportationNewsTitle() {
      return {
        width: '200px',
        top: '50px',
        margin: 'auto'
      };
    },
    TransportationNewsTextField() {
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