const inputLabels = document.querySelectorAll(".input-control label");

inputLabels.forEach((label, idx) => {
  label.addEventListener("click", () => {
    label.parentElement.children[0].focus();
  });
});

document.querySelector(".input-control input").focus();
