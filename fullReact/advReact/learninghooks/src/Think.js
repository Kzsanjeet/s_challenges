import React from 'react'


const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  function SearchBar(){
    return(
        <form action="">
            <input type="text" placeholder="Search..."/>
            <label htmlFor="">
                <input type="checkbox" name="" id=""/>
                {" "}
                Only show products in stock
            </label>
        </form>
        )
  }

function Think() {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

export default Think

