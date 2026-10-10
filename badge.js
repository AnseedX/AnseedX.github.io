/* =========================================================
   Lanyard ID badge — a rope-constrained pendulum (Verlet).
   Grab it, toss it, it swings back. Strap follows the badge.
   ========================================================= */
(function () {
  const stage = document.getElementById("badgeStage");
  const badge = document.getElementById("badge");
  const path = document.getElementById("strapPath");
  if (!stage || !badge) return;

  const LINKEDIN = "https://www.linkedin.com/in/ansaff";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- QR code (real, scannable) ----
  try {
    if (typeof qrcode !== "undefined") {
      const qr = qrcode(0, "M");
      qr.addData(LINKEDIN); qr.make();
      document.getElementById("badgeQr").innerHTML = qr.createSvgTag({ cellSize: 2, margin: 0, scalable: true });
    }
  } catch (e) { /* QR is decorative if the CDN is unavailable */ }

  // ---- Barcode (deterministic from the name) ----
  const bars = Array.from("MOHAMEDANSAFFAIENGINEER", c => c.charCodeAt(0));
  let bx = 0, rects = "";
  bars.forEach((n, i) => {
    const w = 1 + (n % 3), gap = 1 + ((n >> 2) % 2);
    rects += `<rect x="${bx}" y="0" width="${w}" height="24"/>`;
    bx += w + gap;
  });
  document.getElementById("badgeBarcode").innerHTML =
    `<svg viewBox="0 0 ${bx} 24" preserveAspectRatio="none" aria-hidden="true"><g fill="currentColor">${rects}</g></svg>`;

  // ---- Physics ----
  const GRAVITY = 0.55, DAMP = 0.988;
  let L = 200;                     // rope length (px)
  let anchor = { x: 0, y: 0 };     // in stage coordinates
  let p = { x: 0, y: L }, pp = { x: 0, y: L };   // badge clip point, relative to anchor
  let rot = 0, rotV = 0;
  let drag = null, active = false, running = false;

  function layout() {
    const w = stage.clientWidth;
    anchor = { x: w / 2, y: -110 };
    L = Math.max(170, Math.min(230, w * 0.5));
  }

  function step() {
    if (drag) {
      pp = { ...p };
      p = { x: drag.x - anchor.x, y: drag.y - anchor.y };
      const d = Math.hypot(p.x, p.y), max = L * 1.12;
      if (d > max) { p.x = p.x / d * max; p.y = p.y / d * max; }
    } else {
      const vx = (p.x - pp.x) * DAMP, vy = (p.y - pp.y) * DAMP;
      pp = { ...p };
      p.x += vx; p.y += vy + GRAVITY;
      const d = Math.hypot(p.x, p.y);
      if (d > L) { p.x = p.x / d * L; p.y = p.y / d * L; }   // rope is taut
    }
    // badge aligns with the rope, with a little springy lag
    const target = -Math.atan2(p.x, p.y) * 180 / Math.PI + (drag ? (p.x - pp.x) * 1.2 : 0);
    rotV += (target - rot) * 0.12; rotV *= 0.82; rot += rotV;
  }

  function render() {
    const cx = anchor.x + p.x, cy = anchor.y + p.y;
    badge.style.transform = `translate(${cx - badge.offsetWidth / 2}px, ${cy}px) rotate(${rot}deg)`;
    // strap: anchor → clip, sagging when slack
    const d = Math.hypot(p.x, p.y), slack = Math.max(0, L - d);
    const mx = anchor.x + p.x / 2, my = anchor.y + p.y / 2 + slack * 0.6;
    path.setAttribute("d", `M ${anchor.x} ${anchor.y} Q ${mx} ${my} ${cx} ${cy}`);
  }

  function loop() {
    step(); render();
    const moving = drag || Math.abs(p.x - pp.x) + Math.abs(p.y - pp.y) > 0.02 || Math.abs(rotV) > 0.01;
    if (active && moving) requestAnimationFrame(loop); else running = false;
  }
  const kick = () => { if (!running && !reduced) { running = true; requestAnimationFrame(loop); } };

  // ---- Pointer ----
  const local = e => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  badge.addEventListener("pointerdown", e => {
    e.preventDefault();
    badge.setPointerCapture(e.pointerId);
    const pt = local(e);
    drag = { x: pt.x, y: pt.y, ox: pt.x - (anchor.x + p.x), oy: pt.y - (anchor.y + p.y) };
    drag.x -= drag.ox; drag.y -= drag.oy;
    stage.classList.add("is-dragging");
    kick();
  });
  badge.addEventListener("pointermove", e => {
    if (!drag) return;
    const pt = local(e);
    drag.x = pt.x - drag.ox; drag.y = pt.y - drag.oy;
  });
  const release = () => { if (!drag) return; drag = null; stage.classList.remove("is-dragging"); stage.classList.add("was-touched"); kick(); };
  badge.addEventListener("pointerup", release);
  badge.addEventListener("pointercancel", release);

  // ---- Start: drop in with a swing when scrolled into view ----
  layout();
  p = { x: 0, y: L }; pp = { ...p }; render();
  addEventListener("resize", () => { layout(); render(); kick(); });

  new IntersectionObserver(([e]) => {
    active = e.isIntersecting;
    if (active && !stage.dataset.swung && !reduced) {
      stage.dataset.swung = "1";
      p = { x: L * 0.55, y: L * 0.6 }; pp = { x: L * 0.55 - 6, y: L * 0.6 };
    }
    if (active) kick();
  }, { threshold: 0.2 }).observe(stage);
})();
