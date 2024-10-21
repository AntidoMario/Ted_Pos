const addSupplierModal = document.getElementById('addSupplierModal');
const addSupplierBtn = document.querySelector('.add-supplier-btn');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const supplierForm = document.getElementById('supplierForm');
const modalTitle = document.getElementById('modalTitle');
const supplierIdField = document.getElementById('supplierId');
const supplierNameField = document.getElementById('supplierName');
const supplierAddressField = document.getElementById('supplierAddress');
const supplierContactField = document.getElementById('supplierContact');
const supplierStatusField = document.getElementById('supplierStatus');

// Event listener to open modal for adding a supplier
addSupplierBtn.addEventListener('click', function () {
  modalTitle.textContent = "+ Add Supplier"; // Change modal title
  supplierForm.reset(); // Clear form
  supplierIdField.value = ""; // Clear hidden field
  addSupplierModal.style.display = 'flex';  // Show modal
});

// Event listener to close modal when close or cancel buttons are clicked
closeBtn.addEventListener('click', function () {
  addSupplierModal.style.display = 'none';  // Close modal
});

cancelBtn.addEventListener('click', function () {
  addSupplierModal.style.display = 'none';  // Close modal
});

// Close modal if user clicks outside of the modal content
window.onclick = function (event) {
  if (event.target == addSupplierModal) {
    addSupplierModal.style.display = 'none';
  }
};

// Event listener for Edit buttons
document.querySelectorAll('.bx-edit').forEach(function(editBtn) {
  editBtn.addEventListener('click', function () {
    const row = this.closest('tr'); // Get the row of the supplier
    const supplierId = row.cells[0].textContent; // Assuming the ID is in the first cell
    const supplierName = row.cells[1].textContent;
    const supplierAddress = row.cells[2].textContent;
    const supplierContact = row.cells[3].textContent;
    const supplierStatus = row.cells[4].textContent.trim() === 'Active' ? 'Active' : 'Inactive';

    // Fill the form with the supplier's data
    supplierIdField.value = supplierId;
    supplierNameField.value = supplierName;
    supplierAddressField.value = supplierAddress;
    supplierContactField.value = supplierContact;
    supplierStatusField.value = supplierStatus;

    modalTitle.textContent = "Edit Supplier"; // Change modal title
    addSupplierModal.style.display = 'flex';  // Show modal
  });
});

// Handle form submission
supplierForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const supplierId = supplierIdField.value;
  const supplierName = supplierNameField.value;
  const supplierAddress = supplierAddressField.value;
  const supplierContact = supplierContactField.value;
  const supplierStatus = supplierStatusField.value;

  if (supplierId) {
    // Update supplier logic here
    console.log(`Updating supplier ID ${supplierId}`);
    // Perform AJAX or form submission to update the supplier data on the server
  } else {
    // Add supplier logic here
    console.log('Adding new supplier');
    // Perform AJAX or form submission to add a new supplier on the server
  }

  // Close the modal after the operation
  addSupplierModal.style.display = 'none';
});
