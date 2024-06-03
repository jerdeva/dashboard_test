const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.classList.toggle("inactive");

    if (button.textContent === "Active") {
      button.textContent = "Inactive";
    } else {
      button.textContent = "Active";
    }
  });
});
