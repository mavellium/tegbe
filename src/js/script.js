document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const fadeInElements = document.querySelectorAll(".js-fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  const swiper = new Swiper(".mySwiper", {
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });


  const swiperTegbe = new Swiper(".swiper-tegbe", {
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});

function toggleAnswer(element) {
  const answer = element.querySelector(".faq-answer");
  const isVisible = answer.style.display === "block";

  if (isVisible) {
    answer.style.display = "none";
    element.classList.remove("open");
  } else {
    answer.style.display = "block";
    element.classList.add("open");
  }
}
