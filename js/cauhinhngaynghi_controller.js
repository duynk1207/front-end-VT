angular.module('myApp',[]).controller('myCtrl', function($scope){
	$scope.dates =["08/19/2018", "08/18/2018"];

	$scope.addNewRow = function(){
		let checkDup = false;
		for (var i = $scope.dates.length - 1; i >= 0; i--) {
			if($scope.dates[i] == $scope.date){
				checkDup = true;
				break;
			}
		}
		if($scope.date != undefined || $scope.date != null && $scope.date.trim().length > 0){
			if(!checkDup){
				$scope.dates.push($scope.date);
				$('#datepicker').val('');
			}


		}
	};

	$scope.doDelete = function(d){
		console.log(d);
		let index = $scope.dates.indexOf(d);
		if(index > -1){
			$scope.dates.splice(index,1);
		}
	};
});
