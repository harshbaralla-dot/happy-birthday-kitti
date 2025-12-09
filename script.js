// CONFETTI EFFECT
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
    });

    updateConfetti();
    requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
    confetti.forEach((c) => {
        c.y += c.d + 2;
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
}

drawConfetti();

// SURPRISE BUTTON
document.getElementById("surpriseBtn").addEventListener("click", () => {
    document.getElementById("surprise").classList.remove("hidden");
});
