const formSteps = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");

let currentStep = 0;

function showStep(step) {
  formSteps.forEach((s, index) => {
    s.classList.toggle("active", index === step);

    const inputs = s.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      if (index === step) {
        input.removeAttribute("disabled");
      } else {
        input.setAttribute("disabled", true);
      }
    });
  });
}


nextButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    // LET FORMSPREE HANDLE SUBMISSION
  });
}
