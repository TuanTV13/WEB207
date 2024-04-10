let app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'Pages/home.html'
    })
    .when('/users', {
        templateUrl: 'Pages/users/index.html',
        controller: 'UserController'
    })
    .when('/users/create', {
        templateUrl: 'Pages/users/create.html',
        controller: 'UserController'
    })
    .when('/users/:id', {
        templateUrl: 'Pages/users/show.html',
        controller: 'UserController'
    })
    .when('/users/:id/edit', {
        templateUrl: 'Pages/users/edit.html',
        controller: 'UserController'
    })
    .otherwise({
        templateUrl: "<h1>404 Not Found</h1>"
    })
});