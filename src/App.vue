<template>
  <div>
    {{ $store.getters.total }}
    <AppProducts />
    <br><br>
    <br><br>
      <pre>
        {{ $store.state.cart }}
      </pre>

      
    <br><br>
    <br><br>
    <button @click="updateUser()">
        Atualizar Perfil
    </button>
    
  </div>
</template>

<script>
import AppProducts from '@/components/Products/AppProducts.vue'

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data(){
    return {

    }
  },

  methods: {
    updateUser(){
      const newUser = {
        first_name: 'Tiago',
        last_name: 'Matos',
        email: 'tiago@matos.com'
    }
    this.$store.commit('storeUser', newUser);
    }
  },

 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
