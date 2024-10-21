// Modal-related functionality
function openModal(modal) {
    modal.style.display = "flex";
  }
  
  function closeModal(modal) {
    modal.style.display = "none";
  }
  
  // Set up event listeners for modal open/close actions
  function setupModalHandlers() {
    const openPopup = document.getElementById("open-popup");
    const closePopup = document.getElementById("close-popup");
    const cancelBtn = document.getElementById("cancel-btn");
    const modal = document.getElementById("add-product-modal");
  
    openPopup.addEventListener("click", () => openModal(modal));
    closePopup.addEventListener("click", () => closeModal(modal));
    cancelBtn.addEventListener("click", () => closeModal(modal));
  
    // Close modal if clicked outside of it
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        closeModal(modal);
      }
    });
  }
  
  // Function to populate the form fields when editing a product
  function populateForm(productData) {
    document.getElementById("category").value = productData.category;
    document.getElementById("product-name").value = productData.name;
    document.getElementById("product-model").value = productData.model;
    document.getElementById("price").value = productData.price;
    document.getElementById("quantity").value = productData.quantity;
  }
  
  // Handle the logic for editing a product
  function handleEditProduct(event) {
    const modal = document.getElementById("add-product-modal");
    openModal(modal);
  
    // Change modal title and button text to "Edit Product"
    document.querySelector(".modal-header h2").innerHTML = '<i class="bx bx-edit"></i> Edit Product';
    document.querySelector(".btn-add").textContent = "Save Changes";
  
    // Get the parent row of the clicked button and extract product data
    const productRow = event.target.closest("tr");
    const productData = {
      category: productRow.cells[1].textContent,
      name: productRow.cells[2].textContent,
      model: productRow.cells[3].textContent,
      price: productRow.cells[4].textContent,
      quantity: productRow.cells[5].textContent,
    };
  
    populateForm(productData);
  }
  
  // Add event listeners to all edit buttons
  function setupEditButtons() {
    const editButtons = document.querySelectorAll(".bx-edit");
    editButtons.forEach((button) => {
      button.addEventListener("click", handleEditProduct);
    });
  }
  
  // Reset modal when opening it to add a product
  function handleAddProduct() {
    const modal = document.getElementById("add-product-modal");
    openModal(modal);
  
    // Change modal title and button text back to "Add Product"
    document.querySelector(".modal-header h2").innerHTML = '<i class="bx bx-plus"></i> Add Product';
    document.querySelector(".btn-add").textContent = "Add";
  
    // Clear form fields
    document.querySelector(".add-product-form").reset();
  }
  
  // Initialize the event listeners on page load
  function init() {
    setupModalHandlers();
    setupEditButtons();
  
    const openPopup = document.getElementById("open-popup");
    openPopup.addEventListener("click", handleAddProduct);
  }
  
  // Run the initialization function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);
  