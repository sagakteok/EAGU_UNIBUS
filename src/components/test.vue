<template>
  <v-app-bar>
    <v-btn text @click="drawer = !drawer"> btn</v-btn>
    <v-toolbar-title>Test Application</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" color="black" app>
    탭 안에 있을 UI
  </v-navigation-drawer>

  <v-main style="max-height: 300px" fluid>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>오늘의 단어</div>
        <p class="display-1 text--primary">responsive web design</p>
        <div class="text--primary">
          화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말한다.
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4"> Learn More</v-btn>
      </v-card-actions>
    </v-card>
  </v-main>


</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
}
</script>