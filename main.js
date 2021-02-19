const inputFields = document.querySelectorAll(".input-control input");

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

inputFields[0].focus();
