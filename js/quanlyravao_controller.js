var myApp = angular.module('myAppRaVao', []);

//	start create filter dv when add to dropdown
myApp.filter('unique', function() {
	return function(collection, keyName) {
		var output = [], keys = [];

		angular.forEach(collection, function(item) {
			var key = item[keyName];
			if(keys.indexOf(key) === -1) {
				keys.push(key);
				output.push(item);
			}
		});

		return output;
	}
});
//	end create filter dv when add to dropdown

myApp.controller('myControllerRaVao', function($scope) {
	$scope.isInvisible = false;

	//	create data employee
	$scope.emps = [
		{name: 'Nguyen Van A', code: 'NV001', dv: 'dv01', img: 'img01', email: 'anv@gmail.com'},
		{name: 'Nguyen Van B', code: 'NV002', dv: 'dv02', img: 'img02', email: 'bnv@gmail.com'},
		{name: 'Nguyen Van C', code: 'NV003', dv: 'kcq', img: 'img03', email: 'cnv@gmail.com'},
		{name: 'Nguyen Van D', code: 'NV004', dv: 'kcq', img: 'img04', email: 'dnv@gmail.com'},
		{name: 'Nguyen Van E', code: 'NV005', dv: 'kcq', img: 'img05', email: 'env@gmail.com'},
		{name: 'Nguyen Van F', code: 'NV006', dv: 'kcq', img: 'img06', email: 'fnv@gmail.com'},
		{name: 'Nguyen Van G', code: 'NV007', dv: 'kcq', img: 'img07', email: 'gnv@gmail.com'}
	];

	//	create data info go out
	$scope.objGoOut = [];
	for (var i = 0; i < $scope.emps.length; i++) {
		$scope.objGoOut[i] = {emp: $scope.emps[i], from: '2018/08/19 ' + ("0" + (i+9)).slice(-2) + ':00', to: '2018/08/19 ' + ("0" + (i + 10)).slice(-2) + ':00',
				reason: "co viec ban", status: (i%2 == 0) ? "active" : "deactive"}
	};

	//	when click item in dropdown
	$scope.eventSelectDV = function(dv){
		$('input[name="nameDv"]').val(dv);
		$scope.dvName = dv;
	};

	//	when click button search
	$scope.searchRaVao = function(){
		$scope.objSearch = [];
		var nameDv = "", from = "", to = "";

		if($scope.dvName != null && $scope.dvName.trim().length > 0) {
			nameDv = $scope.dvName.trim();
		}
		if($scope.fromTime != null && $scope.fromTime.trim().length > 0) {
			from = $scope.fromTime.trim();
		}
		if($scope.toTime != null && $scope.toTime.trim().length > 0) {
			to = $scope.toTime.trim();
		}

		if(nameDv.length == 0 && from.length == 0 && to.length == 0) {
			for(var i = 0; i < $scope.objGoOut.length; i++) {
				$scope.objSearch.push($scope.objGoOut[i]);
			}
		} else {
			for (var i = 0; i < $scope.objGoOut.length; i++) {
				if(validateSearch(from, to, nameDv, $scope.objGoOut[i])) {
					$scope.objSearch.push($scope.objGoOut[i]);
				}
			}
		}

		$scope.isInvisible = $scope.isInvisible = true;
	}

	//	when click button reset
	$scope.reset = function() {
		$scope.fromTime = "";
		$scope.toTime = "";
		$scope.dvName = "";
	}

	//	check conditions to search
	function validateSearch(from, to, dv, ob2) {
		var fromDate, toDate;
		var objGoOutFromDate = new Date(ob2.from.trim());
		var objGoOutToDate = new Date(ob2.to.trim());

		if(from.length != 0 && to.length != 0 && dv.length != 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objGoOutFromDate - fromDate) >= 0) && ((objGoOutToDate - toDate) <= 0) && ob2.emp.dv == dv;
		} else if(from.length == 0 && to.length != 0 && dv.length != 0) {
			toDate = new Date(to);

			return ((objGoOutToDate - toDate) <= 0) && ob2.emp.dv == dv;
		} else if(from.length != 0 && to.length == 0 && dv.length != 0) {
			fromDate = new Date(from);

			return ((objGoOutFromDate - fromDate) >= 0) && ob2.emp.dv == dv;
		} else if(from.length != 0 && to.length != 0 && dv.length == 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objGoOutFromDate - fromDate) >= 0) && ((objGoOutToDate - toDate) <= 0);
		} else if(from.length == 0 && to.length == 0 && dv.length != 0) {
			return ob2.emp.dv == dv;
		} else if(from.length == 0 && to.length != 0 && dv.length == 0) {
			toDate = new Date(to);

			return (objGoOutToDate - toDate) <= 0;
		} else if(from.length != 0 && to.length == 0 && dv.length == 0) {
			fromDate = new Date(from);

			return (objGoOutFromDate - fromDate) >= 0;
		}
	}
});

$(document).ready(function() {
   configDropdown();

   //	start set up datetimepicker
   var setDateFrom = function(currentDateTime) {
		this.setOptions({
			maxDate: $('#toDate').val() ? $('#toDate').val().split(' ')[0] : new Date()
		});
		this.setOptions({
			maxTime: $('#toDate').val() ? $('#toDate').val().split(' ')[1] : false
		});
	}
	var setDateTo = function(currentDateTime) {
		this.setOptions({
			maxDate: new Date(),
			minDate: $('#fromDate').val() ? $('#fromDate').val().split(' ')[0] : false
		});
		this.setOptions({
			minTime: $('#fromDate').val() ? $('#fromDate').val().split(' ')[1] : false
		});
	}

	$('#fromDate').datetimepicker({
		step: 1,
		closeOnDateSelect: false,
		onShow: setDateFrom
	})
	$('#toDate').datetimepicker({
		step: 1,
		closeOnDateSelect: false,
		maxDate: new Date(),
		onShow: setDateTo
	});

	//	start create even icon calendar
	$('#iconCalFrom').on('click', function() {
		var input = $('#iconCalFrom').parent().find("input");
		$(input).datetimepicker({
			step: 1,
			closeOnDateSelect: false,
			onShow: setDateFrom
		});
		$(input).datetimepicker("show");
	});

	$('#iconCalTo').on('click', function() {
		var input = $('#iconCalTo').parent().find("input");
		$(input).datetimepicker({
			step: 1,
			closeOnDateSelect: false,
			maxDate: new Date(),
			onShow: setDateTo
		});
		$(input).datetimepicker("show");
	});
	//	end create even icon calendar
	//	end set up datetimepicker

	//	start set up reset button
	$('#btnReset').on('click', function() {
		$('#fromDate, #toDate, #dropDownDv').val('');
	});
	//	end set up datetimepicker
});

function configDropdown(){
	 $('input[name="nameDv"]').click(function(){
    	$('.ulDv').removeClass('dropdown-menu-right');
    });
    $('.btn-custom').click(function(){
    	$('.ulDv').addClass('dropdown-menu-right');
    });
}
