let full_name = document.getElementById("full_name");

full_name.addEventListener("input", function (event) {
  if (full_name.validity.typeMismatch) {
    full_name.setCustomValidity("I expect an e-mail, darling!");
  } else {
        full_name.setCustomValidity("");
  }
});