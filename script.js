document.addEventListener('DOMContentLoaded', function () {
    // Menu Lateral Links
    document.querySelectorAll('.menu-lateral a').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelector('.menu-lateral').classList.remove('open');
        document.querySelector('.imenu').style.opacity = '1';
      });
    });
  
    // Menu Icon
    document.querySelector('.imenu').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.add('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  
    // Close Button
    document.querySelector('.close-btn').addEventListener('click', function() {
      document.querySelector('.menu-lateral').classList.remove('open');
      document.querySelector('.imenu').style.opacity = '1';
    });
  
    // Function to check if element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Toggle Animation for sliding text
    function toggleAnimation() {
      var textoDeslizante = document.querySelector('.texto-deslizante');
      if (isElementInViewport(textoDeslizante)) {
        textoDeslizante.classList.add('aparecer');
        window.removeEventListener('scroll', toggleAnimation);
      }
    }
  
    // Scroll event for animation
    window.addEventListener('scroll', toggleAnimation);
    toggleAnimation();
  
    // Panels script
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
  
    // Intersection Observer for "valores"
    const valores = document.querySelectorAll('.valor');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  
    valores.forEach(valor => {
      observer.observe(valor);
    });
  
    // Counters
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
  
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          updateCounter(counter);
          observer.unobserve(counter); // Unobserve after counting is done
        }
      });
    }, { threshold: 0.1 });
  
    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  });
  