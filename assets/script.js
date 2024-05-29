/* mon tableau images et textes*/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/***** recuperer mes elements *****/
const bannerImage = document.querySelector(".banner-img"); /***** recuperer mes images *****/
console.log(bannerImage); /***** verifier si j'ai bien recupere mes images *****/


const arrowR = document.querySelector(".arrow_right"); /***** recuperer ma fleche droite *****/
arrowR.classList.add("arrow"); /***** propriete pour ajoute une classe css *****/
console.log(arrowR);

const arrowL = document.querySelector(".arrow_left");/***** idem fleche droite *****/
arrowL.classList.add("arrow");
console.log(arrowL);

const dots = document.querySelectorAll(".dot") /***** recuperer mon tableau avec le 4 points *****/
console.log(dots);
dots[0].classList.add("dot_selected"); /***** j'ai ajoute la classe dot_selected pour mon premier element de tableau *****/

const tagline = document.querySelector(".tagline p"); /***** recuperer mes textes */
console.log(tagline);

let i = 0  /***** j'ai definir mon point de depart *****/
console.log(i);

/****** ajouter event listeners sur mes fleches  *****/

arrowL.addEventListener("click", goLeft);
console.log("left"); /***** j'ai ajoute une alert pour mieux voir que mon bouton fonctionne *****/
arrowR.addEventListener("click", goRight);
console.log("right"); /***** j'ai ajoute une alert pour mieux voir que mon bouton fonctionne*****/

function goLeft() { /******cette ligne de code garantit que chaque fois que i est décrémenté en dessous de 0, il se replie sur la dernière diapositive (index 3), et lorsqu'il décrémente une valeur positive, il se comporte normalement jusqu'à atteindre le début du tableau, où il revient à la fin. Cela permet une navigation circulaire fluide entre les diapositives.*****/
	dots[i].classList.remove("dot_selected");/***** je suprime la classe dot selected depuis mon index actuel */
	i = (i-1 + slides.length) % slides.length; /*****Cela diminue l'index actuel i de 1, ce qui permet de passer à la diapositive précédente. slides.lenthg = C'est le nombre total de diapositives dans le tableau *****/
	/***** i-1 + slides.length : Ajouter slides.length garantit que la valeur résultante est toujours non négative, même si i-1 est négatif. C'est nécessaire car les indices de tableau ne peuvent pas être négatifs. *****/
	/***** % slides.length : L'opération modulo garantit que l'index résultant se replie dans les limites du tableau. Si la valeur dépasse la longueur du tableau, elle revient au début. Si elle est négative, elle revient à la fin. *****/
	dots[i].classList.add("dot_selected");/***** et je le rajout a mon nouveau index *****/
	mySlide();
	console.log("previous_pic_and_dot")
}


function goRight() {
	dots[i].classList.remove("dot_selected"); /****** idem goLeft *****/
	i = (i+1) % slides.length; /****** idem goLeft sauf que c'est pour incrementer l'index i et ca permet de passer a l'image suivante *****/
	dots[i].classList.add("dot_selected");/****** idem goLeft *****/
	mySlide();
	console.log("next_pic_and_dot")
}



/***** definir ma fucntion mySlide  *****/

function mySlide() {
	bannerImage.src = "assets/images/slideshow/" +slides[i].image;/****** le chemin du dossier ou sont stockées les images, le + est utilise pour concaténer les chaine de caractéres. il combine le chemin avec la valeur de slide[i] pour former le chemin compley de l'image a afficher *****/
	tagline.innerHTML = slides[i].tagLine; /******met à jour le contenu HTML d'un élément (tagline) avec le texte de la balise (tagLine) de la diapositive actuelle (slides[i]). ******/
	/***** innerHTML est une propriété qui définit ou obtient le HTML intérieur de cet élément. *****/
}
console.log(mySlide);

/***** Mes functions *****/
mySlide();
goLeft();
goRight();




