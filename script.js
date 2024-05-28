
document.querySelectorAll('.menu-lateral a').forEach(link => {

    link.addEventListener('click', function() {

      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  });

  document.querySelector('.imenu').addEventListener('click', function() {
   
    document.querySelector('.menu-lateral').classList.add('open');
    document.querySelector('.imenu').style.opacity = '1';
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.remove('open');
    document.querySelector('.imenu-btn').style.opacity = '1';
  });


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


function handleVisibility() {
    var element = document.querySelector('.texto-deslizante');
    if (isElementInViewport(element)) {
        element.classList.add('slideInRight');
    
        window.removeEventListener('scroll', handleVisibility);
    }
}

window.addEventListener('scroll', handleVisibility);

handleVisibility();

let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-in");
        slides[i].classList.remove("slide-out");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("slide-in");
    dots[slideIndex - 1].className += " active";
    
    let previousSlide = slideIndex - 2;
    if (previousSlide < 0) {
        previousSlide = slides.length - 1;
    }
    slides[previousSlide].classList.add("slide-out");
}

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const missao = document.querySelector('.missao');
    observer.observe(missao);

    const valores = document.querySelectorAll('.valor');
    valores.forEach((valor, index) => {
        observer.observe(valor);
    });
});

let indiceSlide = 0;
mostrarSlides();

function mostrarSlides() {
    let slides = document.querySelectorAll('.item-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('ativo');
    }
    indiceSlide++;
    if (indiceSlide > slides.length) {
        indiceSlide = 1;
    }
    slides[indiceSlide - 1].classList.add('ativo');
    setTimeout(mostrarSlides, 3000); // Muda a imagem a cada 3 segundos
}

document.addEventListener('DOMContentLoaded', function() {
    let indiceRelato = 0;
    mostrarRelatos();

    function mostrarRelatos() {
        let relatos = document.querySelectorAll('.relato');
        for (let i = 0; i < relatos.length; i++) {
            relatos[i].classList.remove('ativo');
        }
        indiceRelato++;
        if (indiceRelato > relatos.length) {
            indiceRelato = 1;
        }
        relatos[indiceRelato - 1].classList.add('ativo');
        setTimeout(mostrarRelatos, 4000); // Muda a imagem a cada 4 segundos
    }
});

