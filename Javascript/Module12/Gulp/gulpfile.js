const gulp = require('gulp'); // из node-module берем нужные плагины. Этот для того чтобы работал сам Галп
const rigger = require('gulp-rigger'); // этот модуль работает с html файлом
const autoprefixer = require('gulp-autoprefixer'); // Ставит автопрефиксы
const cssnano = require('gulp-cssnano'); // Минимизирует css файл
const sass = require('gulp-sass'); // переводит из  sass в css
const imagemin = require('gulp-imagemin'); // минимизирует картинки
const browserSync = require('browser-sync').create(); // автообновление изменений в браузере. Константа записывается именно так, это из документации.
// у них свой сайт ,, от туда берем все команды: https://browsersync.io/docs/gulp#page-top
const runSequence = require('run-sequence'); // плагин указывает в каком порядке запускать таски


gulp.task('html', function(){ // делаем первую инструкцию для работой с html
    return gulp.src('./src/index.html') // с каким файлом работаем и где его взять
    .pipe(rigger()) // через какой плагин прогоняем
    .pipe(gulp.dest('build/')) // куда выгрузить
    .pipe(browserSync.stream()) // добавляем автообновление
})



gulp.task('css', function(){ // делаем инструкцию для работы с css
    return gulp.src('./src/scss/style.scss') // c каким файлом работаем и где его взять
    .pipe(sass().on('error', sass.logError)) // Ловит ошибки в CSS и в консоли подсвечивает 1) Сначала sass в css - работа с плагином
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })) // 2) А теперь ставим автопрефиксы через плагин autoprefixer
    .pipe(cssnano()) // 3) а теперь уже css минимизируем
    .pipe(gulp.dest('build/css/')) // ну и куда выгрузить
    .pipe(browserSync.stream()) // добавляем автообновление
    
})


gulp.task('img', () =>  // делаем инструкцию для сжатия картинок
    gulp.src('./src/images/*') // c каким файлом работаем и где его взять
    .pipe(imagemin()) // прогоняем через плагин для сжатия картинок
    .pipe(gulp.dest('build/images/')) // выгружаем куда нужно
)


gulp.task('fonts', () => // делаем инструкцию для шрифтов, чтобы просто из папки src брал и кидал в build. Плагинов никаких не используем.
    gulp.src('./src/fonts/*') // путь от куда берем
    .pipe(gulp.dest('build/fonts')) // путь куда заносим
);


gulp.task('browser-sync', function(){ // пишем инструкцию для автообновления и запихиваем потом команду в html и css
    browserSync.init({ // инициализируем плагин
        server: {
            baseDir: "./build" // говорим куда брать файлы для показа на экране
        }
    })
})

gulp.task('watch', function(){ // создаем инструкцию, которая будет следить за измениниями в файлах
    gulp.watch("./src/html/*.html", ['html']); // следи за всеми файлами в папке и когда видишь изменение, повтори таску которая в квадратных скобках.
    gulp.watch("./src/scss/*.scss", ['css']); // следи за всеми файлами в папке и когда видишь изменение, повтори таску которая в квадратных скобках.
    gulp.watch("./src/js/*.js", ['js']); // следи за всеми файлами в папке и когда видишь изменение, повтори таску которая в квадратных скобках.
});



gulp.task('build', function (callback) { // указываем в каком порядке запускает таски
    runSequence(
        'html',
        'css',
        'img',
        'fonts',
        'browser-sync',
        'watch',
        callback);
});

