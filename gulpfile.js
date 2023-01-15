import Gulp from 'gulp';
const { src, dest } = Gulp
import uglify from 'gulp-uglify';


export default function (cb) {
    return src('routers/**/*.js')
        .pipe(uglify())
        .pipe(dest('dist'))
}