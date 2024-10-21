document.addEventListener("DOMContentLoaded", function () {
    // Ensure both modals are hidden on page load
    const newUserModal = document.getElementById("newUserModal");
    const editUserModal = document.getElementById("editUserModal");

    // Hide modals by default
    hideModal(newUserModal);
    hideModal(editUserModal);

    // Get the button that opens the new user modal
    const newUserBtn = document.querySelector(".new-user-btn");

    // Get the close and cancel buttons for both modals
    const closeBtns = document.querySelectorAll(".close");
    const cancelBtns = document.querySelectorAll(".cancel-btn");

    // Open the new user modal
    newUserBtn.onclick = function () {
        showModal(newUserModal);
    };

    // Close modals when clicking on close (x) or cancel buttons
    closeBtns.forEach(btn => btn.onclick = closeModalHandler);
    cancelBtns.forEach(btn => btn.onclick = closeModalHandler);

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === newUserModal || event.target === editUserModal) {
            hideModal(newUserModal);
            hideModal(editUserModal);
        }
    };

    // Handle the edit user modal open when clicking edit buttons
    document.querySelectorAll('.edit-btn').forEach((editBtn) => {
        editBtn.addEventListener('click', function () {
            const row = this.closest('tr');
            const userId = row.children[0].innerText;
            const userName = row.children[1].innerText;
            const userUsername = row.children[2].innerText;
            const userType = row.children[3].innerText;

            // Pre-fill the form with user data
            document.getElementById('editUserId').value = userId;
            document.getElementById('editName').value = userName;
            document.getElementById('editUsername').value = userUsername;
            document.getElementById('editUserType').value = userType;

            // Open edit modal
            showModal(editUserModal);
        });
    });

    // Handle form submission (for edit user form)
    const editUserForm = document.getElementById('editUserForm');
    editUserForm.onsubmit = function (e) {
        e.preventDefault();

        const data = {
            id: document.getElementById('editUserId').value,
            name: document.getElementById('editName').value,
            username: document.getElementById('editUsername').value,
            password: document.getElementById('editPassword').value,
            userType: document.getElementById('editUserType').value
        };

        // Handle form submission logic (e.g., via AJAX or fetch request)
        console.log('Updated user data:', data);

        // Close the modal after submission
        hideModal(editUserModal);
    };

    // Helper function to show a modal
    function showModal(modal) {
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
    }

    // Helper function to hide a modal
    function hideModal(modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }

    // General function to close modals
    function closeModalHandler() {
        hideModal(newUserModal);
        hideModal(editUserModal);
    }
});
