// frontend/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Frontend JavaScript loaded!');

    // --- Confirmation for removing items from cart ---
    const removeForms = document.querySelectorAll('.remove-cart-form');
    removeForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Display a custom confirmation message instead of alert/confirm
            const productId = this.querySelector('input[name="productId"]').value;
            const productNameElement = this.closest('.cart-item-card').querySelector('.item-details h3');
            const productName = productNameElement ? productNameElement.textContent : 'this item';

            showConfirmationModal(`Are you sure you want to remove "${productName}" from your cart?`, () => {
                // If confirmed, submit the form
                form.submit();
            });
            event.preventDefault(); // Prevent default form submission until confirmed
        });
    });

    // --- Basic Client-side quantity validation for Add to Cart forms ---
    const addToCartForms = document.querySelectorAll('.add-to-cart-form');
    addToCartForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const quantityInput = this.querySelector('.quantity-input');
            const maxStock = parseInt(quantityInput.max, 10);
            const requestedQty = parseInt(quantityInput.value, 10);

            if (requestedQty <= 0) {
                showModal('Please enter a quantity greater than 0.');
                event.preventDefault();
            } else if (requestedQty > maxStock) {
                showModal(`Cannot add ${requestedQty} items. Only ${maxStock} in stock.`);
                event.preventDefault();
            }
        });
    });

    // --- Basic Client-side quantity validation for Update Cart forms ---
    const updateCartForms = document.querySelectorAll('.update-cart-form');
    updateCartForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const quantityInput = this.querySelector('.quantity-input');
            const maxStock = parseInt(quantityInput.max, 10);
            const requestedQty = parseInt(quantityInput.value, 10);

            if (requestedQty < 0) { // Allow 0 to remove item
                showModal('Quantity cannot be negative.');
                event.preventDefault();
            } else if (requestedQty > maxStock) {
                showModal(`Cannot update to ${requestedQty} items. Only ${maxStock} in stock.`);
                event.preventDefault();
            }
        });
    });

    // --- Custom Modal Box Implementation (instead of alert/confirm) ---
    function showModal(message, type = 'alert') {
        const modalId = 'customModal';
        let modal = document.getElementById(modalId);
        if (!modal) {
            modal = document.createElement('div');
            modal.id = modalId;
            modal.className = 'custom-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <p id="modal-message"></p>
                    <div class="modal-buttons">
                        <button class="modal-ok-button btn">OK</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        document.getElementById('modal-message').textContent = message;
        modal.classList.add('show-modal');

        const closeButton = modal.querySelector('.close-button');
        const okButton = modal.querySelector('.modal-ok-button');

        const closeModal = () => {
            modal.classList.remove('show-modal');
            okButton.onclick = null; // Clear event listener
            closeButton.onclick = null; // Clear event listener
        };

        closeButton.onclick = closeModal;
        okButton.onclick = closeModal;

        // Close modal if clicked outside
        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        };
    }

    function showConfirmationModal(message, onConfirm) {
        const modalId = 'confirmationModal';
        let modal = document.getElementById(modalId);
        if (!modal) {
            modal = document.createElement('div');
            modal.id = modalId;
            modal.className = 'custom-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <p id="confirmation-message"></p>
                    <div class="modal-buttons">
                        <button class="modal-confirm-button btn">Yes</button>
                        <button class="modal-cancel-button btn">No</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        document.getElementById('confirmation-message').textContent = message;
        modal.classList.add('show-modal');

        const closeButton = modal.querySelector('.close-button');
        const confirmButton = modal.querySelector('.modal-confirm-button');
        const cancelButton = modal.querySelector('.modal-cancel-button');

        const closeModal = () => {
            modal.classList.remove('show-modal');
            confirmButton.onclick = null;
            cancelButton.onclick = null;
            closeButton.onclick = null;
        };

        closeButton.onclick = closeModal;
        confirmButton.onclick = () => {
            onConfirm();
            closeModal();
        };
        cancelButton.onclick = closeModal;

        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        };
    }

    // --- Add CSS for the custom modal ---
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .custom-modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1000; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            justify-content: center;
            align-items: center;
        }
        .custom-modal.show-modal {
            display: flex;
        }
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 25px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            position: relative;
            animation: fadeIn 0.3s ease-out;
        }
        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
        }
        .close-button:hover,
        .close-button:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        #modal-message, #confirmation-message {
            margin-bottom: 20px;
            font-size: 1.1rem;
            text-align: center;
        }
        .modal-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        .modal-ok-button, .modal-confirm-button, .modal-cancel-button {
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: background-color 0.3s ease;
        }
        .modal-ok-button, .modal-confirm-button {
            background-color: #007bff;
            color: white;
            border: none;
        }
        .modal-ok-button:hover, .modal-confirm-button:hover {
            background-color: #0056b3;
        }
        .modal-cancel-button {
            background-color: #6c757d;
            color: white;
            border: none;
        }
        .modal-cancel-button:hover {
            background-color: #5a6268;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(modalStyle);
});