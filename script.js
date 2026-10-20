/* =========================================================
   CONTENT — edit everything about you here
   image / hoverImage are optional: drop files in /images and
   set e.g. image: "images/milo.jpg". Without them a generated
   lime artwork is used as a placeholder.
   link: set to a repo / demo / case-study URL.
   ========================================================= */
const GITHUB = "https://github.com/AnseedX";

const CONTENT = {
  currentProject: "Chess Coach Agent",

  // Horizontal "in production" gallery — AirAsia work
  gallery: [
    { art: "mcp", title: "MCP Server", tag: "gcp · infra", desc: "Internal MCP server standardising tool-calling for agents across teams", seed: 1 },
    { art: "legal", title: "Legal Q&A Agent", tag: "google adk", desc: "Contract & compliance answers in seconds instead of days, fully auditable", seed: 2 },
    { art: "brd", title: "BRD Generator", tag: "google adk", desc: "Turns stakeholder input into standard specs — ~40–50% faster scoping", seed: 3 },
    { art: "email", title: "Email-Routing Agent", tag: "gemini", desc: "Autonomous triage for high-volume mailboxes with SLA-compliant routing", seed: 4 },
    { art: "pipeline", title: "Ingestion Pipeline", tag: "gcp · data", desc: "Structures unstructured comms data — 50% less processing overhead", seed: 5 },
    { art: "link", title: "Link Service", tag: "gcp · security", desc: "Least-privilege IAM and audit logging for campaign redirects", seed: 6 },
  ],

  // Featured project (the "helmet of the year")
  feature: {
    art: "chessFeature",
    title: "Chess Coach Agent",
    year: "2026",
    desc: "An AI chess coach built on Google ADK. Stockfish analyses every move of your game and flags the mistakes, then a Gemini agent explains them in plain language at your rating level — grounded in engine-verified lines and deployed on Cloud Run.",
    metrics: [
      { value: "~3s", label: "engine review per game" },
      { value: "4–6", label: "gemini calls per review" },
      { value: "3", label: "coaching levels" },
    ],
    link: "https://github.com/AnseedX/chess-coach-agent",
    seed: 15,
  },

  // Project grid (the "hall of fame")
  projects: [
    { art: "miloCard", title: "Milo", year: "2026", desc: "Offline-first coding CLI bringing agentic workflows to local LLMs", tags: ["Local LLMs", "Agents", "CLI"], link: GITHUB, seed: 7 },
    { art: "agronus", title: "Agronus", year: "2025", desc: "RAG-powered copilot giving farmers real-time, grounded guidance", tags: ["RAG", "LLM", "Imagine Cup 2026"], link: GITHUB, seed: 11 },
    { art: "realeye", title: "RealEye", year: "2025", desc: "Frequency-augmented Vision Transformer for deepfake & AI-image detection", tags: ["ViT", "PyTorch", "91% recall"], link: GITHUB, seed: 12 },
    { art: "icu", title: "ICU Posture Monitor", year: "2025–26", desc: "Real-time posture monitoring for bedsore-risk detection", tags: ["Computer Vision", "Healthcare", "95% acc"], link: GITHUB, seed: 13 },
    { art: "healthsync", title: "HealthSync", year: "2024–25", desc: "Multilingual first-aid chatbot & patient-doctor platform for rural care", tags: ["NLP", "Chatbot", "FYP · Grade A"], link: GITHUB, seed: 14 },
  ],

  // "*" after a name marks equal contribution; my name is highlighted
  publications: [
    {
      venue: "WACV 2027", status: "accepted", logo: "images/logos/wacv.svg",
      title: "M-PFT: Angular Margin for Calibrated Prompt-Tuning of Fine-Tuned Vision-Language Models",
      authors: ["Shihab Aaqil Ahamed*", "Mohamed Ansaff*", "Nang Khin Myat Lay Phyu", "Udaya Sampath K. Perera Miriya Thanthrige", "Chamira U. S. Edussooriya", "Ranga Rodrigo", "Muhammad Haris Khan"],
      tags: ["Vision-Language Models", "Prompt Tuning", "Calibration", "Equal first author"],
    },
  ],

  experience: [
    {
      logo: "images/airasia.webp", when: "mar – sep 2026", title: "Artificial Intelligence Intern — AirAsia", where: "Kuala Lumpur · AI team · Google Cloud",
      text: "Drove generative and agentic AI initiatives within AirAsia's AI team, shipping ADK agents, MCP infrastructure and secure data pipelines to production.",
      points: [
        "Architected and deployed an internal MCP server on GCP, standardising tool-calling for agents across teams",
        "Built a Legal Q&A ADK agent that cut contract review turnaround from days to seconds, with full auditability",
        "Built a BRD-generation ADK agent that cut feature-scoping cycle time by ~40–50% for product managers",
        "Engineered a Gemini-powered email triage and routing agent for high-volume shared mailboxes with SLA-compliant routing",
        "Built a GCP ingestion pipeline for unstructured communications data, cutting processing overhead by 50%",
        "Built a link-management microservice with least-privilege IAM and automated audit logging",
      ],
    },
  ],

  education: [
    {
      logo: "images/aiu.png", when: "oct 2023 – oct 2026", title: "Bachelor in Computer Science (Hons) — Data Science", where: "Al-Bukhary International University · Malaysia",
      text: "CGPA 3.62 / 4.00 · Fully funded scholarship recipient.",
      tags: ["Machine Learning", "Deep Learning", "Data Mining", "Probability & Statistics", "DSA", "OOP", "Software Engineering", "Cloud Computing"],
    },
  ],

  stack: [
    ["Python", "language"], ["SQL", "language"], ["Google ADK", "agents"], ["MCP", "tool protocol"],
    ["LangChain", "llm apps"], ["RAG", "retrieval"], ["PyTorch", "deep learning"], ["TensorFlow", "deep learning"],
    ["Scikit-Learn", "ml"], ["Vertex AI", "gcp"], ["BigQuery", "gcp"], ["Cloud Run", "gcp"],
    ["FastAPI", "apis"], ["Docker", "containers"], ["Git · CI/CD", "delivery"], ["R · Bash", "tooling"],
  ],

  credentials: [
    { date: "certification", title: "Google Cloud Certified: Generative AI Leader", kind: "google cloud", logo: "images/logos/google-cloud.png" },
    { date: "course", title: "AI Research Foundations", kind: "google deepmind", logo: "images/logos/deepmind.png" },
    { date: "specialization", title: "Machine Learning Specialization", kind: "stanford · deeplearning.ai", logo: "images/logos/deeplearning-ai.png", logoScale: 1.6 },
    { date: "course", title: "Mathematics for ML: Linear Algebra", kind: "imperial college london", logo: "images/logos/imperial.png" },
    { date: "course", title: "Google Cloud Computing Foundations", kind: "google", logo: "images/logos/google.png" },
    { date: "2023–26", title: "Fully Funded Scholarship", kind: "al-bukhary international university", logo: "images/aiu.png" },
    { date: "2025", title: "Arena Candidate Master (ACM)", kind: "official fide title", logo: "images/logos/fide.png" },
    { date: "chess", title: "Provincial Chess Champion", kind: "sri lanka", logo: "images/logos/sri-lanka.png" },
  ],
};

