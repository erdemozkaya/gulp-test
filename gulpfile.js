const { parallel,src, dest, watch } = require('gulp');
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const watcher = watch(['./js/*.js','./scss/*.scss']);

function js_F(cb) {
    src("./js/*")
    .pipe(uglify())
    .pipe(dest("script"));
    cb();
}
  
function sass_F(cb) {
    src("./scss/index.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({cascade:false,browsers: ['last 99 versions'],}))
    .pipe(dest("css"));
    cb();
}
watcher.on('change', parallel(js_F, sass_F));
exports.default = parallel(js_F, sass_F);