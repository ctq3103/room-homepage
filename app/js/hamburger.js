const btnHamburger = document.querySelector('#hamburger');
const btnClose = document.querySelector('#close');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnClose.addEventListener('click', () => {
	body.classList.remove('noscroll');
	header.classList.remove('open');
	header.classList.add('close');

	fadeElems.forEach((e) => {
		e.classList.remove('fade-in');
		e.classList.add('fade-out');
	});
});

btnHamburger.addEventListener('click', () => {
	body.classList.add('noscroll');
	header.classList.add('open');
	header.classList.remove('close');
	fadeElems.forEach((e) => {
		e.classList.remove('fade-out');
		e.classList.add('fade-in');
	});
});
