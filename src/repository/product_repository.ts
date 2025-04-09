import { Product } from "../types/product";

let listProducts: Product[] = [];
let lastId = 1;

function list(): Product[] {
    return listProducts;
}

function insert(product: Product): Product {  
    const newProduct: Product = {
        id: lastId++, 
        name: product.name,
        category: product.category,
        price: product.price        
    };

    listProducts.push(newProduct);
    return newProduct;
}

function searchById(id: number): Product | undefined {
    return listProducts.find(prod => prod.id === id);
}

export default {
    list,
    insert,
    searchById
};
