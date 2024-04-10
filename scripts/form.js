const form = document.getElementById('registration-form');
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirm');
        const passwordMatchMessage = document.getElementById('password-match-message');

        confirmInput.addEventListener('input', () => {
            if (confirmInput.value !== passwordInput.value) {
                passwordMatchMessage.textContent = 'Passwords do not match';
                form.classList.add('mismatch');
            } else {
                passwordMatchMessage.textContent = '';
                form.classList.remove('mismatch');
            }
        });