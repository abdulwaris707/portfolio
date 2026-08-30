/**
 * Interactive Contact Form & Validation Module
 * Abdul Waris — Contact Portal Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputName = document.getElementById('form-name');
  const inputEmail = document.getElementById('form-email');
  const inputSubject = document.getElementById('form-subject');
  const inputMessage = document.getElementById('form-message');
  const feedbackEl = document.getElementById('form-feedback');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorSubject = document.getElementById('error-subject');
  const errorMessage = document.getElementById('error-message');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  };

  const clearErrors = () => {
    const groups = form.querySelectorAll('.form-group');
    groups.forEach(g => g.classList.remove('invalid'));
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'form-feedback';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Name
    if (!inputName.value.trim()) {
      inputName.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Email
    if (!inputEmail.value.trim() || !validateEmail(inputEmail.value)) {
      inputEmail.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Subject
    if (!inputSubject.value.trim()) {
      inputSubject.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Message (Min 10 characters)
    if (!inputMessage.value.trim() || inputMessage.value.trim().length < 10) {
      inputMessage.parentElement.classList.add('invalid');
      isValid = false;
    }

    if (!isValid) {
      feedbackEl.textContent = "Please correct the highlighted errors in the form.";
      feedbackEl.classList.add('error');
      feedbackEl.style.display = 'block';
      return;
    }

    // Form is valid - Trigger client-side mailto redirect (Truthful feedback)
    feedbackEl.textContent = "Form validated. Redirecting to your email client to complete transmission...";
    feedbackEl.classList.add('success');
    feedbackEl.style.display = 'block';

    const destinationEmail = '2003abdulwaris@gmail.com';
    const subject = encodeURIComponent(inputSubject.value.trim());
    const bodyStr = `Hi Abdul,\n\nName: ${inputName.value.trim()}\nEmail: ${inputEmail.value.trim()}\n\nMessage:\n${inputMessage.value.trim()}`;
    const body = encodeURIComponent(bodyStr);

    setTimeout(() => {
      // Trigger the mail client
      window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
      
      // Clear inputs
      form.reset();
      clearErrors();
    }, 1200);
  });

  // Real-time cleanup validations on input typing
  inputName.addEventListener('input', () => {
    if (inputName.value.trim()) inputName.parentElement.classList.remove('invalid');
  });
  inputEmail.addEventListener('input', () => {
    if (inputEmail.value.trim() && validateEmail(inputEmail.value)) {
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
