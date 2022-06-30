const theme = () => {
	const theme_toggle = document.querySelector("#theme")
	const theme_icon = document.querySelector('.theme')
	let theme_store = localStorage.getItem('data-theme')

	const changeThemeToDark = () => {
		theme_icon.className = 'theme dark'
		document.documentElement.setAttribute("data-theme", "dark")
		localStorage.setItem("data-theme", "dark")
	}

	const changeThemeToLight = () => {
		theme_icon.className = 'theme light'
		document.documentElement.setAttribute("data-theme", "light")
		localStorage.setItem("data-theme", 'light')
	}

	if (theme_store == 'light') {
		theme_icon.className = 'theme light'
		theme_toggle.checked = false
		changeThemeToLight()
	} else {
		theme_icon.className = 'theme dark'
		theme_toggle.checked = true
		changeThemeToDark()
	}

	theme_toggle.addEventListener('change', () => {
		let theme_store = localStorage.getItem('data-theme')
		if (theme_store == 'dark') changeThemeToLight()
		else changeThemeToDark()
	})
}
theme()