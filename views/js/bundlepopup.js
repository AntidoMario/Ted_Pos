// Get the modal element
const modal = document.getElementById("add-bundle-modal");
// Get the button that opens the modal
const addButton = document.querySelector(".add-bundle-btn");
// Get the close button element
const closeBtn = document.querySelector(".close-btn");
// Get the cancel button in the form
const cancelBtn = document.querySelector(".cancel-btn");

// Show the modal when the Add Bundle button is clicked
addButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Hide the modal when the close button or cancel button is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Optionally, close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Get the necessary elements
const selectBox = document.getElementById('select-box');
const dropdown = document.querySelector('.checkbox-dropdown');
const checkboxes = document.querySelectorAll('.checkbox-dropdown input[type="checkbox"]');
const displaySpan = selectBox.querySelector('span');
const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product-list');

// Toggle dropdown visibility when the select box is clicked
selectBox.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
  selectBox.classList.toggle('active');  // Add active state for styling if needed
});

// Handle checkbox selection
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const selectedProducts = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    displaySpan.textContent = selectedProducts.length > 0 
      ? selectedProducts.join(', ') 
      : 'Select Product';
  });
});

// Search functionality to filter products
searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const labels = productList.querySelectorAll('label');

  labels.forEach(label => {
    const product = label.textContent.toLowerCase();
    if (product.includes(filter)) {
      label.style.display = '';
    } else {
      label.style.display = 'none';
    }
  });
});

// Optional: Close dropdown if clicked outside
window.addEventListener('click', (e) => {
  if (!selectBox.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
    selectBox.classList.remove('active');
  }
});

selectBox.addEventListener('click', () => {
  console.log('Select box clicked');
  dropdown.classList.toggle('hidden');
});



