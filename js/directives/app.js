(function() {

	var app = angular.module('mainDirective', []);

	app.controller('SearchController', ['$http',
	function($http) {
		var search = this;
		search.mains = [];
		$http.get('js/directives/phMobilePrefix.json').success(function(data) {
			search.mains = data;
			console.log(data);

		});

	}]);
	
	
	
	app.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keydown", function() {
                if (this.value.length == limit) return false;
            });
        }
    };
}]);
	
	app.config(['$compileProvider', function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|sms):/);
}]);
	
	
})();
