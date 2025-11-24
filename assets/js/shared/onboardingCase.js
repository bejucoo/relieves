console.log("onboardingCase.js");

const driver = window.driver.js.driver;
const driverToggle = document.getElementById('driver-toggle');

const driverObj = driver({
	animate: false,
	showProgress: true,
	steps: [
		{
			element: '#galeria-testimonios',
			popover: {
				title: '',
				description: 'Descubre testimonios.'
			}
		},
		{
			element: '#galeria-planimetria',
			popover: {
				title: '',
				description: 'Entiende la planimetría.'
			}
		}
	]
});

driverToggle.addEventListener('click', (e) => {
	e.preventDefault();
	driverObj.drive();
});