/* =========================================================
   Generated placeholder art (lime/dark generative SVG)
   ========================================================= */
function rand(seed) {
  let s = seed * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}
function art(seed, alt = false) {
  const r = rand(seed + (alt ? 100 : 0));
  const bg = alt ? "#d2ff00" : "#ebeee0";
  const fg = "#282c20";
  const pts = Array.from({ length: 26 }, () => [r() * 400, r() * 500]);
  let lines = "";
  pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
    const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (d < 130) lines += `<line x1="${a[0]|0}" y1="${a[1]|0}" x2="${b[0]|0}" y2="${b[1]|0}" stroke="${fg}" stroke-opacity="${(1 - d / 130) * 0.7}" stroke-width="1"/>`;
  }));
  const dots = pts.map(p => `<circle cx="${p[0]|0}" cy="${p[1]|0}" r="${2 + r() * 4}" fill="${fg}"/>`).join("");
  const ring = `<circle cx="${200 + r() * 80 - 40}" cy="${250 + r() * 80 - 40}" r="${90 + r() * 70}" fill="none" stroke="${fg}" stroke-width="1" stroke-dasharray="3 7" opacity=".6"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice"><rect width="400" height="500" fill="${bg}"/>${ring}${lines}${dots}</svg>`;
  return `<img alt="" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">`;
}
const media = (item, alt) => {
  const src = alt ? item.hoverImage : item.image;
  if (src) return `<img alt="${item.title}" src="${src}">`;
  return item.art && typeof ART !== "undefined" && ART[item.art] ? ART[item.art](alt ? LIME : LIGHT) : art(item.seed, alt);
};
const ext = url => (url && url.startsWith("http") ? ' target="_blank" rel="noopener"' : "");

