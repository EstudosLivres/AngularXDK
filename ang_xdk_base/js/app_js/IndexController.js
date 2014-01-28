MobApp.controller('IndexController', function ($scope, $http) {
	// Teste Ajax e NG-init
	$scope.search = function() {
		$.getJSON("http://proumo-mvp.herokuapp.com/api/mob?uex=1&", function( retorno ) {
			$scope.retorno = retorno;
  			alert(retorno);
		});
	}
});