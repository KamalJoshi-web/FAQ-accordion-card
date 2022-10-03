const questions = document.querySelectorAll(".ques");
const answers = document.querySelectorAll(".ans");

questions.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    clicked.parentElement.nextElementSibling.classList.toggle("show");
    if (clicked.parentElement.nextElementSibling.classList.contains("show")) {
      clicked.classList.add("newStyle");
    } else {
      clicked.classList.remove("newStyle");
    }
  });
});
