# Theme Starter Gulp
This is theme starter for Front-end developers to create statis sites, themes for wordpress or anything, this theme tries to be as simple as possible to use.

This kit contains:

* Gulp
* Bower
* Jade
* Sass
* Bootstrap
* Animate.css
* jQuery
* Slick Carousel
* Livereload

## How to use
All the source code is in the folder source, and will be built in the root of the project.
The fonts and images are not inside source folder, I did not seem to need to make a treatment, but you can to make a sprite of images or modify this for your taste.

Follow the steps

* Clone this repository  `git clone git@github.com:dumarojeda/theme-starter-gulp.git`
* Navigate to source folder  `cd theme-starter-gulp/source/`
* Install NPM dependencies  `npm install`
* Install Bower dependencies  `bower install`
* Run gulp's tasks  `gulp`
* Open in your browser `http://localhost:8080`  or `http://0.0.0.0:8080`

## Recomendations
* Remember that you must always work in the folder source
* If you want to install a new javascript library, you need to add it with bower and call it in the *gulpfile.js*, in the array of paths
```
var paths = {
  webserverRoot : '../',
  jade : ['./jade/*.jade'],
  sass : ['./sass/**/*.sass'],
  javascript : [
    './bower_components/here_your_library_path',
    './bower_components/jquery/dist/jquery.min.js',
    './javascripts/script.js'
  ]
};
```
* If you want to install a new css library, you need to add it with bower and call it in the *sass/style.sass*.
```
// ====================================================================
// Bower Dependencies
// ====================================================================
@import "../bower_components/here_your_library_path"
@import "../bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss"
```

## Contributing & Credit
* Dumar Ojeda