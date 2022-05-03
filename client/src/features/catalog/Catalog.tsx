import React from 'react'
import { Product } from '../../app/models/product'

// added signature for props
interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <>
            <h2>Catalog</h2>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>{product.name} - {product.price}</li>
                    ))
                }
            </ul>
            <button onClick={addProduct}>Add</button>
        </>
    )
}
