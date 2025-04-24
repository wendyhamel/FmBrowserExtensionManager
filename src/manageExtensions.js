window.extensionsJS = function () {
	return {
		theme: Alpine.$persist(localStorage.getItem(this.isDarkMode) || 'system'),
		isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,

		toggleDarkMode () {
			this.isDarkMode = !this.isDarkMode
			if (this.isDarkMode) {
				this.theme = 'dark'
			} else {
				this.theme = 'light'
			}
		},

		setTheme () {
			this.isDarkMode = this.theme === 'dark' || (this.theme === 'system' && this.isDarkMode);
		},
	}
}