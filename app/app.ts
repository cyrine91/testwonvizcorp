import express, {Express, Request, Response } from 'express';
import { db } from './database';
import ProductModel from './models/product';
const app: Express = express();

app.use(express.json());
db.once('open', () => {});
  
app.get('/', (req: Request, res: Response) => {
    res.send('Express and Typescript server');
    console.log(res);
  });

app.post('/newProduct', async (req: Request, res: Response)=>{
    try{
        const {name,price, inStock, image}= req.body
        const newProduct = new ProductModel({
            name,price, inStock, image
        })
        await newProduct.save();
        res.status(200).json({status: 'Product saved'})
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Product not svaed"})
    }
})
 


export default app;