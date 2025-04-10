import { Request, Response } from 'express';
import product_service from '../service/product_service';

function list(req: Request, res: Response) {
    res.json(product_service.list());
}

async function insert(req: Request, res: Response): Promise<any> {
    const product = req.body;

    try {
        let insertProduct = product_service.insert(product)
        res.status(201).json(insertProduct);
    } catch(err: any) {
        res.status(err.is).json(err.msg);
    }
}

async function searchById(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id);

    try {
        const product = product_service.searchById(id);
        res.json(product);
    } catch (err: any){
        res.status(err.is).json(err.msg);
    }
}   

export default {
    list,
    insert,
    searchById
};