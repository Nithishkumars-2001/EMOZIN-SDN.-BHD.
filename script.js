//select sidenavbar
var sidenavbar = document.querySelector(".side-navbar")

function shownavbar() {
    sidenavbar.style.left = "0"
}
function closenavbar() {
    sidenavbar.style.left = "-100%"
}


// Home Header 
const images = [
    'image/header-bg1.jpg',
    'image/header-bg2.jpg',
    'image/header-bg3.jpg'
];

const titles = [
    '<i class="fa-solid fa-gun me-3"></i>TRIGGER MAFIA',
    '<i class="fa-solid fa-flag-checkered me-3"></i>RACER XTREME',
    '<i class="fa-solid fa-biohazard me-3"></i>DEAD ZONE'
];

const taglines = [
    'Gear Up. Squad Up. Dominate the Arena.',
    'Burn Rubber. Chase Glory. Rule the Tracks.',
    'Lock. Load. Survive the Undead Invasion.'
];

function changeHeader(index) {
    // Change image
    document.getElementById('bgImage').src = images[index];
    // Change content
    document.getElementById('headerTitle').innerHTML = titles[index];
    document.getElementById('headerTagline').textContent = taglines[index];

    // Update active dot
    const dots = document.querySelectorAll('.dot-button');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


/*
const canvas = document.getElementById('cursorTrail');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particlesArray = [];

class Particle {
    constructor(x, y, directionX, directionY) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2; // Random size for the effect
        this.speedX = directionX * Math.random() * 4 + 2; // Speed and direction for outward movement
        this.speedY = directionY * Math.random() * 4 + 2;
        this.alpha = 1;
        this.color = 'rgba(255, 0, 0, 1)'; // Red for gunshot effect
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.03; // Fade effect
        this.size *= 0.98; // Gradually decrease size
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

window.addEventListener('click', (e) => {
    // Shoot particles outward from the cursor position
    for (let i = 0; i < 10; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const directionX = Math.cos(angle); // Direction X based on angle
        const directionY = Math.sin(angle); // Direction Y based on angle
        particlesArray.push(new Particle(e.x, e.y, directionX, directionY));
    }
});

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Remove particles once they fade out
        if (particlesArray[i].alpha <= 0) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();
*/
