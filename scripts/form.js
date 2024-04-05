const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirm');
        const message = document.getElementById('password-match-message');

        function checkPasswordMatch() {
            if (passwordInput.value !== confirmInput.value) {
                message.textContent = 'Passwords do not match';
            } else {
                message.textContent = '';
            }
        }

        confirmInput.addEventListener('keyup', checkPasswordMatch);