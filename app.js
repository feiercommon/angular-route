angular.module("myapp",["ngRoute","ngAnimate","ctrls","serives"])
.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"route.html",
        controller:"route"
    }).when("/list",{
        templateUrl:"list.html",
        controller:"list"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"show.html"
    }).otherwise("/")
}).controller("list",function ($scope,$routeParams) {
    $scope.id=$routeParams.id;
});