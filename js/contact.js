/**
 * Rebuilt Light-Theme Contact Form Controller
 * Abdul Waris — Contact Validation
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

  // XSS protection
  const sanitizeInput = (str) => {
    return str.replace(/<[^>]*>/g, '').trim();
  };

  const clearErrors = () => {
    const items = form.querySelectorAll('.form-item');
    items.forEach(i => i.classList.remove('invalid'));
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'form-feedback-overlay';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validate Name
    const nameVal = sanitizeInput(inputName.value);
    if (!nameVal) {
      inputName.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Email
    const emailVal = sanitizeInput(inputEmail.value);
    if (!emailVal || !emailRegex.test(emailVal)) {
      inputEmail.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Subject
    const subjectVal = sanitizeInput(inputSubject.value);
    if (!subjectVal) {
      inputSubject.parentElement.classList.add('invalid');
      isValid = false;
    }

    // Validate Message
    const messageVal = sanitizeInput(inputMessage.value);
    if (!messageVal || messageVal.length < 10) {
      inputMessage.parentElement.classList.add('invalid');
      isValid = false;
    }

    if (!isValid) {
      feedbackEl.textContent = "Please resolve the highlighted errors in the form.";
      feedbackEl.classList.add('error');
      feedbackEl.style.display = 'block';
      return;
    }

    // Sanitize in-place
    inputName.value = nameVal;
    inputEmail.value = emailVal;
    inputSubject.value = subjectVal;
    inputMessage.value = messageVal;

    // Direct mailto compilation
    feedbackEl.textContent = "Validation passed. Launching your default mail client to submit...";
    feedbackEl.classList.add('success');
    feedbackEl.style.display = 'block';

    const destination = '2003abdulwaris@gmail.com';
    const emailSubject = encodeURIComponent(subjectVal);
    const emailBody = encodeURIComponent(
      `Hi Abdul,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${destination}?subject=${emailSubject}&body=${emailBody}`;
      
      form.reset();
      clearErrors();
    }, 1200);
  });

  // Dynamic error removals
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
