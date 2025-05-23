import React,{useState,useEffect} from 'react'

function App() {

  const [products,setProducts] = useState([])

  //Fetch the data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default App