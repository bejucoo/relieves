const driver = window.driver.js.driver;
const driverToggle = document.getElementById('driver-toggle');

const driverObj = driver({
	animate: false,
	showProgress: true,
	steps: [
		{
			element: '#info-ticker',
			popover: {
				description: 'Conoce sobre cada caso.'
			}
		},
		{
			element: '#galeria-testimonios',
			popover: {
				description: 'Descubre testimonios.'
			}
		},
		{
			element: '#galeria-planimetria',
			popover: {
				description: 'Entiende la planimetría.'
			}
		},
		{
			element: '#galeria-proyecto',
			popover: {
				description: 'Aprende de sus fotografías.'
			}
		},
		{
			element: '#galeria-analisis',
			popover: {
				description: 'Analiza su entorno climático.'
			}
		}
	]
});

driverToggle.addEventListener('click', (e) => {
	e.preventDefault();

	if (window.innerWidth <= 768) {
		menuToggle.click();
	}

	driverObj.drive();
});