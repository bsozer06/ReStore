import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../models/product';

function App() {

  const [products, setProducts] = useState<Product[]>( [] );  

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  function addProduct() {
    setProducts(prevState => [...prevState, 
      { 
        id: 101+prevState.length,
        name: "product"+(prevState.length+1), 
        price: (prevState.length*100)+100 ,
        brand: "some brand",
        description: "some description",
        pictureUrl: "http://xxxxx"
      }
     ]);
  }

  return (
    <>
      <Typography variant='h1'>Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
      
    </>
  );
}

export default App;
