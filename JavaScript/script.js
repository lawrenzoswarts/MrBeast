window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    var footer = document.querySelector('footer');
  
    if (window.pageYOffset > 0) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  
    if (footer.getBoundingClientRect().top <= window.innerHeight) {
      backToTopButton.classList.add('dark');
    } else {
      backToTopButton.classList.remove('dark');
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form validation using JavaScript

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  // Perform form validation
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  // Validate form fields
  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (phone.trim() === '') {
    alert('Please enter your phone number');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email address');
    return;
  }

  if (comments.trim() === '') {
    alert('Please enter your comments');
    return;
  }

  // If all fields are valid, you can submit the form or perform further actions
  // For this example, we'll simply log the form data
  console.log('Form submitted');
  console.log('Name:', name);
  console.log('Phone:', phone);
  console.log('Email:', email);
  console.log('Comments:', comments);

  // Reset the form
  contactForm.reset();
});

// Callback button event listener
const callbackButton = document.getElementById('callback-button');
callbackButton.addEventListener('click', () => {
  // Handle callback request
  console.log('Callback requested');
});


// Slideshow functionality
const slideshow = document.querySelector('.slideshow');
const slides = Array.from(slideshow.getElementsByTagName('img'));
let currentSlide = 0;

function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Event listeners for slideshow buttons
const prevButton = document.querySelector('.slideshow-controls button:nth-child(1)');
const nextButton = document.querySelector('.slideshow-controls button:nth-child(2)');

prevButton.addEventListener('click', function () {
  changeSlide(-1);
});

nextButton.addEventListener('click', function () {
  changeSlide(1);
});

// Open social media link in a new tab
const socialMediaLink = document.querySelector('.social-media-section iframe');

if (socialMediaLink) {
  socialMediaLink.addEventListener('load', function () {
    const iframeWindow = socialMediaLink.contentWindow;
    const anchorLinks = iframeWindow.document.querySelectorAll('a');

    anchorLinks.forEach(function (link) {
      link.setAttribute('target', '_blank');
    });
  });
}