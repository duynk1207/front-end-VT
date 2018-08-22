var myApp = angular.module('myAppDatXe', []);

myApp.controller('myControllerDatXe', function($scope) {
	$scope.isInvisible = false;

	$scope.objDriver = [
		{name: 'Tran Van A', code: 'NV001', dv: 'dv01', email: 'anv@gmail.com'},
		{name: 'Tran Van B', code: 'NV002', dv: 'dv02', email: 'bnv@gmail.com'},
		{name: 'Tran Van C', code: 'NV003', dv: 'kcq', email: 'cnv@gmail.com'},
		{name: 'Tran Van D', code: 'NV004', dv: 'kcq', email: 'dnv@gmail.com'},
		{name: 'Tran Van E', code: 'NV005', dv: 'kcq', email: 'env@gmail.com'},
		{name: 'Tran Van F', code: 'NV006', dv: 'kcq', email: 'fnv@gmail.com'},
		{name: 'Tran Van G', code: 'NV007', dv: 'kcq', email: 'gnv@gmail.com'}
	];

	$scope.objCar = [
		{name: 'A', BS: '012345', type: "Hatchback", seat: "4"},
		{name: 'B', BS: '154156', type: "Sedan", seat: "6"},
		{name: 'C', BS: '548444', type: "MPV", seat: "8"},
		{name: 'D', BS: '219878', type: "SUV", seat: "4"},
		{name: 'E', BS: '219875', type: "Crossover", seat: "8"},
		{name: 'F', BS: '987946', type: "Couple", seat: "6"},
		{name: 'G', BS: '654982', type: "Convertible", seat: "8"}
	];

	$scope.emps = [
		{name: 'Nguyen Van A', code: 'NV001', dv: 'dv01', img: 'img01', email: 'anv@gmail.com'},
		{name: 'Nguyen Van B', code: 'NV002', dv: 'dv02', img: 'img02', email: 'bnv@gmail.com'},
		{name: 'Nguyen Van C', code: 'NV003', dv: 'kcq', img: 'img03', email: 'cnv@gmail.com'},
		{name: 'Nguyen Van D', code: 'NV004', dv: 'kcq', img: 'img04', email: 'dnv@gmail.com'},
		{name: 'Nguyen Van E', code: 'NV005', dv: 'kcq', img: 'img05', email: 'env@gmail.com'},
		{name: 'Nguyen Van F', code: 'NV006', dv: 'kcq', img: 'img06', email: 'fnv@gmail.com'},
		{name: 'Nguyen Van G', code: 'NV007', dv: 'kcq', img: 'img07', email: 'gnv@gmail.com'}
	];

	$scope.leaders = [
		{name: "leader1", code: "L001", dv: "kcq", img: "img01", email: "leader1@gmail.com"},
		{name: "leader2", code: "L002", dv: "kcq", img: "img02", email: "leader2@gmail.com"},
		{name: "leader3", code: "L003", dv: "kcq", img: "img03", email: "leader3@gmail.com"},
	];

	$scope.objTrip = [];
	for(var i = 0; i < $scope.objDriver.length; i++) {
		$scope.objTrip[i] = {codeTrip: i, driver: $scope.objDriver[i], car: $scope.objCar[i], from: '2018/08/19 ' + ("0" + (i+9)).slice(-2) + ':00',
				to: '2018/08/19 ' + ("0" + (i + 10)).slice(-2) + ':00', ratting: '5', typeTrip: "1-way", reason: "co viec ban", members: [$scope.emps[i], $scope.emps[4]],
				manager: $scope.leaders[0].name, ULs: $scope.leaders[1].name, COS: $scope.leaders[2].name}
	}

	var dc;
	$scope.selectDriver = function(code, name) {
		dc = code.trim();
		$scope.driverCode = name.trim();
	}

	$scope.selectCar = function(bs) {
		$("input[name='carName']").val(bs);
		$scope.carBS = bs.trim();
	}

	$scope.searchDatXe = function(){
		$scope.objSearch = [];
		var driverCode = "", carBS = "", from = "", to = "";

		if(dc != null && dc.trim().length > 0) {
			driverCode = dc.trim();
		}
		if($scope.carBS != null && $scope.carBS.trim().length > 0) {
			carBS = $scope.carBS.trim();
		}
		if($scope.fromTime != null && $scope.fromTime.trim().length > 0) {
			from = $scope.fromTime.trim();
		}
		if($scope.toTime != null && $scope.toTime.trim().length > 0) {
			to = $scope.toTime.trim();
		}

		var tbc = 0;

		if(driverCode.length == 0 && carBS.length == 0 && from.length == 0 && to.length == 0) {
			for(var i = 0; i < $scope.objTrip.length; i++) {
				tbc += parseInt($scope.objTrip[i].ratting);
				$scope.objSearch.push($scope.objTrip[i]);
			}
		} else {
			for (var i = 0; i < $scope.objTrip.length; i++) {
				if(validateSearch(from, to, driverCode, carBS, $scope.objTrip[i])) {
					tbc += parseInt($scope.objTrip[i].ratting);
					$scope.objSearch.push($scope.objTrip[i]);
				}
			}
		}

		$scope.avrRatting = Math.floor(tbc/$scope.objSearch.length);
		$scope.isInvisible = $scope.isInvisible = true;
	}

	$scope.showTripInfo = function(codeTrip) {
		for(var i = 0; i < $scope.objTrip.length; i++) {
			if($scope.objTrip[i].codeTrip == codeTrip) {
				$scope.inforTrip = $scope.objTrip[codeTrip];
				break;
			}
		}
	}

	//	when click button reset
	$scope.reset = function() {
		$scope.fromTime = "";
		$scope.toTime = "";
		$scope.driverCode = "";
		$scope.carBS = "";
		dc = null;
	}

	//	check conditions to search
	function validateSearch(from, to, driverCode, carBS, ob2) {
		var fromDate, toDate;
		var objs2FromDate = new Date(ob2.from.trim());
		var objs2ToDate = new Date(ob2.to.trim());

		if(from.length != 0 && to.length != 0 && driverCode.length != 0 && carBS.length != 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objs2FromDate - fromDate) >= 0) && ((objs2ToDate - toDate) <= 0) && (ob2.driver.code == driverCode || ob2.car.BS == carBS);
		} else if(from.length == 0 && to.length != 0 && driverCode.length != 0 && carBS.length != 0) {
			toDate = new Date(to);

			return ((objs2ToDate - toDate) <= 0) && (ob2.driver.code == driverCode || ob2.car.BS == carBS);
		} else if(from.length != 0 && to.length == 0 && driverCode.length != 0 && carBS.length != 0) {
			fromDate = new Date(from);

			return ((objs2FromDate - fromDate) >= 0) && (ob2.driver.code == driverCode || ob2.car.BS == carBS);
		} else if(from.length != 0 && to.length != 0 && driverCode.length == 0 && carBS.length != 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objs2FromDate - fromDate) >= 0) && ((objs2ToDate - toDate) <= 0) && ob2.car.BS == carBS;
		} else if(from.length != 0 && to.length != 0 && driverCode.length != 0 && carBS.length == 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objs2FromDate - fromDate) >= 0) && ((objs2ToDate - toDate) <= 0) && ob2.driver.code == driverCode;
		} else if(from.length == 0 && to.length == 0 && driverCode.length != 0 && carBS.length != 0) {
			return ob2.driver.code == driverCode || ob2.car.BS == carBS;
		} else if(from.length == 0 && to.length != 0 && driverCode.length == 0 && carBS.length != 0) {
			toDate = new Date(to);

			return ((objs2ToDate - toDate) <= 0) && ob2.car.BS == carBS;
		} else if(from.length == 0 && to.length != 0 && driverCode.length != 0 && carBS.length == 0) {
			toDate = new Date(to);

			return ((objs2ToDate - toDate) <= 0) && ob2.driver.code == driverCode;
		} else if(from.length != 0 && to.length == 0 && driverCode.length == 0 && carBS.length != 0) {
			fromDate = new Date(from);

			return ((objs2FromDate - fromDate) >= 0) && ob2.car.BS == carBS;
		} else if(from.length != 0 && to.length == 0 && driverCode.length != 0 && carBS.length == 0) {
			fromDate = new Date(from);

			return ((objs2FromDate - fromDate) >= 0) && ob2.driver.code == driverCode;
		} else if(from.length != 0 && to.length != 0 && driverCode.length == 0 && carBS.length == 0) {
			fromDate = new Date(from);
			toDate = new Date(to);

			return ((objs2FromDate - fromDate) >= 0) && ((objs2ToDate - toDate) <= 0);
		} else if(from.length == 0 && to.length == 0 && driverCode.length == 0 && carBS.length != 0) {
			return ob2.car.BS == carBS;
		} else if(from.length == 0 && to.length == 0 && driverCode.length != 0 && carBS.length == 0) {
			return ob2.driver.code == driverCode;
		} else if(from.length == 0 && to.length != 0 && driverCode.length == 0 && carBS.length == 0) {
			toDate = new Date(to);

			return (objs2ToDate - toDate) <= 0;
		} else if(from.length != 0 && to.length == 0 && driverCode.length == 0 && carBS.length == 0) {
			fromDate = new Date(from);

			return (objs2FromDate - fromDate) >= 0;
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
	}).on('dp.show', function() {
		return $(this).data("DateTimePicker").defaultDate();
	});
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
		$('#fromDate, #toDate, #dropDownDriver, #dropDownCar').val('');
	});
	//	end set up datetimepicker
});

function configDropdown(){
	$('input[name="driverName"], input[name="carName"]').click(function(){
		$('.ulDv').removeClass('dropdown-menu-right');
	});
	$('.btn-custom').click(function(){
		$('.ulDv').addClass('dropdown-menu-right');
	});
}
