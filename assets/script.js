// table with images and text
let imagetableau = [];
const slides = [
	{
		image: "assets/images/slideshow/slide1.jpg",
		caption: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "assets/images/slideshow/slide2.jpg",
		caption: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "assets/images/slideshow/slide3.jpg",
		caption: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "assets/images/slideshow/slide4.png",
		caption: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Variable
const ArrowRight = document.querySelector(".arrow_right")

const ArrowLeft = document.querySelector(".arrow_left")

const slider = document.getElementById("Slider")

const NumbersSlide = slides.length
const BulletPoint = document.getElementById("Bulletcontainer")
console.log(BulletPoint)

let Indexslider = 0 

//addEventlistener
ArrowLeft.addEventListener('click', () => {
	Indexslider--
	if (Indexslider < 0) {
		Indexslider = NumbersSlide - 1;
	}
	AfficherImages()
})


ArrowRight.addEventListener('click', () =>{
	Indexslider++
	if (Indexslider >= NumbersSlide) {
		Indexslider = 0;
	}
	AfficherImages()
})

// function

function BulletPointAdd () {
	BulletPoint.innerHTML = '';
	slides.forEach((slide, index) => {
        let bullet = document.createElement('li');
        bullet.classList.add('dot');

        BulletPoint.appendChild(bullet);
    });
}

function AfficherImages (){
	slider.innerHTML = '';
	for (i = 0; i < NumbersSlide; i++){
	let ImageSlider = document.createElement('img')
	ImageSlider.src = slides[Indexslider].image;
	ImageSlider.classList.add("imgslide")

	slider.appendChild(ImageSlider)
	imagetableau[i] = ImageSlider

	if (i === Indexslider) {
		ImageSlider.classList.add("active")
	}
}
	let captionElement = document.getElementById("caption");
	if (captionElement){
    captionElement.innerHTML = slides[Indexslider].caption;}

	let bullets = document.querySelectorAll('.dot');
    bullets.forEach((bullet, index) => {
        if (index === Indexslider) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}
BulletPointAdd()
AfficherImages()

