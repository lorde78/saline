var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var clearModule = require('clear-module');
var cors = require('cors');

var registerRouter = require('./routes/authentication/register.routes.ts');
var loginRouter = require('./routes/authentication/login.routes.ts');
var answerRouter = require('./routes/answer.routes.ts');
var lessonRouter = require('./routes/lesson.routes.ts');
var contactRouter = require('./routes/contact.routes.ts');
var annotationRouter = require('./routes/annotation.routes.ts');
var certificationRouter = require('./routes/certification.routes.ts');
var classroomRouter = require('./routes/classroom.routes.ts');
var commentRouter = require('./routes/comment.routes.ts');
var contactRouter = require('./routes/contact.routes.ts');
var discountRouter = require('./routes/discount.routes.ts');
var lessonRouter = require('./routes/lesson.routes.ts');
var shortvideoRouter = require('./routes/shortvideo.routes.ts');
var subscriptionRouter = require('./routes/subscription.routes.ts');
var tagRouter = require('./routes/tag.routes.ts');
var trainingRouter = require('./routes/training.routes.ts');
var videoRouter = require('./routes/video.routes.ts');
var userRouter = require('./routes/users.routes.ts');

var app = express();

// Enable all CORS Requests
app.use((req,res,next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:3001"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials","true");
    next();
});

// clear the cache of required modules on server restart
if (process.env.NODE_ENV !== 'production') {
    clearModule.all();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/annotation', annotationRouter);
app.use('/user', loginRouter);
app.use('/answer', answerRouter);
app.use('/lesson', lessonRouter);
app.use('/contact', contactRouter);
app.use('/certification', certificationRouter);
app.use('/lesson', lessonRouter);
app.use('/contact', contactRouter);
app.use('/shortvideo', shortvideoRouter);
app.use('/tag', tagRouter);
app.use('/training', trainingRouter);
app.use('/video', videoRouter);
app.use('/comment', commentRouter);
app.use('/discount', discountRouter);
app.use('/subscription', subscriptionRouter);
app.use('/classroom', classroomRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;