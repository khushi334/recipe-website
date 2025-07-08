document.getElementById("contactForm").addEventListener("submit",function(e){
             const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const message = document.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                e.preventDefault();
            } else if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                e.preventDefault();
            }else {
                e.preventDefault();
                responseMessage.textContent = "Thank you for your message!";
                document.getElementById("contactForm").reset();
            }

        });

        
        document.querySelector(".back-to-top").addEventListener("click", function (e) {
             e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });


        document.getElementById("searchIcon").addEventListener("click", function () {
            const searchBox = document.getElementById("searchBox");
            searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
        });


        
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
             }
        });
    });
    const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });