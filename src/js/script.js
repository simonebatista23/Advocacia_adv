document.addEventListener('DOMContentLoaded', function () {

    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        const iconButton = card.querySelector('.icon-button');
        const allTargetTexts = card.querySelectorAll('.p1, .p2, .p3');

        if (iconButton && allTargetTexts.length > 0) {

            const handleClick = function () {
                allTargetTexts.forEach(p => p.classList.toggle('show-text'));
            };

            iconButton.addEventListener('click', handleClick);

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

