angular.module("RNG", []).
controller('chartController', ['$http', '$scope',
	function ($http, $scope) {
		$http.jsonp('http://filltext.com/?rows=20&val={randomNumber}&callback=JSON_CALLBACK').
		success(function (d) {
			$scope.data = d;
		})
		$http.jsonp('http://filltext.com/?rows=20&val={randomNumber}&callback=JSON_CALLBACK').
		success(function (d) {
			$scope.data2 = d;
		})
}]).
directive('reactchart', function () {
	return {
		restrict: 'E',
		scope: {data:  '=', id: '@'},
		link: function (scope, elm, attrs) {
			scope.$watch('data', function (n, o) {
				React.render(React.createElement(App, {data: scope.data, target: scope.id}), elm[0]);
			})
		}
	}
})