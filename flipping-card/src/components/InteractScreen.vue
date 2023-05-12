<template>
    <div>
        <p>Hello from Game Screen</p>
        <pokemon-card v-for="(card,index) in cardsContext" 
        :key="index" 
        :ref="`card-${index}`"
        :imgUrl="`images/${card}.png`"
        :cardVal="{index: index, value: card}"
        @onFlip="checkRule($event)"
        />
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
                setTimeout(()=>{
                    this.$refs[`card-${this.rules[0].index}`][0].onFlipCardBack()
                    this.$refs[`card-${this.rules[1].index}`][0].onFlipCardBack()

                    //Reset rules
                    this.rules = [];
                },800)
                
            } else {
                return false
            }
        }
    }
}
</script>