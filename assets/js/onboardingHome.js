const driver = window.driver.js.driver;
const driverToggle = document.getElementById('driver-toggle');

const driverObj = driver({
	animate: false,
	showProgress: true,
	steps: [
		{
			element: '#user-altitude',
			popover: {
				title: '',
				description: 'Observa tu altitud actual.'
			}
		},
		{
			element: '#altimeter-container',
			popover: {
				title: 'Altímetro',
				description: 'Haz click en cada círculo y conoce la altitud de cada casa.'
			}
		},
		{
			element: '.case-image.active',
			popover: {
				title: 'Caso Seleccionado',
				description: 'Da doble click sobre las imágenes en color para acceder a la información de del caso.'
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