/* =========================================================
   Render content
   ========================================================= */
const $ = s => document.querySelector(s);
$("#year").textContent = new Date().getFullYear();
$("#currentProject").textContent = CONTENT.currentProject;

$("#galleryTrack").innerHTML = CONTENT.gallery.map(g => `
  <figure class="shot">
    <div class="shot__art"><div class="base">${media(g)}</div><div class="hover">${media(g, true)}</div></div>
    <figcaption class="shot__cap">
      <div><h4>${g.title}</h4><p>${g.desc}</p></div>
      <span class="mono">${g.tag}</span>
    </figcaption>
  </figure>`).join("");

const f = CONTENT.feature;
$("#featureProject").innerHTML = `
  <a class="feature__art" href="${f.link}"${ext(f.link)} data-cursor="view repo">${media(f)}</a>
  <div>
    <span class="mono lime">featured · ${f.year}</span>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
    <div class="feature__metrics">${f.metrics.map(m => `<div><b>${m.value}</b><span>${m.label}</span></div>`).join("")}</div>
  </div>`;
document.querySelectorAll(".feature__art img").forEach(i => (i.style.cssText = "width:100%;height:100%;object-fit:cover"));

$("#projectGrid").innerHTML = CONTENT.projects.map(p => `
  <a class="card" href="${p.link}"${ext(p.link)} data-cursor="open">
    <div class="card__art"><div class="base">${media(p)}</div><div class="hover">${media(p, true)}</div></div>
    <div class="card__meta"><h4>${p.title}</h4><span class="mono">${p.year}</span></div>
    <p class="card__desc">${p.desc}</p>
    <div class="card__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
  </a>`).join("");
document.querySelectorAll(".card__art img").forEach(i => (i.style.cssText = "width:100%;height:100%;object-fit:cover"));

