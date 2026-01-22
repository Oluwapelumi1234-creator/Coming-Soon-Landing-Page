/*
  Project: Coming Soon Landing Page
  Author: Odujoko Favour Oluwapelumi
  GitHub: https://github.com/Oluwapelumi1234-creator
  Description: Countdown logic, particle system, and interactivity
*/

/* COUNTDOWN */
const launchDate = new Date("Dec 31, 2026 00:00:00").getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff < 0) return;

    d.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    h.textContent = Math.floor(diff / (1000 * 60 * 60) % 24).toString().padStart(2,"0");
    m.textContent = Math.floor(diff / (1000 * 60) % 60).toString().padStart(2,"0");
    s.textContent = Math.floor(diff / 1000 % 60).toString().padStart(2,"0");
}, 1000);

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({length:80}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2 + 1,
    dx: Math.random() - .5,
    dy: Math.random() - .5
}));

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(0,255,213,0.6)";

    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

/* FORM */
document.getElementById("emailForm").addEventListener("submit", e=>{
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.textContent = "Subscribed ✔";
    btn.disabled = true;
});

console.info(
  "Built by Odujoko Favour Oluwapelumi | GitHub: https://github.com/Oluwapelumi1234-creator"
);
