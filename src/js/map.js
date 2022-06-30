const update = () => {
	const url = 'https://sirens.in.ua/api/v1/'
	// const url = 'https://map.kyivlime.pp.ua/src/city.json'
	const map = document.getElementById("map").contentDocument

	fetch(url)
		.then(res => res.json())
		.then(data =>
			Object.entries(data).forEach(([n, s]) =>
				map.querySelectorAll('svg path').forEach(el => {
					if (el.getAttribute('name') == n) {
						switch (s) {
							case 'full': el.style.fill = '#EF476F'; break;
							case 'partial': el.style.fill = '#FFD166'; break;
							case 'no_data': el.style.fill = '#118AB2'; break;
							default: el.style.fill = '#06D6A0';
						}
					}
				})
			)
		).catch(err => { throw err })
}
setInterval(update, 5000)