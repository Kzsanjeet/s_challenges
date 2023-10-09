const offerContainer = document.querySelector(".o-container")

const offerIdea = async () => {
  try {
    const response = await fetch("offer.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const offer = await response.json()
    const offerOptions = offer.offers
    offerCard(offerOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

offerIdea()

function offerCard(offerOptions) {
  offerContainer.innerHTML = ""
  for (let i = 0; i < 7; i++) {
    let option = offerOptions[i]

    offerContainer.innerHTML += `
<div class="o-card">
      <div class="o-image">
        <img
          src="${option.icon}"
          alt=" image"
        />
      </div>
    <div class="o-details">
        <div class="o-details-name">${option.name}</div>
        <div class="o-details-detail">${option.details}</div>
    </div>
        <button id="btnExplore">Explore More</button>
    </div>
</div>`
  }
}s