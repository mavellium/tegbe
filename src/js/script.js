// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para âncoras (links internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Rolagem suave
                });
            }
        });
    });

    // --- Animação Fade-in ao Scroll (Usando Intersection Observer API para performance) ---
    const fadeInElements = document.querySelectorAll('.js-fade-in');

    const observerOptions = {
        root: null, // O viewport é o elemento raiz
        rootMargin: '0px',
        threshold: 0.1 // O elemento será animado quando 10% dele estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Adiciona a classe para iniciar a transição CSS
                observer.unobserve(entry.target); // Para de observar o elemento após ele ficar visível
            }
        });
    }, observerOptions);

    // Observa cada elemento com a classe 'js-fade-in'
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    const swiper = new Swiper('.swiper', {
      lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true, // opcional, pode ajudar se as imagens não carregarem de imediato
      },
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});


function toggleAnswer(element) {
  const answer = element.querySelector('.faq-answer');
  const isVisible = answer.style.display === 'block';

  // Alterna o estado
  if (isVisible) {
    answer.style.display = 'none';
    element.classList.remove('open');
  } else {
    answer.style.display = 'block';
    element.classList.add('open');
  }
}
