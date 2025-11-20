console.log("onboarding.js");

const driver = window.driver.js.driver;
const driverToggle = document.getElementById('driver-toggle');

const driverObj = driver({
	animate: false,
	showProgress: true,
	steps: [
		{
			element: '#user-altitude',
			popover: {
				title: 'Altura',
				description: 'Haciendo click aquí podrá obtener la altura del lugar donde se encuentra. El caso de estudio con la altura más cercana será destacado.'
			}
		},
		{
			element: '#altimeter-container',
			popover: {
				title: 'Altímetro',
				description: 'En esta barra podrá seleccionar los casos según su altura sobre el nivel del mar haciendo click sobre cada círculo.'
			}
		},
		{
			element: '#selected-case',
			popover: {
				title: 'Seleccionado',
				description: 'Aquí se mostrará el nombre del caso seleccionado y la altura a la que se encuentra.'
			}
		},
		{
			element: '#feedback',
			popover: {
				title: 'Ir a caso',
				description: 'Haciendo click en este botón podrá ir a la página del caso seleccionado.'
			}
		},
		{
			element: '.case-image.active',
			popover: {
				title: 'Caso Seleccionado',
				description: 'Las imágenes del caso seleccionado se mostrarán con color. Haciendo doble click también podrá ir a la página correspondiente.'
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