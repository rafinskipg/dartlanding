var gulp = require('gulp');
var http = require('http'),
	connect = require('connect');

gulp.task('buildserver', function(){
    var app = connect()
            .use(connect.static('dist'));

    http.createServer(app).listen(process.env.PORT || 8888);
});