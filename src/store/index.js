import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      },
    ],
    cart: []
    
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
      
    },

    addProduct(state, data){
      state.cart.push(data);
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id);
      state.cart.splice(idx, 1);  
    }
  },
  actions: {
    storeUser(context, data) {
      console.log(context, data);
      context.state.user = data;
    }
  },
  getters: {
    total(state){
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
 })
