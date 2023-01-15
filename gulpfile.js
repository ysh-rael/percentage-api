import Gulp from 'gulp';
const { src, dest } = Gulp
import uglify from 'gulp-uglify';


export default function (cb) {
    return src('src/**/*.js')
        .pipe(uglify())
        .pipe(dest('dist'))
}