const gulp =require("gulp");
gulp.task("watchall",async()=>{
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("f:\\phpstudy\\www\\MEIZU"))
    });
})