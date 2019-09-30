var {src,dest,watch,series} = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function generateCSS(){
    return src('src/*.scss')
    .pipe(sass())     
    .pipe(dest('dist/css'));    
};

function minifyCSS(){    
    return src('dist/css/*.css')
    .pipe(cleanCSS())     
    .pipe(dest('dist/css')); 
}

function init(){
    watch('src/*.scss',series(generateCSS,minifyCSS));            
};
exports.default = init;