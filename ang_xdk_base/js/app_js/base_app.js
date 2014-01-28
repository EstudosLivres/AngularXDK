var MobApp = angular.module('MobApp', ['ngTouch']).directive('fastClick', function() {
    return function(scope, elem, attr) {
        elem.fastClick(function (e) {
            scope.$apply(attr.fastClick);
        })
    };
});

MobApp.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);