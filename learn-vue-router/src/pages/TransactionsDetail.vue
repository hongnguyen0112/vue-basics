<template>
    <div>
        <h1>Transaction Details</h1>
        <h1>ID: {{ $route.params.id }}</h1>
        <div class="transaction" v-if="transaction">
            <h2>Name: {{ transaction.name }}</h2>
            <h3>Price: {{ transaction.price }}</h3>
        </div>
        <div class="loading" v-else>Loading Transaction {{ id }}....</div>
    </div>
</template>

<script>
export default{
    name: 'TransactionsDetail',
    props: {
        id:{
            type: Number
        }
    },
    data(){
        return{
            transaction: null,
        }
        
    },
    created(){
        fetch("http://localhost:3000/transactions/"+ this.id)
        .then(res=>res.json())
        .then(data=>this.transaction=data)
        .then(()=>console.log(this.transaction));
    }
}
</script>