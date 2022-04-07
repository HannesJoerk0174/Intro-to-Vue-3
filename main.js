const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'Something to keep your feet warm and cozy',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 5 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            sizes: ['S', 'M', 'L', 'XL' ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            if (this.variants[this.selectedVariant].quantity > 0)  {   this.variants[this.selectedVariant].quantity -= 1  }
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    }
})
