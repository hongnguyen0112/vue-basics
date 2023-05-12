<template>
  <header-component ref = "headerRef"/>
  <button @click="toggleModal">Show Modal</button>
  <base-modal 
    v-if="isShowModal"
    title="This is a title from app components" 
    content="This is content modal"
    theme = "test"
    @closeModal="toggleModal"
  >
    <template v-slot:header>
      <div>
        <h2>Header from App</h2>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <h5>Footer from App</h5>
      </div>
    </template>
    <label for="">Name</label>
    <input type="password">
  </base-modal>
</template>

<script>
  import HeaderComponent from './components/Header.vue'
  import AppModal from './components/Modal.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      BaseModal: AppModal
    },
    data(){
      return {
        isShowModal: false
      };
    },
    methods:{
      toggleModal(){
        this.isShowModal = !this.isShowModal
      }
    }
  }
</script>
