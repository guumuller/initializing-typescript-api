import express from "express";
import { Request, Response } from "express";
import multer from "multer";

import product_controller from '../controller/product_controller';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// prefixo: /api/produtos

// listar produtos
router.get('/', product_controller.list);

// inserir produto
router.post('/', product_controller.insert);

// buscar produto por id
router.get('/:id', product_controller.searchById);

router.post('/images/upload', upload.single('image'), async (req: Request, res: Response): Promise<any> => {
    console.log(req.file);
    res.send("Imagem carregada com sucesso");
});

export default router;
