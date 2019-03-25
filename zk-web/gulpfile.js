var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
gulp.task("server",function(){
	return gulp.src("./src")
	.pipe(webserver({
		port:9090,
		open:true,
		livereload:true,
		proxies:[
			{
				source:"/api/getlist",
				target:"http://localhost:3000/users/api/getlist"
			},
			{
				source:"/api/getlist",
				target:"http://localhost:3000/users/api/getlist"
			}
		]
	}))
});
gulp.task("scss",function(){
	return gulp.src("./src/sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./src/css"))
})
gulp.task("watch",function(){
	gulp.watch("./src/sass/**/*.scss",gulp.series("scss"))
})
gulp.task("default",gulp.series("scss","server","watch"))