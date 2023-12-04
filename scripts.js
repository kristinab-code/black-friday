document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.dialog-form').addEventListener('submit', function(event)  {
		event.preventDefault();

		const name = document.getElementById('name').value.trim();
		const site = document.getElementById('site').value.trim();
		const tel = document.getElementById('tel').value.trim();
		const consent = document.getElementById('consent').checked;

		let isValid = true;

		document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

		if (!name) {
			document.getElementById('name-error').textContent = 'Пожалуйста, введите ваше имя.';
			isValid = false;
		}

		const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
		if (!urlPattern.test(site)) {
			document.getElementById('site-error').textContent = 'Пожалуйста, введите корректный URL вашего сайта.';
			isValid = false;
		}

		const telPattern = /\+?[0-9\s\-\(\)]+/;
		if (!telPattern.test(tel)) {
			document.getElementById('tel-error').textContent = 'Пожалуйста, введите корректный номер телефона.';
			isValid = false;
		}

		if (!consent) {
		  document.getElementById('consent-error').textContent = 'Пожалуйста, подтвердите согласие на обработку персональных данных.';
		  isValid = false;
		}

		if (isValid) {
			this.submit();
		}
	});

	document.querySelector('.burger').addEventListener('click', () => {
		document.querySelector('.nav').classList.toggle('open');
	})
});
