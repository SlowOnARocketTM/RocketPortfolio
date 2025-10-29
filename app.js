// Navigation scroll effect
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Typing animation for hero tagline
const taglineText = "Building innovative tools, streaming adventures, and creating content";
const taglineElement = document.getElementById('heroTagline');
let charIndex = 0;

function typeWriter() {
  if (charIndex < taglineText.length) {
    taglineElement.textContent += taglineText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing animation after page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 800);
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

// Skills animation - animate progress bars when visible
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !skillsAnimated) {
      animateSkills();
      skillsAnimated = true;
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar, index) => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
      bar.style.width = progress + '%';
      bar.classList.add('animate');
    }, index * 100);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add parallax effect to hero background
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxSpeed = 0.5;
  
  if (heroBackground && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(-8px)';
  });
});

// Reset card transform on mouse leave completely
projectCards.forEach(card => {
  card.addEventListener('mouseleave', function() {
    // Small delay to ensure smooth transition
    setTimeout(() => {
      if (!this.matches(':hover')) {
        this.style.transform = '';
      }
    }, 10);
  });
});

// Add active link highlighting based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  // Also check hero section
  const hero = document.querySelector('.hero');
  if (hero && window.pageYOffset < hero.clientHeight - 100) {
    current = 'home';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add console easter egg
console.log("%cSlowOnARocket 🚀", "color: #32b8c6; font-size: 24px; font-weight: bold;");
console.log("%cHey there! Thanks for checking out my portfolio.", "color: #a7a9a9; font-size: 14px;");
console.log("%cIf you're interested in collaborating or just want to chat, feel free to reach out!", "color: #a7a9a9; font-size: 14px;");
console.log("%cTwitch: https://twitch.tv/slowonarocket", "color: #9146FF; font-size: 12px;");
console.log("%cGitHub: https://github.com/slowonarocket", "color: #fff; font-size: 12px;");