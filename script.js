document.addEventListener('DOMContentLoaded', () => {

  // Menu lateral
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
      document.querySelector('.imenu').style.opacity = '1';
  });

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
      }
  }

  // Adicionar evento de rolagem para ativar a função de alternância de animação
  window.addEventListener('scroll', toggleAnimation);
  // Chame a função para verificar se o elemento está visível quando a página for carregada
  toggleAnimation();

  // Script dos cards
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
      panel.addEventListener('click', () => {
          removeActiveClasses();
          panel.classList.add('active');
      });
  });

  function removeActiveClasses() {
      panels.forEach(panel => {
          panel.classList.remove('active');
      });
  }

  // Valores
  const valores = document.querySelectorAll('.valor');

  const observerValores = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observerValores.unobserve(entry.target); // Parar de observar após mostrar
          }
      });
  }, {
      threshold: 0.1
  });

  valores.forEach(valor => {
      observerValores.observe(valor);
  });

  // Contagem
  const counters = document.querySelectorAll('.counter');

  const updateCounter = (counter) => {
      counter.innerText = '0';
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      const incrementCounter = () => {
          const c = +counter.innerText;
          if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              requestAnimationFrame(incrementCounter);
          } else {
              counter.innerText = target;
          }
      };

      incrementCounter();
  };

  const observerCounters = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              updateCounter(counter);
              observer.unobserve(counter); // Desativar o observador após a atualização do contador
          }
      });
  }, { threshold: 0.1 });

  counters.forEach(counter => {
      observerCounters.observe(counter);
  });

});

//relatos
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Rafael Souza',
    position: 'Fotógrafo',
    photo:
      '../imagens/homem4.jpg',
    text:
    "Arielly Araújo me ajudou a resolver uma disputa trabalhista complicada. Sua competência e dedicação foram excepcionais. Altamente recomendada!",
  },
 
  {
    name: 'Gabriel Oliveira',
    position: 'Empreendedor',
    photo: '../imagens/homem2.jpg',
    text:
    "Precisei de assistência jurídica em uma questão de direito imobiliário e a Dra. Arielly foi brilhante. Sua atenção aos detalhes e conhecimento profundo fizeram toda a diferença.",
  },
  {
    name: 'Larissa Almeida',
    position: 'Enfermeira',
    photo: '../imagens/mulher2.jpg',
    text:
    "Arielly Araújo me orientou em um processo de herança. Sua paciência e clareza na explicação dos passos legais me deram muita confiança. Recomendo seus serviços!",
  },
  {
    name: 'Leonardo Garcia',
    position: 'Empresário',
    photo: '../imagens/homem3.jpg',
    text:
    "Contratei a Dra. Arielly para um caso empresarial complexo. Ela demonstrou grande expertise e eficiência, alcançando um resultado positivo para minha empresa. Excelente profissional!",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

