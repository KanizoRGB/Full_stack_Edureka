const express = require('express');
const cors = require('cors');

const app = express();

const port = 5000;

//Middleware
app.use(express.json());

//Enable CORS
app.use(cors())

//A simple GET route to send the products to the frontend
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 100 },
    { id: 2, name: 'Phone', price: 100 },
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}   );