const blogContainer = document.querySelector(".b-container")

const blogIdea = async () => {
  try {
    const response = await fetch("blog.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const blog = await response.json()
    const blogOptions = blog.blogs
    blogCard(blogOptions)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

blogIdea()

function blogCard(blogOptions) {
  blogContainer.innerHTML = ""
  for (let i = 0; i < 3; i++) {
    let option = blogOptions[i]

    blogContainer.innerHTML += `
<div class="b-card">
      <div class="b-image">
        <img
          src="${option.image}"
          alt=" image"
        />
      </div>
    <div class="b-details">
        <div class="b-details-name">${option.title}</div>
        <div class="b-details-highlight">${option.highlight}</div>
    </div>
</div>`
  }
}