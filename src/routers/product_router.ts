import express from "express";
import product_controller from '../controller/product_controller';

const router = express.Router();

// prefixo: /api/produtos

//listar produtos
router.get('/', product_controller.list)

//inserir produto
router.post('/', product_controller.insert)

//buscar produto por id
router.get('/:id', product_controller.searchById)


export default router;