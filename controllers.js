angular.module("ctrls",["serives"])
.controller("route",["$scope","$http","indexData",function ($scope,$http,indexData) {
    indexData.then(function (data) {
        $scope.data=data.data;
    })
}]);
