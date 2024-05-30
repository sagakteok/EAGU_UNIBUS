<template>
  <div class="traffic-news">
    <v-layout>
      <v-card :style="TransportationNewsCard">
        <v-img :style="TransportationNewsTitle" :src="TransportationNews"/>
        <v-card-text>
          <v-col>
            <v-text-field v-bind="TransportationNewsTextField" @click:append-inner="onClick"/>
          </v-col>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>


<style>
body {
  background-image: url('../../assets/MainHome.png');
  background-size: cover;
  width: auto;
  height: auto;
}
</style>

<script>
export default {
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
  }
}
</script>