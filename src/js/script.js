
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.mobile-menu'),
	body = document.querySelector('body');

const onClickBurger = () => {
	menu.classList.toggle('active');
	burger.classList.toggle('close');
	// body.classList.toggle('disable-scroll');
	setTimeout(() => {
		burger.classList.toggle('move');
	}, 1000);
};




burger.addEventListener('click', onClickBurger);
burger.addEventListener('keydown', (evt) => {
	if (evt.code === 'Enter') {
		onClickBurger();
	}
});
document.addEventListener('keydown', (evt) => {
	if (evt.code === "Escape") {
		onClickBurger();
	}
});