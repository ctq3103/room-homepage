const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtnAll = document.querySelectorAll('.carousel__button-right');
const prevBtnAll = document.querySelectorAll('.carousel__button-left');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width / 10;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'rem';
};
slides.forEach(setSlidePosition);

//Move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = `translateX(-${targetSlide.style.left})`;
	track.style['overflow-x'] = 'inherit';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
};

//click left, the slides move to the left
prevBtnAll.forEach((prevBtn) =>
	prevBtn.addEventListener('click', (e) => {
		const currentSlide = track.querySelector('.current-slide');
		const prevSlide = currentSlide.previousElementSibling;

		//if this is the first slide, move to the last slide
		if (!prevSlide) {
			return moveToSlide(track, currentSlide, slides[slides.length - 1]);
		}
		//else move to the previous slide
		moveToSlide(track, currentSlide, prevSlide);
	})
);

//click right, the slides move to the right
nextBtnAll.forEach((nextBtn) =>
	nextBtn.addEventListener('click', (e) => {
		const currentSlide = track.querySelector('.current-slide');

		const nextSlide = currentSlide.nextElementSibling;

		//if this is the last slide, move to the first slide
		if (!nextSlide) {
			return moveToSlide(track, currentSlide, slides[0]);
		}
		//else move to the next slide
		moveToSlide(track, currentSlide, nextSlide);
	})
);
