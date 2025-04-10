import express, { Request, Response } from 'express';
import product_router from "./routers/product_router"

const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
})

// trabalhando com produtos
app.use("/api/produtos", product_router);

// atualizar produto
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