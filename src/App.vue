<template>
  <v-card>
    <v-layout>
      <v-app-bar color="green" prominent>
        <v-toolbar-title>UNIBUS</v-toolbar-title>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn text="등교하기" variant="text"></v-btn>
          <v-btn text="하교하기" variant="text"></v-btn>
          <v-btn text="소식" variant="text"></v-btn>
          <v-btn text="대전대학교" variant="text"></v-btn>
          <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
  <MainHome/>
</template>

<script>
import MainHome from "./components/MainHome.vue";

export default {
  name: "App",
  components: {MainHome},
};
</script>