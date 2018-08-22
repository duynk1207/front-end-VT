angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {cheflid: '1', cheflName: 'Nguyễn Văn A', cheflPhone: '0866075481'},
        {cheflid: '2', cheflName: 'Nguyễn Văn B', cheflPhone: '0866097821'},
        {cheflid: '3', cheflName: 'Nguyễn Văn C', cheflPhone: '0866088590'},
        {cheflid: '4', cheflName: 'Nguyễn Văn D', cheflPhone: '0866004927'},
        {cheflid: '5', cheflName: 'Nguyễn Văn E', cheflPhone: '01692305940'},
        {cheflid: '6', cheflName: 'Nguyễn Văn F', cheflPhone: '01686033140'},
        {cheflid: '7', cheflName: 'Nguyễn Văn G', cheflPhone: '01689598704'},
        {cheflid: '8', cheflName: 'Nguyễn Văn H', cheflPhone: '01677406980'},
    ];
    $scope.formConfigs = [{
    	positionOfKitchen: 'KV1',
    	nameOfKitchen: 'AT1',
    	nameOfChefl: 'Nguyễn Văn X',
    	phoneOfChefl: '0981344610',
    	comment: 'This is a funny text!'
    }];

    $scope.addNewRow = function(){
    	let check = true;
    	if($scope.nameKitchen==undefined || $scope.nameKitchen == null && $scope.nameKitchen.trim().length == 0){
    		check = false;
	   	}else if($scope.posKitchen==undefined || $scope.posKitchen == null && $scope.posKitchen.trim().length == 0){
	   		check = false;
	   	}
	   	if($scope.nameChefl==undefined || $scope.nameChefl == null && $scope.nameChefl.trim().length == 0){
	   		check = false;
	   	}else{
	   		let checkExist = false;
	   		for (var i = $scope.names.length - 1; i >= 0; i--) {

	   			if($scope.names[i].cheflName.trim() == $scope.nameChefl.trim()){
	   				checkExist = true;
	   				break;
	   			}
	   		}
	   		if(!checkExist){
	   			check = false;
	   			alert("Chefl's name must be in list Chefl");
	   			$('#sdt').val('');
	   		}
	   	}
	   	if(check){
	   		$scope.formConfigs.push({
	    		positionOfKitchen: $scope.posKitchen,
	    		nameOfKitchen: $scope.nameKitchen,
	    		nameOfChefl: $scope.nameChefl,
	    		phoneOfChefl: $scope.sdt,
	    		comment: $scope.comment
	    	});

	   	}
    };

    $scope.eventSelectChefl = function(obj){
    	$scope.nameChefl = obj.cheflName;
    	$('.inputChefl').attr('value', obj.cheflName);
    	var sdt = obj.cheflPhone;
		$('#sdt').val(sdt);
    };

    $scope.export = function(){
    	var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
	    var textRange; var j=0;
	    tab = document.getElementById('tableConfigKitchen'); // id of table

	    for(j = 0 ; j < tab.rows.length ; j++)
	    {
	        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
	        //tab_text=tab_text+"</tr>";
	    }

	    tab_text=tab_text+"</table>";
	    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
	    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
	    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf("MSIE ");

	    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
	    {
	        txtArea1.document.open("txt/html","replace");
	        txtArea1.document.write(tab_text);
	        txtArea1.document.close();
	        txtArea1.focus();
	        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
	    }
	    else                 //other browser not tested on IE 11
	        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

	    return (sa);
    };

});
