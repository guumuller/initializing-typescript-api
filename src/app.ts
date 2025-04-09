import express, { Request, Response } from 'express';
import product_service from './service/product_service';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
})

//listar produtos
app.get('/api/produtos', (req: Request, res: Response) => {
    res.json(product_service.list());
})

//inserir produto
app.post('/api/produtos', async (req: Request, res: Response): Promise<any> => {
    const product = req.body;

    try {
        let insertProduct = product_service.insert(product)
        res.status(201).json(insertProduct);
    } catch(err: any) {
        res.status(err.is).json(err.msg);
    }
})

//buscar produto por id
app.get('/api/produtos/:id', async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);

    try {
        const product = product_service.searchById(id);
        res.json(product);
    } catch (err: any){
        res.status(err.is).json(err.msg);
    }
})

// //atualizar produto
// app.put('/api/produtos/:id', async (req: Request, res: Response): Promise<any> => {
//     const id = parseInt(req.params.id);
//     const { name, category, price } = req.body;
//     const productIndex = listProducts.findIndex(p => p.id === id);

//     if (productIndex === -1) {
//         return res.status(404).json({ error: 'Produto Não encontrado' });
//     }

//     if (!name || !category || price === undefined) {
//         return res.status(400).json({ error: 'Falta dados obrigatorios' });
//     }

//     listProducts[productIndex] = {
//       ...listProducts[productIndex], //mantém os outros dados de produto (id)
//         name,
//         category,
//         price
//     };

//     res.json(listProducts[produtoIndex]);
// });

// //deletar produto
// app.delete('/api/produtos/:id', async(req: Request, res: Response): Promise<any> => {
//     const id = parseInt(req.params.id);
//     const productIndex = listProducts.findIndex(p => p.id === id);

//     if (productIndex === -1) {
//         return res.status(404).json({ error: 'produto not found' });
//     }

//     let produtoDeletado = listProducts.splice(productIndex, 1);
//     res.json(produtoDeletado);
// });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});