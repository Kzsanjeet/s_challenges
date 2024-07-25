import React from 'react'

product = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  function ProductRow({product}){
    const name = product.stocked? product.name :(
        <span style={{color: 'red'}}>{product.name}</span>
    )
    return(
        <>
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
        </>
    )
  }

  function ProductCategoryRow({category}){
    return(
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
  }

  function ProductTable({product}){
    const rows = []
    const lastCategory = null
    product.forEach((product) => {
        if (lastCategory !== product.category) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            }
            rows.push(<ProductRow product={product} key={product.name} />)
            lastCategory = product.category
            })
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            )
  }

  function SearchBar(){
    return(
        <>
        <div>
        <form action="">
            <input type="text" placeholder="Search..."/>
            <div>
            <label htmlFor="">
                <input type="checkbox"/>
                <span>Only show products in stock</span>
            </label>
            </div>
        </form>
        </div>
         
        </>
    )
  }

  function FilterableProductTable({product}){
    return(
        <div>
            <SearchBar/>
            <ProductTable product={product} />
        </div>
    )
  }


function Thinking() {
  return (
    <div>
        <FilterableProductTable/>
    </div>
  )
}

export default Thinking
