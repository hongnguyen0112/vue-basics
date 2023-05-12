const app = Vue.createApp({
    // template: 
    // `
    
    // `,
    data(){
        return {
            data: "Vue",
            firstName: "Hong",
            lastName: "Nguyen",
            isHello: false,
            showModal: false,
            showEventHandling: false,
            x: 0,
            y: 0,
            products: [
                {
                    name: "Product A",
                    price: 500,
                    image:"./assets/product1.jpg",
                    active: true
                },
                {
                    name: "Product B",
                    price: 200,
                    image:"./assets/product2.jpg",
                    active: false
                },
                {
                    name: "Product C",
                    price: 100,
                    image:"./assets/product3.jpg",
                    active: false
                },
                {
                    name: "Product D",
                    price: 800,
                    image:"./assets/product4.jpg",
                    active: false
                }
            ]
        };
    },
    methods:{
        onToggleName(){
            this.isHello=!this.isHello;
            this.showModal=!this.showModal;
        },
        onShowEvent(){
            this.showEventHandling=!this.showEventHandling;
        },
        onMouseEvent(event, newX, newY){
            this.x = parseInt(newX);
            this.y = parseInt(newY);
            console.log(this.x,this.y)
        },
        onMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        onCartClick(e, product){
            product.active = !product.active
        }
    },
    computed:{
        productsComputed(){
            return this.products.filter(product=>product.price<400)
        }
    }
});

app.mount("#contact");