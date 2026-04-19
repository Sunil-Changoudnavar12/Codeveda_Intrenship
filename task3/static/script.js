document.addEventListener('DOMContentLoaded', function() {
    const infoForm = document.getElementById('infoForm');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.getElementById('close');

    function showFieldError(inputElement) {
        inputElement.classList.add('is-invalid');
    }

    function clearAllErrors() {
        const allInputs = infoForm.querySelectorAll('.form-control, .form-select');
        allInputs.forEach(function(input) {
            input.classList.remove('is-invalid');
        });
    }

    infoForm.querySelectorAll('.form-control, .form-select').forEach(function(input) {
        input.addEventListener('input', function() {
            input.classList.remove('is-invalid');
        });
    });

    infoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        clearAllErrors();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const genderInput = document.getElementById('course');

        let isEverythingCorrect = true;

        if (nameInput.value.trim() === "") {
            showFieldError(nameInput);
            isEverythingCorrect = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showFieldError(emailInput);
            isEverythingCorrect = false;
        }

        if (passwordInput.value.length < 6) {
            showFieldError(passwordInput);
            isEverythingCorrect = false;
        }

        if (genderInput.value === "") {
            showFieldError(genderInput);
            isEverythingCorrect = false;
        }

        if (isEverythingCorrect === true) {
            modalText.innerHTML = '<h4 class="text-success mb-3">Registration Successful!</h4>' +
                                 '<p>Welcome, <strong>' + nameInput.value + '</strong>. Your profile has been successfully created.</p>';
            modal.style.display = 'block';
            infoForm.reset();
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});