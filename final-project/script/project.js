document.addEventListener("DOMContentLoaded", function () {
  // Navigation toggle
  const navToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
      navMenu.style.display = 'block';
      navToggle.textContent = '✕';
      navToggle.setAttribute('aria-label', 'Close navigation menu');
    } else {
      navMenu.style.display = 'none';
      navToggle.textContent = '☰';
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // Populate product select menu
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

  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Update footer
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

  // Discount calculator
  const programSelect = document.getElementById("program");
  const discountOutput = document.getElementById("discount");

  const videoPrice = 20;
  const photoPrice = 20;
  const discountAmount = 11;
  const discountDeadline = new Date("2025-06-30");

  function calculatePrice() {
    const today = new Date();
    const selectedProgram = programSelect.value;
    let totalPrice = 0;

    if (selectedProgram === "video" || selectedProgram === "photo") {
      totalPrice = 20;
    } else if (selectedProgram === "both") {
      totalPrice = videoPrice + photoPrice;
    }

    if (today <= discountDeadline) {
      totalPrice -= discountAmount;
      discountOutput.textContent = ` $${totalPrice} (with $${discountAmount} early bird discount)`;
    } else {
      discountOutput.textContent = ` $${totalPrice}`;
    }
  }

  if (programSelect) {
    programSelect.addEventListener("change", calculatePrice);
  }
});
