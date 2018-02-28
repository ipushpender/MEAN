app.controller("myctrl", ($scope, factory_object) => {
    $scope.showName = function () {
        var result = factory_object.initCap($scope.name)
        $scope.resultname = result;
    }
})
