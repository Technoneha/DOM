// Greeting functionality
const button = document.getElementById("btn");
const input = document.getElementById("name");
const heading = document.querySelector(".header h1");

button.addEventListener("click", function () {
  let username = input.value;
  heading.innerText = "Hello, " + username;
});

// Box color change functionality
const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let colorName = box.innerText;

    box.style.backgroundColor = colorName;
  });
});
