const navToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'block';
    navToggle.textContent = '✕ ';  // Show X to close nav
    navToggle.setAttribute('aria-label', 'Close navigation menu');
  } else {
    navMenu.style.display = 'none';
    navToggle.textContent = '☰';  // Show Home to open nav
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }
});

// Product array
const products = [
  {
    id: "ac-2000",
    name: "Photo Editing",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Video Editing",
    averagerating: 5.0
  }
];

// Populate select menu
const productSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".register-form");
    const programSelect = document.getElementById("program");
    const discountDisplay = document.getElementById("discount");

    // Add input event listener to form
    form.addEventListener("input", updateDiscount);
    form.addEventListener("change", updateDiscount);

    function updateDiscount() {
      const selected = programSelect.value;
      const today = new Date();
      const earlyBirdCutoff = new Date("2025-07-30");

      let basePrice = 0;
      if (selected === "video" || selected === "photo") {
        basePrice = 20;
      } else if (selected === "both") {
        basePrice = 40;
      }

      if (!selected) {
        discountDisplay.textContent = "";
        return;
      }

      let discount = today < earlyBirdCutoff ? 11 : 0;
      let total = basePrice - discount;

      discountDisplay.textContent = ` $${discount} discount applied. Total: $${total}`;
    }
  });
