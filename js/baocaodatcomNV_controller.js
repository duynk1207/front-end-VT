var stuff = [{
    label: 'VPNET',
    children: [{
            label: 'Cơ quan'
        },
        {
            label: 'PM1'
        },
        {
            label: 'PM2',
            children: [{
                    label: 'Tòa 1'
                },
                {
                    label: 'Tòa 2'
                },
                {
                    label: 'Tòa 3'
                }
            ]
        }
    ]
}];

(function () {
    'use strict';

    angular.module('MyApp', ['ngMaterial', 'ngMessages', 'ivh.treeview'])
        .config(function (ivhTreeviewOptionsProvider, $sceDelegateProvider) {
            ivhTreeviewOptionsProvider.set({
                defaultSelectedState: false,
                validate: true,
                expandToDepth: -1,
                twistieLeafTpl: '<span style="cursor: default;">&#8192;&#8192;</span>'
            });
        })

        .controller('AppCtrl', function ($scope, $timeout, $q, $log) {
            this.stuff = stuff;
            $scope.treeName = "treeSample";
            $scope.itemIcon = "icons-medium empty-doc";
            $scope.checkStates = ['checked', 'indeterminate', 'unchecked'];
            $scope.currentState = 'checked';
            $scope.checkList = [];
            $scope.checkBoxSettings = {
                autoCheck: true,
                threeState: true
            }

            var allCook = [{
                cook: "Bếp 1",
                id: "1",
                report: [{
                    team: "KCQ",
                    date: new Date(),
                    total: "20",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "KCF",
                    date: new Date(),
                    total: "700",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "CCQ",
                    date: new Date(),
                    total: "300",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }]
            }, {
                cook: "Bếp 2",
                id: "2",
                report: [{
                    team: "KCF",
                    date: new Date(),
                    total: "32",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "KCQ",
                    date: new Date(),
                    total: "300",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "KCQ",
                    date: new Date(),
                    total: "700",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }]
            }, {
                cook: "Bếp 3",
                id: "3",
                report: [{
                    team: "KCQ",
                    date: new Date(),
                    total: "300",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "KCF",
                    date: new Date(),
                    total: "300",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }, {
                    team: "CCQ",
                    date: new Date(),
                    total: "400",
                    id: "ABC123",
                    mail: "ABC@viettel.inc",
                    name: "Hoàng Văn A",
                    months: [{
                        month: 1,
                        total: 200
                    }, {
                        month: 2,
                        total: 400
                    }, {
                        month: 3,
                        total: 300
                    }, {
                        month: 4,
                        total: 200
                    }, {
                        month: 5,
                        total: 600
                    }, {
                        month: 6,
                        total: 200
                    }, {
                        month: 7,
                        total: 200
                    }, {
                        month: 8,
                        total: 200
                    }, {
                        month: 9,
                        total: 200
                    }, {
                        month: 10,
                        total: 200
                    }, {
                        month: 11,
                        total: 200
                    }, {
                        month: 12,
                        total: 200
                    }, {
                        month: 13,
                        total: 200
                    }, {
                        month: 14,
                        total: 200
                    }, {
                        month: 15,
                        total: 200
                    }, {
                        month: 16,
                        total: 200
                    }, {
                        month: 17,
                        total: 200
                    }, {
                        month: 18,
                        total: 200
                    }, {
                        month: 19,
                        total: 200
                    }, {
                        month: 20,
                        total: 200
                    }, {
                        month: 21,
                        total: 200
                    }, {
                        month: 22,
                        total: 200
                    }, {
                        month: 23,
                        total: 200
                    }, {
                        month: 24,
                        total: 200
                    }, {
                        month: 25,
                        total: 200
                    }, {
                        month: 26,
                        total: 200
                    }, {
                        month: 27,
                        total: 200
                    }, {
                        month: 28,
                        total: 200
                    }, {
                        month: 29,
                        total: 200
                    }, {
                        month: 30,
                        total: 200
                    }, {
                        month: 31,
                        total: 200
                    }]
                }]
            }];
            $scope.allCook = allCook;
            $scope.cookerData = [];
            $scope.mapStatus = {};
            var self = this;
            self.myDate = new Date();

            self.minDate = new Date(
                self.myDate.getFullYear(),
                self.myDate.getMonth() - 2,
                self.myDate.getDate()
            );

            self.maxDate = new Date(
                self.myDate.getFullYear(),
                self.myDate.getMonth(),
                self.myDate.getDate() + 2
            );

            self.onlyWeekendsPredicate = function (date) {
                var day = date.getDay();
                return day != 0 && day != 6;
            };


            function newState(cook) {
                alert("Sorry! You'll need to create a Constitution for " + cook + " first!");
            }

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for cookers... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch(query) {
                var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                    deferred;
                if (self.simulateQuery) {
                    deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve(results);
                    }, Math.random() * 1000, false);
                    return deferred.promise;
                } else {
                    return results;
                }
            }

            function searchTextChange(text) {
                $log.info('Text changed to ' + text);
                $scope.cookerData = [];
                $scope.mapStatus.loading = false;
            }

            function selectedItemChange(item) {
                $log.info('Item changed to ' + JSON.stringify(item));
                if (item != null) {
                    $scope.cookerData = item.value.report;
                    $scope.mapStatus.loading = true;
                }
                $timeout(function () {
                    // anything you want can go here and will safely be run on the next digest.
                    $scope.$apply();
                })

            }

            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {

                return allCook.map(function (cook) {
                    return {
                        value: cook,
                        display: cook.cook
                    };
                });
            }

            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);

                return function filterFn(cook) {
                    return (angular.lowercase(cook.display).indexOf(lowercaseQuery) === 0);
                };

            }

            self.simulateQuery = true;
            self.isDisabled = false;

            // list of `state` value/display objects
            self.states = loadAll();
            self.querySearch = querySearch;
            self.selectedItemChange = selectedItemChange;
            self.searchTextChange = searchTextChange;

            self.newState = newState;


            $scope.export = function () {
                var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
                var textRange;
                var j = 0;
                var tab = document.getElementById('tableReport'); // id of table

                for (j = 0; j < tab.rows.length; j++) {
                    tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
                    //tab_text=tab_text+"</tr>";
                }

                tab_text = tab_text + "</table>";
                tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
                tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
                tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
                {
                    txtArea1.document.open("txt/html", "replace");
                    txtArea1.document.write(tab_text);
                    txtArea1.document.close();
                    txtArea1.focus();
                    var sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
                } else //other browser not tested on IE 11
                    var sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

                return (sa);
            };
        });
})();
