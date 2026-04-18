(function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

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

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    setTimeout(initializeInteractions, 100);
  });

  function initializeInteractions() {
    // Navbar Toggling
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

    // Hero Typing Animation
    const stack = ["React.js", "Flutter", "Agentic AI", "Node.js", "Firebase", "UI/UX Design"];
    const typingNode = document.getElementById("hero-typing");
    let idx = 0;

    if (typingNode) {
      setInterval(() => {
        idx = (idx + 1) % stack.length;
        gsap.to(typingNode, { opacity: 0, duration: 0.3, onComplete: () => {
          typingNode.textContent = stack[idx];
          gsap.to(typingNode, { opacity: 1, duration: 0.3 });
        }});
      }, 2500);
    }

    // Initialize Vanilla-Tilt
    if (typeof VanillaTilt !== 'undefined') {
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        scale: 1.02
      });
    }

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // Splash to Hero Master Timeline (Elegant Pieterkoopt Style)
    const masterTl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      }
    });

    // Elegant handwriting reveal (clip path wipe)
    masterTl.fromTo(".signature-wrapper", 
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 2.2, ease: "power2.inOut" }
    )
    .to(".signature-wrapper", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.in"
    }, "+=0.4")
    .to(".splash-screen", {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    }, "+=0.1")
    .set(".splash-screen", { display: "none" }) // Forcefully hide splash screen after animation
    .fromTo(".navbar", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", clearProps: "all" }, "-=0.4")
    .fromTo(".hero-copy > *", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power4.out", clearProps: "all" }, "-=1.0")
    .fromTo(".hero-photo-card", { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 2, ease: "power4.out", clearProps: "all" }, "-=1.2");

    // Unified Section Reveal
    gsap.utils.toArray('.section').forEach(section => {
      // Fade in section title and description
      const header = section.querySelectorAll('h2, > p');
      if (header.length > 0) {
        gsap.from(header, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out"
        });
      }

      // Stagger child elements like cards, timeline items
      const cards = section.querySelectorAll('.project-card, .card-block, .skill-panel, .timeline-item, .cert-item');
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "power4.out"
        });
      }
      
      // Animate skill bars specifically
      const skillBars = section.querySelectorAll('.skill-bar-fill');
      if (skillBars.length > 0) {
        gsap.fromTo(skillBars, 
          { scaleX: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none"
            },
            scaleX: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      }
    });

    // Contact Form simple stagger
    gsap.from(".contact-layout > *", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Stitch-style Premium Mouse Glow interaction
    const glowCards = document.querySelectorAll('.card-block, .skill-panel, .project-card, .cert-item');
    glowCards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }
})();
