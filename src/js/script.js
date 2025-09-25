
const toggleBtn = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
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


