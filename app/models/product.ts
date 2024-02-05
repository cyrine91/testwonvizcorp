import mongoose, { Schema } from 'mongoose';

export interface Product {
  name: string;
  price: number;
  inStock: string;
  image: string;
}

const ProductSchema: Schema<Product> = new mongoose.Schema({
  name: { type: String, required: false },
  price: { type: Number, required: false },
  inStock: { type: String, required: false },
  image: { type: String, required: false },
});
const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel

