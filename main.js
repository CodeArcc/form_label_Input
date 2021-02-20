const inputFields = document.querySelectorAll(".input-control input");
const inputLabels = document.querySelectorAll(".input-control label");

inputFields.forEach((field, idx) => {
  field.addEventListener("focus", (event) => {
    if (!!!field.value) {
      field.parentElement.children[1].style.transform = "translateY(-35px)";
    }
  });
  field.addEventListener("blur", (event) => {
    if (!!field.value) {
      field.parentElement.children[1].style.transform = "translateY(-35px)";
    } else {
      field.parentElement.children[1].style.transform = "translateY(-50%)";
    }
  });
});

inputLabels.forEach((label, idx) => {
  label.addEventListener("click", () => {
    label.parentElement.children[0].focus();
  });
});

inputFields[0].focus();
