angular.module("serives",[])
.factory("indexData",function ($http) {
    return $http({url:"1.txt"})
});