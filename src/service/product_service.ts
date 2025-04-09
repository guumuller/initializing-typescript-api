import product_repository from '../repository/product_repository';
import { Product } from '../types/product';



function list(): Product[] {
    return product_repository.list();
}

function insert(data: any): Product {  
    if(!data.name || !data.category || !data.price) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    return product_repository.insert(data);
}

function searchById(id: number): Product {
    let product = product_repository.searchById(id)

    if (!product) {
        throw ({id: 400, msg: "Produto nao encontrado"});
    }
    return product;
}

export default {
    list,
    insert,
    searchById
};
