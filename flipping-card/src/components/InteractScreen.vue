<template>
    <div>
        <p>Hello from Game Screen</p>
        <pokemon-card v-for="(card,index) in cardsContext" 
        :key="index" 
        :imgUrl="`images/${card}.png`"
        :cardVal="{index, value: card}"
        @onFlip="checkRule($event)"
        :ref="`card-${index}`"></pokemon-card>
    </div>
</template>

<script>
import PokemonCard from './Card.vue'

export default{
    name:'InteractScreen',
    components:{
        PokemonCard,
    },
    props:{
        cardsContext:{
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    data(){
        return{
            rules:[]
        }
    },
    methods:{
        checkRule(card){
            if(this.rules.length === 2) return false

            this.rules.push(card);

            if (this.rules.length === 2 && this.rules[0].value === this.rules[1].value) {
                console.log('Correct')
            } else if (this.rules.length === 2 && this.rules[0].value !== this.rules[1].value){
                console.log('Wrong')
                //Close the cards

                //Reset rules
                //this.rules = [];
            } else {
                return false
            }

            console.log(this.rules)
        }
    }
}
</script>