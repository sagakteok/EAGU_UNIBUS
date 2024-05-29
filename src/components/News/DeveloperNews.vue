<template>
  <v-layout>
    <v-card :style="DeveloperNewsCard">
      <v-img :style="DeveloperNewsTitle" :src="DeveloperNews"/>
      <v-card-text>
        <v-col>
          <v-text-field v-bind="DeveloperNewsTextField" @click:append-inner="onClick"/>
        </v-col>
      </v-card-text>
    </v-card>
  </v-layout>
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
        borderRadius: '60px',
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
  }
}
</script>