/**
 * Rebuilt Sanitized Contact Form Validation Module
 * Abdul Waris — Contact Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputName = document.getElementById('form-name');
  const inputEmail = document.getElementById('form-email');
  const inputSubject = document.getElementById('form-subject');
  const inputMessage = document.getElementById('form-message');
  const feedbackEl = document.getElementById('form-feedback-overlay');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Simple HTML stripping sanitization to prevent XSS risk
  const sanitizeHTML = (str) => {
    return str.replace(/<[^>]*>/g, '').trim();
  };

  const clearValidationErrors = () => {
    const cells = form.querySelectorAll('.form-cell');
    cells.forEach(c => c.classList.remove('invalid'));
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'form-feedback-overlay';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearValidationErrors();

    let isValid = true;

    // 1. Validate Name
    const sanitizedName = sanitizeHTML(inputName.value);
    if (!sanitizedName) {
      inputName.parentElement.classList.add('invalid');
      isValid = false;
    }

    // 2. Validate Email
    const sanitizedEmail = sanitizeHTML(inputEmail.value);
    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      inputEmail.parentElement.classList.add('invalid');
      isValid = false;
    }

    // 3. Validate Subject
    const sanitizedSubject = sanitizeHTML(inputSubject.value);
    if (!sanitizedSubject) {
      inputSubject.parentElement.classList.add('invalid');
      isValid = false;
    }

    // 4. Validate Message (Min 10 characters)
    const sanitizedMessage = sanitizeHTML(inputMessage.value);
    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      inputMessage.parentElement.classList.add('invalid');
      isValid = false;
    }

    if (!isValid) {
      feedbackEl.textContent = "Please correct the errors in the fields highlighted in red.";
      feedbackEl.classList.add('error');
      feedbackEl.style.display = 'block';
      return;
    }

    // Update Input values with sanitized versions
    inputName.value = sanitizedName;
    inputEmail.value = sanitizedEmail;
    inputSubject.value = sanitizedSubject;
    inputMessage.value = sanitizedMessage;

    // Show redirection feedback
    feedbackEl.textContent = "Validation complete. Redirecting to your email client to compile mail...";
    feedbackEl.classList.add('success');
    feedbackEl.style.display = 'block';

    const destinationMail = '2003abdulwaris@gmail.com';
    const emailSubject = encodeURIComponent(sanitizedSubject);
    const emailBody = encodeURIComponent(
      `Hi Abdul,\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`
    );

    setTimeout(() => {
      // Trigger local mailto compilation
      window.location.href = `mailto:${destinationMail}?subject=${emailSubject}&body=${emailBody}`;
      
      form.reset();
      clearValidationErrors();
    }, 1200);
  });

  // Dynamic feedback clears on type
  inputName.addEventListener('input', () => {
    if (inputName.value.trim()) inputName.parentElement.classList.remove('invalid');
  });
  inputEmail.addEventListener('input', () => {
    if (inputEmail.value.trim() && emailRegex.test(inputEmail.value.trim())) {
      inputEmail.parentElement.classList.remove('invalid');
    }
  });
  inputSubject.addEventListener('input', () => {
    if (inputSubject.value.trim()) inputSubject.parentElement.classList.remove('invalid');
  });
  inputMessage.addEventListener('input', () => {
    if (inputMessage.value.trim() && inputMessage.value.trim().length >= 10) {
      inputMessage.parentElement.classList.remove('invalid');
    }
  });
});
