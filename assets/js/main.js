let phoneInput = document.getElementById('phone-input');

if (phoneInput) phoneInput.addEventListener('input', function (e) {
    let cleanedValue = e.target.value.replace(/\D/g, '');
    e.target.value = cleanedValue;


});

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function (event) {
        let isValid = true;
        // Name validation
        const nameField = document.querySelector('input[name="your-name"]');
        const nameError = document.getElementById('name-error');
        if (!nameField.value.trim()) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Phone validation
        const phoneField = document.querySelector('input[name="your-phone"]');
        const phoneError = document.getElementById('phone-error');
        if (!phoneField.value.trim()) {
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Email validation
        const emailField = document.querySelector('input[name="your-email"]');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Message validation
        const messageField = document.querySelector('textarea[name="your-message"]');
        const messageError = document.getElementById('message-error');
        if (!messageField.value.trim()) {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault();
        }
    })
};


let linkElements = document.querySelectorAll('#faq li a');

if (linkElements) linkElements.forEach(function (linkElement) {
    linkElement.addEventListener('click', function (e) {
        e.preventDefault();
        let ulElement = this.nextElementSibling;


        if (ulElement) ulElement.classList.toggle('show');
    });
});


const items = document.querySelectorAll(".faq_section .accordion button");
if (items) {
    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}