const hamburger = document.getElementById("hamburger"),
  navigation = document.querySelector("header.navigation");

//
hamburger.addEventListener("click", () => {
  if (hamburger.checked) {
    console.log("test");
    navigation.classList.add("navigation-active");
  } else {
    navigation.classList.remove("navigation-active");
  }
});
