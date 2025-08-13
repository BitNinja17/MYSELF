// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Enhanced Particle System for Hero Section
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = document.querySelector('.particle-container');
        this.maxParticles = 80;
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 8 + 6;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                animation: particleFloat ${duration}s linear infinite;
                animation-delay: ${delay}s;
                background: ${this.getRandomGradient()};
            `;
            
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }

    getRandomGradient() {
        const gradients = [
            'linear-gradient(45deg, #00d4ff, #ff00ff)',
            'linear-gradient(45deg, #ff00ff, #00ff88)',
            'linear-gradient(45deg, #00ff88, #00d4ff)',
            'linear-gradient(45deg, #ff6b6b, #00d4ff)',
            'linear-gradient(45deg, #feca57, #ff00ff)'
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    }

    animate() {
        // Add subtle movement to particles
        this.particles.forEach((particle, index) => {
            setInterval(() => {
                if (particle.parentNode) {
                    const currentX = parseFloat(particle.style.left);
                    const currentY = parseFloat(particle.style.top);
                    const newX = currentX + (Math.random() - 0.5) * 2;
                    const newY = currentY + (Math.random() - 0.5) * 2;
                    
                    particle.style.left = `${Math.max(0, Math.min(100, newX))}%`;
                    particle.style.top = `${Math.max(0, Math.min(100, newY))}%`;
                }
            }, 3000 + index * 100);
        });
    }
}

// Enhanced Typing Effect
class TypingEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = 2000; // Wait at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500; // Wait before typing next
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Enhanced Floating Elements Animation
function enhanceFloatingElements() {
    const elements = document.querySelectorAll('.element');
    
    elements.forEach((element, index) => {
        // Add mouse interaction
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.5) rotate(360deg)';
            element.style.filter = 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) rotate(0deg)';
            element.style.filter = 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))';
        });
        
        // Add click effect
        element.addEventListener('click', () => {
            element.style.transform = 'scale(2) rotate(720deg)';
            setTimeout(() => {
                element.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
}

// Enhanced Profile Photo Effects
function enhanceProfilePhoto() {
    const profileImg = document.querySelector('.profile-img');
    const profileContainer = document.querySelector('.profile-container');
    
    if (profileImg) {
        // Add 3D tilt effect on mouse move
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            profileImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        profileContainer.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
        
        // Add click effect
        profileImg.addEventListener('click', () => {
            profileImg.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                profileImg.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
}

// Enhanced Code Window Animation
function enhanceCodeWindow() {
    const codeWindow = document.querySelector('.code-window');
    const codeLines = document.querySelectorAll('.code-line');
    
    if (codeWindow) {
        // Add typing sound effect simulation
        codeLines.forEach((line, index) => {
            line.addEventListener('mouseenter', () => {
                line.style.color = '#00d4ff';
                line.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
            });
            
            line.addEventListener('mouseleave', () => {
                line.style.color = '';
                line.style.textShadow = '';
            });
        });
        
        // Add keyboard typing effect
        let isTyping = false;
        codeWindow.addEventListener('click', () => {
            if (!isTyping) {
                isTyping = true;
                codeLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.style.opacity = '1';
                        line.style.transform = 'translateX(0)';
                    }, index * 100);
                });
                setTimeout(() => {
                    isTyping = false;
                }, codeLines.length * 100 + 1000);
            }
        });
    }
}

// Enhanced Badge Interactions
function enhanceBadges() {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach((badge, index) => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.2) translateY(-20px)';
            badge.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.4)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1) translateY(0)';
            badge.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
        });
        
        // Add click effect
        badge.addEventListener('click', () => {
            badge.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                badge.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
}

// Enhanced Circle Animations
function enhanceCircles() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        // Add hover effect
        circle.addEventListener('mouseenter', () => {
            circle.style.transform = 'scale(1.3) rotate(180deg)';
            circle.style.borderColor = 'rgba(0, 212, 255, 0.8)';
        });
        
        circle.addEventListener('mouseleave', () => {
            circle.style.transform = 'scale(1) rotate(0deg)';
            circle.style.borderColor = 'rgba(0, 212, 255, 0.3)';
        });
    });
}

// Enhanced Scroll Animations
function enhanceScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const animatedChildren = entry.target.querySelectorAll('.animate-child');
                animatedChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.about-text p, .timeline-item, .skill-category, .project-card, .education-card').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced Button Interactions
function enhanceButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        // Add magnetic effect
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
        
        // Enhanced ripple effect
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
                border-radius: 50%;
                transform: scale(0);
                animation: enhancedRipple 0.8s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
}

// Add enhanced ripple animation to CSS
const enhancedRippleStyle = document.createElement('style');
enhancedRippleStyle.textContent = `
    @keyframes enhancedRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(enhancedRippleStyle);

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem();
    
    // Initialize typing effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingEffect(typingElement, [
            'Building the future of healthtech',
            'Leading innovative platforms',
            'Creating scalable solutions',
            'Driving digital transformation'
        ], 80);
    }
    
    // Initialize enhanced features
    enhanceFloatingElements();
    enhanceProfilePhoto();
    enhanceCodeWindow();
    enhanceBadges();
    enhanceCircles();
    enhanceScrollAnimations();
    enhanceButtons();
    
    console.log('Enhanced Portfolio loaded with advanced animations!');
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 30px 60px rgba(0, 212, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.1)';
    });
});

// Timeline items hover effect
document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.25)';
    });
    
    content.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:rajeshruniwal17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        
        // Reset form
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#00d4ff' : '#ff6b6b'};
        color: #000;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Cursor trail effect
let mouseX = 0;
let mouseY = 0;
let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create cursor trail element
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: rgba(0, 212, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX}px;
        top: ${mouseY}px;
        transition: all 0.1s ease;
    `;
    
    document.body.appendChild(trail);
    cursorTrail.push(trail);
    
    // Limit trail length
    if (cursorTrail.length > 20) {
        const oldTrail = cursorTrail.shift();
        if (oldTrail && oldTrail.parentNode) {
            oldTrail.parentNode.removeChild(oldTrail);
        }
    }
    
    // Animate trail elements
    cursorTrail.forEach((trailElement, index) => {
        setTimeout(() => {
            if (trailElement && trailElement.parentNode) {
                trailElement.style.opacity = '0';
                trailElement.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    if (trailElement && trailElement.parentNode) {
                        trailElement.parentNode.removeChild(trailElement);
                        cursorTrail = cursorTrail.filter(t => t !== trailElement);
                    }
                }, 100);
            }
        }, index * 50);
    });
});

// Smooth reveal animations for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    revealObserver.observe(section);
});
