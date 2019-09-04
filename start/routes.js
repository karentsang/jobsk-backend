'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')
Route.post('/oauth','AuthController.loginGoogle')


Route.get('/user', 'UserController.index')
Route.delete('/removeuser', 'UserController.remove')
Route.get('/post', 'PostController.indext')
Route.get('/booking', 'BookingController.index')
Route.get('/review', 'ReviewController.index')


//------------------------User Profile------------------------//
//For getting user object
Route.get('/user/:id', 'UserController.show')
//For user to edit personal bio
Route.get('/user/:id/bio', 'UserController.edit').middleware('auth')
//-----------------User Profile (Post)-----------------//
//Note: better to create two APIs on the front end to call separate route
Route.get('/user/:id/post', 'PostController.show')
Route.get('/user/:id/bookingPending', 'BookingController.showPending')
Route.get('/onePost/:pid', 'PostController.indexOne')
//Accept job + show all booking in the same post
Route.put('/user/:id/acceptBooking/:bid/','BookingController.accept')
//-----------------User Profile (Calendar)------------//
//For getting bookings on calendar
Route.get('/user/:id/bookingConfirm','BookingController.showConfirm')
//-----------------User Profile (Review)--------------//
//For getting all review of one user
Route.get('/user/:id/review','ReviewController.show')


//------------------------List page------------------------//
//For look for job or service page
Route.get('/post/:type', 'PostController.index')
//For filer job or service
Route.get('/post/:type/:filter', 'PostController.filter')
//For creating a new post
Route.post('/post/:type/create', 'PostController.create')
//For creating new booking
Route.post('/post/:id/booking/create', 'BookingController.create')


//All routes take in params except 
//PostController.create
//takes in type, post_img, category, lat, lng, price
//BookingController.create
//takes in start_date, end_date, user_id from body