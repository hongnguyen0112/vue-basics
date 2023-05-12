<template>
  <h1>Hello from Vue CLI</h1>
  <button @click="onClickEvent">Click Me</button>
  <hello-world ref = "hello" msg="Hello from App"/>
  <header-component ref = "headerRef"/>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import HeaderComponent from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
      HeaderComponent
    },
    data(){
      return {};
    },
    methods:{
      onClickEvent(){
        console.log(this.$refs.headerRef)
        this.$refs.hello.onConsoleLogTesting();
      }
    }
  }
</script>
