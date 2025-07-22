const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

for (let i = 0; i < 150; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1.5 + 0.5,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    ctx.fillStyle = heart.color;
    ctx.beginPath();
    const x = heart.x, y = heart.y, s = heart.size;
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + s/2, y - s, x + s*2, y + s/3, x, y + s*2);
    ctx.bezierCurveTo(x - s*2, y + s/3, x - s/2, y - s, x, y);
    ctx.fill();
  });
  update();
}

function update() {
  hearts.forEach((h) => {
    h.y += h.speed;
    if (h.y > canvas.height) {
      h.y = -10;
      h.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
