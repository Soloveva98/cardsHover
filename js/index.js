const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('mousemove', startRotate);
	cards[i].addEventListener('mouseout', stopRotate);
};

function startRotate(e) {
	const cardItem = this.querySelector('.card__item');
	const halfHeight = cardItem.offsetHeight / 2;
	cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (e.offsetX - halfHeight) / 5 + 'deg)';
};

function stopRotate() {
	const cardItem = this.querySelector('.card__item');
	cardItem.style.transform = 'rotate(0)';
}