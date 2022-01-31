const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const instaLogo = document.querySelector ('.insta_logo')

const getStyle = (element, style) =>
	window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
	primaryColor: getStyle(html, '--primary_color'),
	transparent: getStyle(html, '--transparent'),
	bgBody: getStyle(html, '--bg_body'),
	textColor: getStyle(html, '--text_color'),
	lightColor: getStyle(html, '--light_color'),
	darkColor: getStyle(html, '--dark_color'),
	input: getStyle(html, '--input')
}

const darkMode = {
	primaryColor: '#423D33',
	transparent: 'grey',
	bgBody: '#27241D',
	textColor: 'white',
	lightColor: '#5636a7',
	darkColor: 'white',
	input: '#504a40'
}

const transformKey = key => 
	"--"+ key.replace(/([A-Z])/, "_$1").toLowerCase()

const changeColors = colors => {
	Object.keys(colors).map(key =>
		html.style.setProperty(transformKey(key), colors[key])
	)
}

checkbox.addEventListener('change', ({ target }) => {
	target.checked ? changeColors(darkMode) : changeColors(initialColors);
	target.checked ? instaLogo.setAttribute('src', './assets/img/intagram_white.png') : instaLogo.setAttribute('src', './assets/img/Instagram-Logo.png')
})
