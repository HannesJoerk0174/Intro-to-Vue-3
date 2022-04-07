const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            console.log("Event triggered");
            this.cart.push(id)
        }
    }
  })
  