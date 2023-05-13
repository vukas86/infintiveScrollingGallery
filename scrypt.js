let page = 1;
const limit = 10;

const galleryElement = document.getElementById("gallery");
const loadingElement = document.getElementById("loading");

function getImages() {
  loadingElement.style.display = "block";

  fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=${limit}&client_id=eXsPxBtNY5CXbX8p77o4UrJXRniimIMzgJEmoYNFAN4`
  )
    .then((respone) => respone.json())
    .then((data) => {
      data.forEach((image) => {
        const img = document.createElement("img");
        img.classList.add("image");
        img.src = image.urls.regular;
        galleryElement.appendChild(img);
      });

      loadingElement.style.display = "none";
      page++;
    })
    .catch((error) => console.error(error));
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    getImages();
  }
});

getImages();
