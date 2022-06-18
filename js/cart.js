class Cart {
    constructor() {
        this.list = [];
        this.badge = document.getElementById("cart-badge");
    }

    addProduct(product) {
        this.list.push(product);
        this.badge.innerText = this.list.length;

        if (this.list.length > 0 ) {
            this.badge.style.display = 'flex'
          }  else {
              this.badge.style.display = 'nome';
          }

        }
    

    getAmountProducts() {
        return this.list.length;
    
    }
}
const cart = new Cart()