const adventureContainer = document.querySelector(".a-container")

const adventureIdea = async () => {
  try {
    const response = await fetch("adventure.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const ideas = await response.json()
    const adventureOptions = ideas.adventureIdeas
    adventureCard(adventureOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

adventureIdea()

function adventureCard(adventureOptions) {
  adventureContainer.innerHTML = ""
  for (let i = 0; i < 4; i++) {
    let option = adventureOptions[i]

    adventureContainer.innerHTML += `
    <div class="a-card">
      <div class="a-image">
        <img
          src="${option.image}"
          alt=" image"
        />
      </div>
      <div class="a-details">
        <div class="a-details-name">${option.name}</div>
        <div class="a-details-short">
         <p>
         ${option.details}
          </p>
        </div>
      </div>
    <button id='a-read-more' class='read-more'>Read More</button>
  </div>`
  }
}