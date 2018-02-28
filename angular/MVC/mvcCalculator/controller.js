app.controller("myCal", ($scope, factory) => {
    $scope.add = function () {
        var sum = factory.addition($scope.fnum, $scope.secnum);
        $scope.Result = sum;
    }
    $scope.sub = function () {
        var sub = factory.subtraction($scope.fnum, $scope.secnum);
        $scope.Result = sub;
    }
    $scope.mul = function () {
        var mul = factory.multiplication($scope.fnum, $scope.secnum);
        $scope.Result = mul;
    }
    $scope.div = function () {
        var div = factory.division($scope.fnum, $scope.secnum);
        $scope.Result = div;
    }
})
