/* ============================================================
   1. SCROLL REVEAL
   IntersectionObserver fires when an element enters the
   viewport. We add .is-visible once, then stop watching it.
   ============================================================ */
const revealEls = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ============================================================
   2. NAV SCROLL-SPY
   Highlights the nav link for whichever section is centred.
   ============================================================ */
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === "#" + entry.target.id
        )
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => spyObserver.observe(section));

/* ============================================================
   3. HERO SPARKLINE
   A random walk drawn on <canvas>, ticking one point every
   ~55ms so it feels like a live index rather than a static image.
   ============================================================ */
(function sparkline() {
  const canvas = document.getElementById("spark");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const N = 120;        // number of data points
  let series = [];
  let width = 0;
  let height = 0;

  // Build a plausible random-walk series between 0.08 and 0.92
  function seed() {
    series = [];
    let value = 0.5;
    for (let i = 0; i < N; i++) {
      value += (Math.random() - 0.5) * 0.09;
      value = Math.max(0.08, Math.min(0.92, value));
      series.push(value);
    }
  }

  // Canvas needs a device-pixel-ratio correction or it looks blurry
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const stepX = width / (N - 1);
    const toY = (v) => height - (v * height * 0.8 + height * 0.1);

    // area fill under the line
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(47,158,122,0.22)");
    gradient.addColorStop(1, "rgba(47,158,122,0)");

    ctx.beginPath();
    ctx.moveTo(0, height);
    series.forEach((v, i) => ctx.lineTo(i * stepX, toY(v)));
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // the line itself
    ctx.beginPath();
    series.forEach((v, i) =>
      i ? ctx.lineTo(i * stepX, toY(v)) : ctx.moveTo(0, toY(v))
    );
    ctx.strokeStyle = "#2f9e7a";
    ctx.lineWidth = 1.6;
    ctx.lineJoin = "round";
    ctx.stroke();

    // glowing dot on the newest point
    ctx.beginPath();
    ctx.arc(width - 1, toY(series[N - 1]), 3, 0, Math.PI * 2);
    ctx.fillStyle = "#2f9e7a";
    ctx.fill();
  }

  let lastTick = 0;

  function tick(timestamp) {
    if (timestamp - lastTick > 55) {
      lastTick = timestamp;

      // push a new value on the right, drop the oldest on the left
      let next = series[N - 1] + (Math.random() - 0.5) * 0.09;
      next = Math.max(0.08, Math.min(0.92, next));
      series.push(next);
      series.shift();

      draw();
    }
    if (!reduced) requestAnimationFrame(tick);
  }

  seed();
  resize();
  draw();

  if (!reduced) requestAnimationFrame(tick);

  window.addEventListener("resize", () => {
    resize();
    draw();
  });
})();

/* ============================================================
   4. FOOTER YEAR
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
/* ============================================================
   5. STARTER JAR RISES WITH SCROLL
   ============================================================ */
(function rise() {
  let ticking = false;
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty("--rise", max > 0 ? Math.min(scrollY / max, 1).toFixed(3) : 0);
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

/* ============================================================
   6. RECIPE INGREDIENTS -> individual tags that drop in
   ============================================================ */
document.querySelectorAll(".recipe-ingredients").forEach((el) => {
  const items = el.textContent.split("·").map((t) => t.trim()).filter(Boolean);
  el.textContent = "";
  items.forEach((text, i) => {
    const tag = document.createElement("span");
    tag.className = "ing";
    tag.style.setProperty("--i", i);
    tag.textContent = text;
    el.appendChild(tag);
  });
});