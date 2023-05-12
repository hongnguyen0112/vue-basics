<template>
  <main-screen v-if="gameScreen==='default'" @onStart="handleGameModeSelect($event)"></main-screen>
  <interact-screen v-if="gameScreen==='match'"></interact-screen>
  <!-- <result-screen></result-screen> -->
  <coppy-right></coppy-right>
</template>

<script>
import FooterVue from './components/Footer.vue';
import MainScreen from './components/MainScreen.vue';
import InteractScreen from './components/InteractScreen.vue';
//import ResultScreen from './components/ResultScreen.vue';

export default {
  name: 'App',
  components: {
    MainScreen,
    CoppyRight: FooterVue,
    InteractScreen,
    // ResultScreen
  },
  data(){
    return{
      gameScreen: "default",
    }
  },
  methods: {
    handleGameModeSelect(mode){
      console.log(mode)
      this.gameScreen = "match"
    }
  }
}
</script>


<style>

</style>