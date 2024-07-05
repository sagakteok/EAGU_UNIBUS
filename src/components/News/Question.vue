<template>
  <v-app style="background-color: transparent">
    <PageAppbar/>
    <v-card :style="QuestionCard">
      <v-img :style="QuestionTitle" :src="Question"/>
      <v-card-text>
        <v-col>
          <v-text-field v-bind="QuestionTextField" @click:append-inner="onClick"/>
        </v-col>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import PageAppbar from "../Appbars/PageAppbar.vue";
export default {
  components: {PageAppbar},
  data() {
    return {
      Question: new URL(`/src/assets/Question.png`, import.meta.url).href
    };
  },
  methods:{
    onClick(){
    }
  },
  computed: {
    QuestionCard() {
      return {
        top: '20px',
        width: '1000px',
        height: '600px',
        margin: 'auto',
        borderRadius: '40px',
        boxShadow: '0px 0px 30px #00000060'
      };
    },
    QuestionTitle() {
      return {
        width: '250px',
        top: '50px',
        margin: 'auto'
      };
    },
    QuestionTextField() {
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