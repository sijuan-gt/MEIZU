const gulp =require("gulp");
// const uglify =require("gulp-uglify");
const minifycss =require("gulp-minify-css");
const imagemin =require("gulp-imagemin");
const sass =require("gulp-sass");

gulp.task("watchall",async()=>{
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("F:\\phpstudy\\www\\MEIZU"))
    });

    gulp.watch("js/*.js",async()=>{
        gulp.src("js/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("F:\\phpstudy\\www\\MEIZU\\js"))
    });
    gulp.watch("css/*.css",async()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("F:\\phpstudy\\www\\MEIZU\\css"))
    });
    gulp.watch("img/**/*",async()=>{
        gulp.src("img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("F:\\phpstudy\\www\\MEIZU\\img"))
    });
    gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("F:\\MEIZU\\css"))
    });
})