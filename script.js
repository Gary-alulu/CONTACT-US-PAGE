document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');
    const submitBtn = document.querySelector('.submit-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');

    // Form validation rules
    const validationRules = {
        firstName: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Please enter a valid first name (letters only, min 2 characters)'
        },
        lastName: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Please enter a valid last name (letters only, min 2 characters)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        phone: {
            required: false,
            pattern: /^[\+]?[1-9][\d]{0,15}$/,
            message: 'Please enter a valid phone number'
        },
        subject: {
            required: true,
            message: 'Please select a subject'
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            message: 'Message must be between 10 and 1000 characters'
        }
    };

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    function validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value.trim();
        const rule = validationRules[fieldName];
        const formGroup = field.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');

        // Clear previous error
        formGroup.classList.remove('error');
        errorMessage.textContent = '';

        // Check if field is required and empty
        if (rule.required && !fieldValue) {
            showError(formGroup, 'This field is required');
            return false;
        }

        // Skip further validation if field is optional and empty
        if (!rule.required && !fieldValue) {
            return true;
        }

        // Check minimum length
        if (rule.minLength && fieldValue.length < rule.minLength) {
            showError(formGroup, rule.message);
            return false;
        }

        // Check maximum length
        if (rule.maxLength && fieldValue.length > rule.maxLength) {
            showError(formGroup, rule.message);
            return false;
        }

        // Check pattern
        if (rule.pattern && !rule.pattern.test(fieldValue)) {
            showError(formGroup, rule.message);
            return false;
        }

        return true;
    }

    function showError(formGroup, message) {
        formGroup.classList.add('error');
        formGroup.querySelector('.error-message').textContent = message;
    }

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Focus first error field
            const firstError = contactForm.querySelector('.error input, .error select, .error textarea');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        // Show loading state
        setLoadingState(true);

        // Simulate form submission (replace with actual API call)
        try {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate API delay
            await simulateApiCall(data);
            
            // Show success
            showSuccessModal();
            contactForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            setLoadingState(false);
        }
    });

    function setLoadingState(loading) {
        if (loading) {
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-block';
        } else {
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    }

    function simulateApiCall(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data submitted:', data);
                resolve();
            }, 2000);
        });
    }

    function showSuccessModal() {
        successModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideSuccessModal() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Modal event listeners
    closeModal.addEventListener('click', hideSuccessModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            hideSuccessModal();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.contact-info, .contact-form-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });

    // Character counter for message
    const messageInput = document.getElementById('message');
    const maxLength = 1000;
    
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        if (currentLength > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
    });

    // Add floating labels effect
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check initial state
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.style.display === 'block') {
            hideSuccessModal();
        }
    });
});