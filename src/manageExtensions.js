window.extensionsJS = function () {
	return {
		theme: Alpine.$persist(localStorage.getItem(this.darkMode) || 'system'),
		isDarkMode: Alpine.$persist(window.matchMedia('(prefers-color-scheme: dark)').matches),

		toggleDarkMode () {
			this.isDarkMode = !this.isDarkMode
			if (this.theme === 'system') {
				if (this.isDarkMode) {
					this.theme = 'dark'
				} else {
					this.theme = 'light'
				}
			}
		},

		setTheme () {
			this.isDarkMode = this.theme === 'dark' || (this.theme === 'system' && this.isDarkMode);
		},
	}
}