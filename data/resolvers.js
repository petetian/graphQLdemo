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
        console.log("Update received:", input); // Add this line for debugging

        // if the product does not exist, send an error
        if (!productDatabase[id]) {
            throw new Error('No product exists with id ' + id);
        }

        // find the product by id then update
        const updatedProduct = new Product(id, input);  
        productDatabase[id] = updatedProduct;
        return updatedProduct;
    },

    // function to delete a product
    deleteProduct: ({id}) => {      
        const deletedProduct = productDatabase[id];

        // if the product does not exist, send an error
        if (!productDatabase[id]) {
            throw new Error('No product exists with id ' + id);
        }
        
        delete productDatabase[id];
        return deletedProduct;
    }
}; 

export default resolvers;