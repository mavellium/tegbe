document.addEventListener("DOMContentLoaded", function() {
    var formContainer = document.getElementById('section-2-form');
    if (!formContainer) return;

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Cria os scripts do formulário
          var scriptInline = document.createElement('script');
          scriptInline.defer = true;
          scriptInline.textContent = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1529739",hash:"5863b79f491adc496a89844c0bdb543d",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

          var scriptSrc = document.createElement('script');
          scriptSrc.async = true;
          scriptSrc.charset = 'utf-8';
          scriptSrc.src = "https://forms.kommo.com/forms/assets/js/amoforms.js?1750445641";

          formContainer.appendChild(scriptInline);
          formContainer.appendChild(scriptSrc);

          observer.unobserve(formContainer);
        }
      });
    });

    observer.observe(formContainer);
  });

document.getElementById('yt-placeholder-main').addEventListener('click', function() {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/1MIjs_OA-Uc?autoplay=1&rel=0');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '366px';
  this.parentNode.replaceChild(iframe, this);
});

document.querySelectorAll('.yt-placeholder-carousel').forEach(function(placeholder) {
  placeholder.addEventListener('click', function() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/1MIjs_OA-Uc?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '266px';
    this.parentNode.replaceChild(iframe, this);
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
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const header = document.querySelector("header");
  const firstSection = document.querySelector(".section-1");

  window.addEventListener("scroll", () => {
    const sectionBottom = firstSection.getBoundingClientRect().bottom;

    if (sectionBottom <= 0) {
      header.classList.remove("header-default");
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
      header.classList.add("header-default");
    }
  });

  const observerIframe = new MutationObserver(() => {
    const iframe = document.querySelector('iframe[name^="amoforms_iframe_"]');
    if (iframe) {
      iframe.title = "Formulário Kommo";
      observerIframe.disconnect();
    }
  });

  observerIframe.observe(document.getElementById("section-2-form"), {
    childList: true,
    subtree: true,
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', function () {
      toggleAnswer(this);
    });
  });
});