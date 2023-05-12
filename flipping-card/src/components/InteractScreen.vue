<template>
    <div>
        <p>Hello from Game Screen</p>
        <pokemon-card></pokemon-card>
    </div>
</template>

<script>
import PokemonCard from './Card.vue'

export default{
    name:'InteractScreen',
    components:{
        PokemonCard,
    }
}
</script>