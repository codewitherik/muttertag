document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const slideshowContainer = document.getElementById('slideshowContainer');
    const headingsContainer = document.getElementById('headingsContainer');
    const images = [
      "images/WhatsApp Image 2025-05-17 at 17.24.28.jpeg",
    ];
    const headings = [
        'Ich liebe dich',
        'Du bist die Beste!',
        'Du bist so sweet!',
        'Wir lieben Dich!',
    ];
    
    let currentIndex = 0;

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('nameInput').value;

            if (nameInput === 'Mama') {
                window.location.href = 'main.html';
            } else {
                alert('Invalid name. Please enter "Mama".');
            }
        });
    }

    // Initialize slideshow if on main page
    if (slideshowContainer && headingsContainer) {
        function showSlide(index) {
            slideshowContainer.innerHTML = `<img src="${images[index]}" alt="Slideshow Image" />`;
            headingsContainer.innerHTML = `<h1>${headings[index]}</h1>`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        }

        showSlide(currentIndex);
        setInterval(nextSlide, 6000); // Change slide every 5 seconds

        window.nextSlide = nextSlide;
        window.prevSlide = prevSlide;
    }
});

function login() {
    const username = document.getElementById('username').value;
    if (username === 'Mama') {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username');
    }
}

const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart() {
    const size = Math.random() * 20 + 10;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speed = (Math.random() * 1 + 0.5); // Adjusted speed to be slower
    hearts.push({ x, y, size, speed });
}

function drawHeart(heart) {
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y);
    ctx.bezierCurveTo(heart.x + heart.size / 2, heart.y - heart.size / 2, heart.x + heart.size, heart.y + heart.size / 3, heart.x, heart.y + heart.size);
    ctx.bezierCurveTo(heart.x - heart.size, heart.y + heart.size / 3, heart.x - heart.size / 2, heart.y - heart.size / 2, heart.x, heart.y);
    ctx.fillStyle = '#ff69b4';
    ctx.fill();
}

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        if (heart.y < -heart.size) {
            hearts.splice(index, 1);
        }
        drawHeart(heart);
    });
    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 300);
animateHearts();