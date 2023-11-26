import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products: [],
    carts: []
    
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
      
    }
  },
  actions: {
  },
  getters: {
  },
 })
