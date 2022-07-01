document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const underlineAbout = document.querySelector(".aboutme_underline");

	const underlineAboutTwo = document.querySelector(".aboutme_underline_two");

	// pobierz wszystkie elementy z klasą .nav-link//
	const allNavItems = document.querySelectorAll(".nav-link");

	const randomNavElement = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 75) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
	function colorChange() {
		if (window.scrollY >= 230) {
			underlineAbout.classList.add("change-color");
		} else {
			underlineAbout.classList.remove("change-color");
		}
	}

	function colorChangeTwo() {
		if (window.scrollY >= 600) {
			underlineAboutTwo.classList.add("change-color");
		} else {
			underlineAboutTwo.classList.remove("change-color");
		}
	}

	// Każdy z elementów zbioru allNavItems jest nasłuchiwany na kliknięcie, gdy nastapi kliknięcie w któryś z elementów usuwana jest klasa show z elementu (element posiada jedną z klas .navbar-collapse)
	allNavItems.forEach(item =>
		item.addEventListener("click", () =>
			randomNavElement.classList.remove("show")
		)
	);

	window.addEventListener("scroll", addShadow);
	window.addEventListener("scroll", colorChange);
	window.addEventListener("scroll", colorChangeTwo);
});
