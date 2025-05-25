// script.js

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll-to-top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '⬆';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
  });
  
  
  function openCertificateModal(imageSrc) {
    document.getElementById("certificateImage").src = imageSrc;
    document.getElementById("certificateModal").style.display = "block";
  }

  function closeCertificateModal() {
    document.getElementById("certificateModal").style.display = "none";
  }

  window.addEventListener("click", function (event) {
    const modal = document.getElementById("certificateModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  let div = document.querySelector("div");
  console.dir(div);

  