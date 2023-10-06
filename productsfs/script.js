const productContainer = document.querySelector(".f-container")

const productIdea = async () => {
  try {
    const response = await fetch("product.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const products = await response.json()
    const productOptions = products.featuredProducts
    productCard(productOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

productIdea()

function productCard(productOptions) {
  productContainer.innerHTML = ""
  for (let i = 0; i < 4; i++) {
    let option = productOptions[i]

    productContainer.innerHTML += `
<div class="p-card">
      <div class="p-image">
        <img
          src="${option.image}"
          alt=" image"
        />
      </div>
    <div class="p-details">
        <div class="p-details-name">${option.name}</div>
        <div class="p-details-price">Price: $ ${option.price}</div>
        <div class="p-details-short">
         <p>
         ${option.rating}
          </p>
        </div>
    </div>
    <div class="f-card-btns">
        <button type="submit" class="btn add-to-cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button type="submit" class="btn watch-card">
            <i class="fa-solid fa-eye"></i>
        </button>
        <button type="submit" class="btn share-card">
            <i class="fa-solid fa-share"></i>
        </button>
    </div>
</div>`
  }
}