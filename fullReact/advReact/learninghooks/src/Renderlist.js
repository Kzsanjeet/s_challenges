import React from 'react'

//rendering array or list in react using map()

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function Renderlist() {
  const ItemList = products.map((product)=>
    <li key={product.id} style={{color:product.isFruit ? "magenta":"darkgreen"}}>
      {product.title}
    </li>
  )
  return (
    <div>
      {ItemList}
    </div>
  )
}

export default Renderlist
