console.log("onboarding.js");

const driver = window.driver.js.driver;
const driverToggle = document.getElementById('driver-toggle');

const driverObj = driver({
	animate: false,
	showProgress: true,
	steps: [
		{
			element: '#altimeter-container',
			popover: {
				title: 'Altímetro',
				description: 'Lorem ipsum...'
			}
		},
		{
			element: '#user-altitude',
			popover: {
				title: 'Altura',
				description: 'Lorem ipsum...'
			}
		},
		{
			element: '#selected-case',
			popover: {
				title: 'Seleccionado',
				description: 'Lorem ipsum...'
			}
		},
		{
			element: '#feedback',
			popover: {
				title: 'Ir a caso',
				description: 'Lorem ipsum...'
			}
		}
	]
});

driverToggle.addEventListener('click', (e) => {
	const grid = document.getElementById('image-grid');
	const firstImage = grid.firstElementChild;

	e.preventDefault();

	firstImage.click();
	driverObj.drive();
});