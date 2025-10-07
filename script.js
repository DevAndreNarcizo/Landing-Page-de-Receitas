document.addEventListener('DOMContentLoaded', function () {
    // --- LÓGICA DA NEWSLETTER (EXISTENTE) ---
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageElement = document.getElementById('form-message');
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();

            messageElement.textContent = '';
            messageElement.className = '';

            if (!nameValue || !emailValue) {
                displayMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }
            if (!validateEmail(emailValue)) {
                displayMessage('Por favor, insira um endereço de e-mail válido.', 'error');
                return;
            }
            displayMessage(`Obrigado por se inscrever, ${nameValue}!`, 'success');
            nameInput.value = '';
            emailInput.value = '';
        });
    }

    // --- LÓGICA DO ANO DINÂMICO NO RODAPÉ (NOVA) ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

function displayMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = type;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}