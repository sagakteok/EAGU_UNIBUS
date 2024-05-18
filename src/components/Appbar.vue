<script setup>

</script>

<template>
      <v-layout>
        <v-app-bar class="app-bar" elevation="0" prominent>
          <v-app-bar-title>
            <v-btn text="UNIBUS" variant="text"></v-btn>
          </v-app-bar-title>
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn text="셔틀버스" variant="text"></v-btn>
            <v-btn text="시내버스" variant="text"></v-btn>
            <v-btn text="소식" variant="text"></v-btn>
            <v-btn text="대전대학교" variant="text"></v-btn>
            <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
          </template>
        </v-app-bar>
      </v-layout>
</template>

<style scoped>

.app-bar{
  font-family: "Malgun Gothic";
  font-weight: 900;
  color: #006933;
  background-color: #00FF7C;
}

</style>