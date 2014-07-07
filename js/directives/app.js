(function(){
	
	var app= angular.module('mainDirective', []);
	
	app.controller('SearchController', ['$http', function($http){
		var search = this;
		search.mains = [];
		$http.get('js/directives/phMobilePrefix.json').success(function(data){
			search.mains = data;
		});
		
	}]);
	
	
})();
