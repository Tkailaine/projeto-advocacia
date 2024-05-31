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




// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe de animação quando o elemento está visível na tela
function toggleAnimation() {
    var textoDeslizante = document.querySelector('.texto-deslizante');
    if (isElementInViewport(textoDeslizante)) {
        textoDeslizante.classList.add('aparecer');
        window.removeEventListener('scroll', toggleAnimation);
    }
}

// Adicionar evento de rolagem para ativar a função de alternância de animação
window.addEventListener('scroll', toggleAnimation);

// Chame a função para verificar se o elemento está visível quando a página for carregada
toggleAnimation();



//script cards
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


//valores
document.addEventListener('DOMContentLoaded', () => {
    const valores = document.querySelectorAll('.valor');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    valores.forEach(valor => {
        observer.observe(valor);
    });
});


//contagem
const counters = document.querySelectorAll('.counter');

const updateCounter = (counter) => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;

    const incrementCounter = () => {
        const c = +counter.innerText;
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(incrementCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    incrementCounter();
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            updateCounter(counter);
            observer.unobserve(counter); // Desativar o observador após a atualização do contador
        }
    });
}, { threshold: 0.1 }); // Ajuste o threshold conforme necessário

counters.forEach(counter => {
    observer.observe(counter);
});
