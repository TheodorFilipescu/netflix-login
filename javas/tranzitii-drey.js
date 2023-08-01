// Get the container and the element to add the class to for container-dn-ceo
const containerO1 = document.querySelector(".container-abu-elemente");
const elementO1 = document.querySelector(".container-abu-el-1");

// Calculate the middle point of the container with a slight delay to ensure that all elements are fully rendered for container-dn-ceo
setTimeout(() => {
  const containerMiddleO1 = containerO1.offsetTop + containerO1.offsetHeight / 4;

  // Add a scroll event listener to the window for container-dn-ceo
  window.addEventListener("scroll", () => {
    // Check if the middle point of the container is visible in the viewport for container-dn-ceo
    if (window.pageYOffset + window.innerHeight >= containerMiddleO1) {
      // Add the class to the element for container-dn-ceo
      elementO1.classList.add("dn-efect-fata");
    }
  });

  // Check if the middle point of the container is already in view on page load for container-dn-ceo
  if (window.pageYOffset + window.innerHeight >= containerMiddleO1) {
    elementO1.classList.add("dn-efect-fata");
  }
}, 100);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


