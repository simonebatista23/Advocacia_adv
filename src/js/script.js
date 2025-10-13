
const toggleBtn = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");document.addEventListener('DOMContentLoaded', function () {

    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {

        const iconButton = card.querySelector('.icon-button');

 
        const allTargetTexts = card.querySelectorAll('.p1, .p2, .p3');


        if (iconButton && allTargetTexts.length > 0) {

           
            const handleMouseOver = function () {
                allTargetTexts.forEach(p => p.classList.add('show-text'));
            };

            const handleMouseOut = function () {
                allTargetTexts.forEach(p => p.classList.remove('show-text'));
            };

           
            iconButton.addEventListener('mouseover', handleMouseOver);
            iconButton.addEventListener('mouseout', handleMouseOut);
        }
    });

  
});

const toggleBtn = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
document.addEventListener('DOMContentLoaded', function () {


    const sectionsToAnimate = document.querySelectorAll('[data-animate-on-scroll]');

    // Define as opções do observador
    const observerOptions = {
        root: null, 
        rootMargin: '0px',

        threshold: 0.15
    };

 
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
   
            if (entry.isIntersecting) {

                entry.target.classList.remove('opacity-0', 'translate-y-12');


                observer.unobserve(entry.target);
            }
        });
    };

    // Cria e inicia a observação
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });


    const scrollLink = document.getElementById('cta-areas-atuacao-link');
    const targetId = 'areas-de-atuacao';
    const targetSection = document.getElementById(targetId);

    if (scrollLink && targetSection) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault(); 

            targetSection.scrollIntoView({
                behavior: 'smooth' 
            });
        });
    }

});


    mobileMenu.classList.toggle("active");
});

const slides = [
  { img: "src/img/foto_header_pessoa_3.jpg", activeId: "adv-civil" },
  { img: "src/img/foto_header_pessoa_2.jpeg", activeId: "adv-trabalhista" },
  { img: "src/img/foto_header_pessoa_1.jpg", activeId: "adv-familia" },
];

let index = 0;
const imgElement = document.getElementById("people-img");
const advs = [
  document.getElementById("adv-civil"),
  document.getElementById("adv-trabalhista"),
  document.getElementById("adv-familia")
];
const workBox = document.querySelector(".work-people");

function showSlide(i) {

  imgElement.src = slides[i].img;

  advs.forEach(li => li.classList.remove("active"));
  const activeLi = document.getElementById(slides[i].activeId);
  activeLi.classList.add("active");

  imgElement.classList.add("visible");
  workBox.classList.add("active");
}

showSlide(index);

setInterval(() => {
  imgElement.classList.remove("visible");
  workBox.classList.remove("active");

  setTimeout(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 800);
}, 5000);


