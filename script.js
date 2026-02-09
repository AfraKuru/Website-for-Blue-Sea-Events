const openBookingBtn = document.getElementById("openBooking");
const bookingSection = document.getElementById("booking");

openBookingBtn.addEventListener("click", () => {
    bookingSection.classList.add("active");
    bookingSection.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesLink = document.getElementById("services-link");
  const servicesSection = document.getElementById("services");

  servicesLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Show services section
    servicesSection.style.display = "block";

    // Scroll smoothly to it
    servicesSection.scrollIntoView({ behavior: "smooth" });
  });
});

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
