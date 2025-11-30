(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const STORE_KEY = 'user-theme';
  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      toggle.setAttribute('aria-pressed','true');
    } else {
      root.setAttribute('data-theme', 'dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      toggle.setAttribute('aria-pressed','false');
    }
  }
  // initial theme: check localStorage -> prefers-color-scheme -> dark (default)
  const saved = localStorage.getItem(STORE_KEY);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
  // toggle handler
  if (toggle) {
    toggle.addEventListener('click', function(){
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(STORE_KEY, next);
      // small accessibility feedback
      toggle.style.transform = 'translateY(-2px)';
      setTimeout(()=> toggle.style.transform = '', 150);
    });
  }
})();
    // Typing effect
    const roles = ["Graphic Designer", "Web Developer", "Freelancer", "Creator"];
    let i = 0,
      j = 0,
      current = "",
      isDeleting = false;
    function type() {
      const target = document.getElementById("typing");
      if (!target) return;


      if (!isDeleting) {
        current = roles[i].substring(0, j++);
      } else {
        current = roles[i].substring(0, j--);
      }
      target.textContent = current;
      if (!isDeleting && j === roles[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
      setTimeout(type, isDeleting ? 80 : 120);
    }
    type();
    // Scroll reveal
    const revealElements = document.querySelectorAll(".reveal");
    function handleReveal() {
      const triggerBottom = window.innerHeight * 0.85;
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", handleReveal);
    window.addEventListener("load", handleReveal);
    // Floating particles background
    const particlesContainer = document.querySelector(".particles");
    const particleCount = 50;
    for (let k = 0; k < particleCount; k++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      const size = Math.random() * 3 + 1.5;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.left = Math.random() * 100 + "vw";
      p.style.bottom = Math.random() * -120 + "px";
      const duration = Math.random() * 25 + 18;
      p.style.animationDuration = duration + "s, " + (Math.random() * 3 + 2) + "s";
      p.style.animationDelay = Math.random() * -duration + "s, 0s";
      particlesContainer.appendChild(p);
    }
    // Hire Me button => smooth scroll to Contact
    const hireBtn = document.getElementById("hireBtn");
    if (hireBtn) {
      hireBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    // Scroll-down indicator => scroll to About
    const scrollDown = document.getElementById("scrollDown");
    if (scrollDown) {


      scrollDown.addEventListener("click", () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    // Hero visual parallax tilt
    const heroVisual = document.getElementById("heroVisual");
    if (heroVisual) {
      heroVisual.addEventListener("mousemove", (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        heroVisual.style.transform =
          `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      heroVisual.addEventListener("mouseleave", () => {
        heroVisual.style.transform = "";
      });
    }
