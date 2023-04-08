const exp = require('constants');

class Product {
    constructor(id, { name, description, price = 0, soldout, inventory, stores }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.inventory = inventory;
        this.stores = stores;
    }
}


const productDatabase = {};

const resolvers = {
    getProduct: ({id}) => {
        return new Product(id, productDatabase[id]);
    },
    getAllProducts: () => {
        return Object.values(productDatabase);
    },

    createProduct: ({input}) => {
        console.log("Input received:", input); // Add this line for debugging
        const id = require('crypto').randomBytes(10).toString('hex');
        const newProduct = new Product(id, input);
        productDatabase[id] = newProduct;
        return newProduct;
    },

    // function to update a product
    updateProduct: ({id, input}) => {
        console.log("Input received:", input); // Add this line for debugging
        const newProduct = new Product(id, input);
        productDatabase[id] = newProduct;
        return newProduct;
    },
}; 

export default resolvers;