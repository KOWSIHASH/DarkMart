import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-canceling wireless headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Advanced fitness tracking smartwatch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Laptop Backpack",
    description: "Water-resistant laptop backpack with USB charging port",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB mechanical gaming keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
  }
];

// API endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/cart/add', (req, res) => {
  const { productId } = req.body;
  // In a real application, you would handle cart logic here
  res.json({ success: true, message: 'Product added to cart' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});