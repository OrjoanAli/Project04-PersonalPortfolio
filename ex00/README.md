# Orjoan Aldabaibah | Personal Portfolio

A responsive personal portfolio website, built from scratch with HTML, CSS and JavaScript. No frameworks, templates or UI libraries.

## Features
- Sticky navbar with links to every section
- About me with photo, skills grid, project cards, education, volunteering timeline, hobbies and contact form
- Day / Night theme switcher (sky blue with sun and clouds, navy with moon and stars)
- English / Arabic language switcher with right-to-left layout
- Responsive layout for mobile, using Flexbox, Grid and media queries

## How to run
Open `index.html` in a web browser. No installation needed.

## Project structure
- `index.html` - the page structure
- `style.css` - all styling and the day / night colors
- `script.js` - the theme switcher and the translation dictionary
- `assets/` - images

## How it works
**Theme switcher:** clicking the Theme button runs a function that changes the `data-theme` attribute on the `<html>` tag. The CSS variables change with it, so all the colors update.

**Language switcher:** every translatable element has a `data-translate` key. A JavaScript dictionary holds the English and Arabic text. Clicking the language button loops over those elements and replaces their text. It also sets `lang` and `dir="rtl"` or `dir="ltr"` on the page.

## Technologies
HTML5, CSS3, JavaScript, Git

## Author
Orjoan Aldabaibah