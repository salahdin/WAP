let products = [];
let counter = products.length

class Product{
    constructor(title, description, price){
        this.id = counter;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    static getAllProduct(id){
        return products;
    }

    static getProductById(id){
        return products.find(p=>p.id === id)
    }

    save(){
        this.id = counter
        products.push(this)
    }

    put(id){
        const obj = getProductById(id);
        if (obj){
            this.description = "updated"
        }
        else{
            throw new Error("error")
        }

    }

    static delete(id){
        products = products.filter(prod => {
            if (prod.id!=id){
                return true
            }
            return false
        })
    }
}

module.exports = Product;

// Create sample objects
const product1 = new Product(0, "Product 1", "Description 1", 10.99);
const product2 = new Product(1, "Product 2", "Description 2", 19.99);
const product3 = new Product(2, "Product 3", "Description 3", 14.99);

// Add sample objects to the products array
products.push(product1, product2, product3);