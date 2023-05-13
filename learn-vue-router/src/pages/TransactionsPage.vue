<template>
    <div>
        <h1>Hello from Transactions</h1>
    </div>
    <div v-if="transactions.length==0">
        Loading transactions...
    </div>
    <div v-else>
            <div class="item" v-for="transaction in transactions" :key="transaction.id">
                <router-link 
                    :to="{
                        name: 'transactions-details-route', 
                        params:{id: transaction.id}
                    }">
                    {{ transaction.name }}
                </router-link>
            <div class="price">{{ transaction.price }}</div>
        </div>
    </div> 
</template>

<script>

import { ref } from 'vue';

export default{
    name:'TransactionsPage',
    // data(){
    //     return{
    //         transacions:[]
    //     }
    // },
    // created(){
    //     fetch("http://localhost:3000/transactions")
    //         .then(res=>res.json())
    //         .then(data => this.transacions = data);

    //     console.log(this.transacions)
    // },

    setup(){
        let transactions = ref([]);
        const error = ref(null);
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/transactions")
                if(response.ok){
                    transactions.value = await response.json()
                }
                else{
                    throw new Error("Something went wrong")
                }
            }
            catch(err) {
                error.value = err;
                console.log(error.value)
            }

        }
        fetchData();
        return {transactions}
    }
}
</script>