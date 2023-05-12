<template>
  <main-screen v-if="gameScreen==='default'" @onStart="handleGameModeSelect($event)"></main-screen>
  <interact-screen v-if="gameScreen==='match'" :cardsContext="settings.cardsContext"></interact-screen>
  <!-- <result-screen></result-screen> -->
  <teleport to='body'>
    <coppy-right></coppy-right>
  </teleport>
</template>

<script>
import FooterVue from './components/Footer.vue';
import MainScreen from './components/MainScreen.vue';
import InteractScreen from './components/InteractScreen.vue';
//import ResultScreen from './components/ResultScreen.vue';

import {shuffle} from './utils/cards'

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
      settings:{
        totalBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      gameScreen: "default",
    }
  },
  methods: {
    handleGameModeSelect(mode){
      console.log(mode)
      //data read
      this.settings.totalBlocks= mode.totalBlocks;
      const initCards = Array.from({length: this.settings.totalBlocks/2},(_,i)=>i+1)
      const secondCardsArr = [...initCards];
      const cards = [...initCards, ...secondCardsArr];
      //random the position of cards
      this.settings.cardsContext = shuffle(shuffle(cards))
      
      //count time
      this.settings.startedAt = new Date().getTime();

      //start game
      this.gameScreen = "match";
    }
  }
}
</script>


<style>
body{
  margin: 50px;
}
</style>