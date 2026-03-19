(function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Always start from top on a fresh load for portfolio-first presentation.
  window.scrollTo(0, 0);

  const sections = window.portfolioSections || {};

  const headerRoot = document.getElementById("header-root");
  const mainRoot = document.getElementById("main-root");
  const footerRoot = document.getElementById("footer-root");

  if (!headerRoot || !mainRoot || !footerRoot) {
    return;
  }

  headerRoot.innerHTML = sections.header || "";

  const mainOrder = [
    "about",
    "education",
    "skills",
    "experience",
    "projects",
    "achievements",
    "certifications",
    "contact",
  ];

  mainRoot.innerHTML = mainOrder.map((name) => sections[name] || "").join("\n");
  footerRoot.innerHTML = sections.footer || "";

  // Handle browsers that restore scroll after DOM updates.
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  initializeInteractions();

  function initializeInteractions() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });

      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active");
        });
      });
    }

    window.addEventListener("scroll", () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 24);
      }
    });

    const revealElements = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    const stack = ["React.js", "Flutter", "Agentic AI", "Node.js", "Firebase"];
    const typingNode = document.getElementById("hero-typing");
    let idx = 0;

    if (typingNode) {
      setInterval(() => {
        idx = (idx + 1) % stack.length;
        typingNode.style.opacity = "0";
        setTimeout(() => {
          typingNode.textContent = stack[idx];
          typingNode.style.opacity = "1";
        }, 220);
      }, 2200);
    }
  }
})();
