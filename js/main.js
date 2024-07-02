window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("scroll-down")
  } else {
    headerElement.classList.remove("scroll-down")
  }
})




const nav__links = [
  {
    path: "#home",
    display: "Home",
  }]