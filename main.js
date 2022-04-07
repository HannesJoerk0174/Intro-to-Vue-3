const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inventory: 5,
            description: 'Something to keep your feet warm and cozy',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['S', 'M', 'L', 'XL' ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            if (this.inventory > 0)  {   this.inventory -= 1  }
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
