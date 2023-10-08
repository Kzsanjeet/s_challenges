const packageContainer = document.querySelector(".pk-container")

const packageIdea = async () => {
  try {
    const response = await fetch("package.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const package= await response.json()
    const packageOptions = package.trekkingPackages
    packageCard(packageOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

packageIdea()

function packageCard(packageOptions) {
  packageContainer.innerHTML = ""
  for (let i = 0; i < 7; i++) {
    let option = packageOptions[i]

    packageContainer.innerHTML += `
<div class="pk-card">
      <div class="pk-image">
        <img
          src="${option.image}"
          alt=" image"
        />
      </div>
    <div class="pk-details">
        <div class="pk-details-name">${option.name}</div>
        <div class="pk-details-price">${option.description}</div>
        <div class="pk-details-short">
         <p>
         ${option.price}
          </p>
        </div>
    </div>
        <button id="btnExplore">Explore More</button>
    </div>
</div>`
  }
}