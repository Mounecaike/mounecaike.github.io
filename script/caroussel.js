// Tableaux pour chaque slider
const slidesPage1 = [
    { image: "../assets/booki/booki-capture1.webp"},
    { image: "../assets/booki/booki-capture2.webp"},
    { image: "../assets/booki/booki-responsive.webp"},
    { image: "../assets/booki/booki-responsive2.webp"},

];

const slidesPage2 = [
    { image: "../assets/eco/extrait-de-code.webp"},
    { image: "../assets/eco/extrait-de-page1.webp"},
    { image: "../assets/eco/extrait-de-page2.webp" },
    { image: "../assets/eco/cypress-execution.webp"},
    { image: "../assets/eco/gif-cypress.gif"},
    { image: "../assets/eco/extrait-rapport.webp"},
];

const slidesPage3 = [
    { image: "../assets/kasa/extrait-code.webp"},
    { image: "../assets/kasa/extrait-composant.webp"},
    { image: "../assets/kasa/extrait-composant2.webp"},
    { image: "../assets/kasa/extrait-kasa.webp"},
    { image: "../assets/kasa/extrait-kasa2.webp"},
    { image: "../assets/kasa/extrait-kasa3.webp"},
    { image: "../assets/kasa/extrait-architecture.webp"},
];

// Variables globales
let slides = [];
const slider = document.getElementById("Slider");
const BulletPoint = document.getElementById("Bulletcontainer");
let Indexslider = 0;

// Détecter la page actuelle
const currentPage = window.location.pathname;

if (currentPage.includes("booki.html")) {
    slides = slidesPage1;
} else if (currentPage.includes("ecoblissbath.html")) {
    slides = slidesPage2;
} else if (currentPage.includes("kasa.html")) {
    slides = slidesPage3;
}

// Ajoute les bullet points et affiche les images
function BulletPointAdd() {
    BulletPoint.innerHTML = '';
    slides.forEach((_, index) => {
        let bullet = document.createElement('li');
        bullet.classList.add('dot');
        bullet.addEventListener('click', () => {
            Indexslider = index;
            AfficherImages();
        });
        BulletPoint.appendChild(bullet);
    });
}

function AfficherImages() {
    slider.innerHTML = ''; // Réinitialise le contenu du slider

    const ImageSlider = document.createElement('img');
    ImageSlider.src = slides[Indexslider].image;
    ImageSlider.classList.add("imgslide", "active"); // Ajoute la classe active
    slider.appendChild(ImageSlider);


    // Met à jour les bullet points
    const bullets = document.querySelectorAll('.dot');
    bullets.forEach((bullet, index) => {
        if (index === Indexslider) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });

}
// Initialisation
BulletPointAdd();
AfficherImages();

// Navigation
document.querySelector(".arrow_left").addEventListener('click', () => {
    Indexslider = (Indexslider - 1 + slides.length) % slides.length;
    AfficherImages();
});

document.querySelector(".arrow_right").addEventListener('click', () => {
    Indexslider = (Indexslider + 1) % slides.length;
    AfficherImages();
});
