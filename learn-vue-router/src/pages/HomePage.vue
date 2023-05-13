<template>
    <div>
        <input type="text" v-model="userInputs">
        <ul>
            <li v-for="(input, index) in filterOption" :key="index"> 
                {{ input }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';

export default{
    props:{
        theme: {
            type: String,
            required: true,
            default: "light"
        }
    },
    
    //setup function takes in 2 params: `props and context`. In case we don't need to use props, replace with "_"
    setup(props, context){
        console.log(props.theme)

        console.log(context.emit)
        
        let options = reactive(["OptionA","OptionB","OptionC"]);
        
        const userInputs = ref("");
        
        const filterOption = computed(()=>{
            return options.filter(option => option.includes(userInputs.value))
        })

        watch(userInputs,(state, prevstate)=>{
            console.log(state, prevstate)
        });

        watchEffect(()=>{
            if(userInputs.value){
                console.log("running...")
            }
        })

        return{options, filterOption, userInputs}
    }
}

</script>