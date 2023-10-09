const reviewContainer = document.querySelector(".r-container")

const reviewIdea = async () => {
  try {
    const response = await fetch("review.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const review= await response.json()
    const reviewOptions = review.clientReviews
    reviewCard(reviewOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

reviewIdea()

function reviewCard(reviewOptions) {
  reviewContainer.innerHTML = ""
  for (let i = 0; i < 3; i++) {
    let option = reviewOptions[i]

    reviewContainer.innerHTML += `
<div class="r-card">
    <div class="comment">${option.comment}</div>
        <div class="r-details-short">
            <div class="r-image">
                <img
                src="${option.image}"
                alt=" image"
                />
            </div>   
            <div class="r-details-name">${option.name}</div>
            <div class="r-details-job">${option.job}</div>
        </div>
</div>`
  }
}