const timeline = items => items.map(j => `
  <li class="journey__item">
    <div class="journey__side">${j.logo ? `<span class="journey__logo"><img src="${j.logo}" alt=""></span>` : ""}<span class="mono journey__when">${j.when}</span></div>
    <div>
      <h3>${j.title}</h3>
      <span class="mono lime">${j.where}</span>
      <p>${j.text}</p>
      ${j.points ? `<ul class="journey__points">${j.points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
      ${j.tags ? `<div class="journey__tags">${j.tags.map(t => `<span>${t}</span>`).join("")}</div>` : ""}
    </div>
  </li>`).join("");
$("#experienceList").innerHTML = timeline(CONTENT.experience);
$("#educationList").innerHTML = timeline(CONTENT.education);

const ME = "Mohamed Ansaff";
$("#publicationList").innerHTML = CONTENT.publications.map(p => `
  <li class="journey__item pub">
    <div class="journey__side">${p.logo ? `<img class="pub__logo" src="${p.logo}" alt="${p.venue}">` : `<span class="pub__venue">${p.venue}</span>`}<span class="mono journey__when">${p.logo ? `${p.venue.toLowerCase()} · ` : ""}${p.status}</span></div>
    <div>
      <h3>${p.title}</h3>
      <p class="pub__authors">${p.authors.map(a => {
        const n = a.replace(/\*$/, "<sup>*</sup>");
        return a.startsWith(ME) ? `<b>${n}</b>` : n;
      }).join(", ")}</p>
      ${p.authors.some(a => a.endsWith("*")) ? `<span class="mono pub__note"><sup>*</sup> equal contribution</span>` : ""}
      ${p.tags ? `<div class="journey__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>` : ""}
    </div>
  </li>`).join("");

$("#stackGrid").innerHTML = CONTENT.stack.map(([n, k]) => `<div class="tool"><span>${k}</span><b>${n}</b></div>`).join("");

$("#writingList").innerHTML = CONTENT.credentials.map(w => `
  <li><div class="row cred">
    <span class="cred__logo"><img src="${w.logo}" alt="" loading="lazy"${w.logoScale ? ` style="transform:scale(${w.logoScale})"` : ""}></span>
    <div><h4>${w.title}</h4><span class="mono">${w.kind} · ${w.date}</span></div>
  </div></li>`).join("");

// Split message into words for scroll reveal
document.querySelectorAll(".reveal-words").forEach(el => {
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part.trim()) return frag.append(part);
          const s = document.createElement("span");
          s.className = "w"; s.textContent = part; frag.append(s);
        });
        n.replaceWith(frag);
      } else walk(n);
    });
  };
  walk(el);
});

/* =========================================================
   Menu
   ========================================================= */
$("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

/* =========================================================
   Custom cursor
   ========================================================= */
const cursor = $("#cursor"), cursorLabel = $("#cursorLabel");
let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; });
(function loop() {
  cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
  cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
  requestAnimationFrame(loop);
})();
document.addEventListener("pointerover", e => {
  const t = e.target.closest("[data-cursor]");
  cursor.classList.toggle("is-big", !!t);
  cursorLabel.textContent = t ? t.dataset.cursor : "";
});

/* =========================================================
   Hero: rotating neural-network sphere
   ========================================================= */
(function neural() {
  const c = $("#neural"), ctx = c.getContext("2d");
  const N = 180, nodes = [], edges = [], pulses = [];
  let w, h, dpr, rotY = 0, rotX = 0.3, tx = 0, ty = 0;

  for (let i = 0; i < N; i++) { // fibonacci sphere
    const y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.39996;
    nodes.push([Math.cos(th) * rad, y, Math.sin(th) * rad]);
  }
  nodes.forEach((a, i) => nodes.forEach((b, j) => {
    if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 0.32) edges.push([i, j]);
  }));

  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size(); addEventListener("resize", size);
  addEventListener("pointermove", e => { tx = (e.clientX / innerWidth - 0.5); ty = (e.clientY / innerHeight - 0.5); });

  function frame() {
    rotY += 0.0025 + tx * 0.01;
    rotX += ((0.3 + ty * 0.6) - rotX) * 0.05;
    const R = Math.min(w, h) * (w < 760 ? 0.42 : 0.38);
    const ox = w < 760 ? w * 0.5 : w * 0.68, oy = h * (w < 760 ? 0.36 : 0.45);
    const cy_ = Math.cos(rotY), sy = Math.sin(rotY), cx_ = Math.cos(rotX), sx = Math.sin(rotX);
    const P = nodes.map(([x, y, z]) => {
      const x1 = x * cy_ - z * sy, z1 = x * sy + z * cy_;
      const y1 = y * cx_ - z1 * sx, z2 = y * sx + z1 * cx_;
      const s = 2.4 / (2.4 + z2);
      return [ox + x1 * R * s, oy + y1 * R * s, z2];
    });
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    edges.forEach(([a, b]) => {
      const d = (P[a][2] + P[b][2]) / 2; // -1 (front) .. 1 (back)
      ctx.strokeStyle = `rgba(40,44,32,${0.05 + (1 - d) * 0.14})`;
      ctx.beginPath(); ctx.moveTo(P[a][0], P[a][1]); ctx.lineTo(P[b][0], P[b][1]); ctx.stroke();
    });
    P.forEach(([x, y, z]) => {
      const a = 0.25 + (1 - z) * 0.4;
      ctx.fillStyle = `rgba(40,44,32,${a})`;
      ctx.beginPath(); ctx.arc(x, y, 1 + (1 - z) * 1.4, 0, 6.283); ctx.fill();
    });
    // signal pulses travelling along edges
    if (pulses.length < 26 && Math.random() < 0.3) pulses.push({ e: edges[(Math.random() * edges.length) | 0], t: 0 });
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i]; p.t += 0.03;
      if (p.t >= 1) { pulses.splice(i, 1); continue; }
      const [a, b] = p.e, x = P[a][0] + (P[b][0] - P[a][0]) * p.t, y = P[a][1] + (P[b][1] - P[a][1]) * p.t;
      ctx.fillStyle = "#d2ff00"; ctx.strokeStyle = "#282c20"; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(x, y, 3, 0, 6.283); ctx.fill(); ctx.stroke(); ctx.lineWidth = 1;
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

// Fake live training stats on the hero card
(function training() {
  let epoch = 42, loss = 0.0213;
  setInterval(() => {
    epoch++; loss = Math.max(0.0008, loss * (0.97 + Math.random() * 0.04));
    $("#epoch").textContent = String(epoch).padStart(3, "0");
    $("#loss").textContent = loss.toFixed(4);
  }, 1400);
})();

/* =========================================================
   Loader + scroll animations (GSAP / Lenis if available)
   ========================================================= */
const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function runLoader(done) {
  const el = $("#loader"), count = $("#loaderCount");
  if (!hasGsap || reduced) { el.remove(); return done(); }
  const o = { v: 0 };
  gsap.timeline({ onComplete: () => { el.remove(); done(); } })
    .to(o, { v: 100, duration: 1.6, ease: "power2.inOut", onUpdate: () => (count.textContent = Math.round(o.v)) })
    .to(el, { yPercent: -100, duration: 0.9, ease: "expo.inOut" });
}

function initMotion() {
  if (!hasGsap || reduced) {
    document.querySelectorAll(".reveal-words .w").forEach(w => (w.style.opacity = 1));
    document.querySelectorAll("[data-count]").forEach(n => (n.textContent = n.dataset.count + (n.dataset.suffix || "")));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) { e.preventDefault(); lenis.scrollTo(id, { offset: 0 }); }
    }));
  }

  gsap.to(".hero__inner", { yPercent: -30, opacity: 0.2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // Word-by-word message reveal
  gsap.to(".reveal-words .w", {
    opacity: 1, stagger: 0.05, ease: "none",
    scrollTrigger: { trigger: ".message__text", start: "top 75%", end: "bottom 45%", scrub: true },
  });

  // Big headings slide up
  gsap.utils.toArray(".big, .quote p, .footer__tag").forEach(el => {
    gsap.from(el, { y: 80, opacity: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  // Fade-up groups
  gsap.utils.toArray(".card, .tool, .writing__list li, .split__card, .journey__item, .portrait, .models__feature > *").forEach(el => {
    gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%" } });
  });

  // Count-up stats
  gsap.utils.toArray("[data-count]").forEach(n => {
    const o = { v: 0 };
    gsap.to(o, { v: +n.dataset.count, duration: 1.8, ease: "power3.out", onUpdate: () => (n.textContent = Math.round(o.v) + (n.dataset.suffix || "")), scrollTrigger: { trigger: n, start: "top 90%" } });
  });

  // Horizontal pinned gallery (desktop only)
  ScrollTrigger.matchMedia({
    "(min-width: 761px)": () => {
      const pin = $(".gallery__pin");
      const dist = () => pin.scrollWidth - innerWidth;
      gsap.to(pin.children, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: ".gallery", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
      });
    },
  });
}

// Hero intro starts hidden and plays when the loader lifts
const heroBits = [".hero__eyebrow", ".hero__role", ".hero__card", ".hero__since", ".hero__scroll"];
if (hasGsap && !reduced) {
  gsap.set(".hero__title .line > span", { yPercent: 110 });
  gsap.set(heroBits, { opacity: 0, y: 20 });
}
runLoader(() => {
  if (!hasGsap || reduced) return;
  gsap.to(".hero__title .line > span", { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 });
  gsap.to(heroBits, { opacity: 1, y: 0, duration: 1, delay: 0.3, stagger: 0.08 });
});
initMotion();
