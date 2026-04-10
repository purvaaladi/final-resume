// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// 🌌 Star Background Animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((s, i) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        s.x += s.dx;
        s.y += s.dy;

        for (let j = i + 1; j < stars.length; j++) {
            let s2 = stars[j];
            let dist = Math.hypot(s.x - s2.x, s.y - s2.y);

            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.strokeStyle = "rgba(255,255,255,0.1)";
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animate);
}

animate();