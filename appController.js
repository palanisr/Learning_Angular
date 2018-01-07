var app = angular.module('appController', []);
//var app = angular.module('appController', /*['appFactory','appProvider','appService']*/[]);

var myController = function ($scope, myProvider) {

    $scope.test = ('Main Controller with normal Scope');
    console.log('myProvider: ' + myProvider);

}

app.controller('MainController', myController);

var myController2 = function ($scope, $rootScope) {
    $rootScope.msg = ('Second Controller with rootScope');
    $scope.msg2 = ('Second Controller not rootScope');
}

app.controller('SecondController', myController2);

var myController3 = function ($scope) {
    console.log('Inside third controller');

    $scope.user1 = {
        'firstname': 'Ruban',
        'lastname': 'Palani',
        'status': 'ACTIVE'
    }
    $scope.user2 = {
        'firstname': 'Sowmi',
        'lastname': 'Palani'
    }
    $scope.user3 = {
        'firstname': 'Susee',
        'lastname': 'Palani'
    }
    $scope.user4 = {
        'firstname': 'Palani',
        'lastname': 'Rasiah'
    }
    console.log($scope.user);
}

app.controller('TrdController', myController3);

//controller using this and not scope.
var myController4 = function () {
    var vm = this;
    console.log('Inside fourth controller');
    vm.name1 = 'Pascal';
    vm.email1 = 'test@gmail.com';
}

app.controller('FrthController', myController4);

var myController5 = function (myProviderFactory) {
    console.log('myProvider:' + myProviderFactory);
}

app.controller('FifthController', myController5);

var myController6 = function (myProviderFactory) {
    console.log('myProvider:' + myProviderFactory);
}

app.controller('SixthController', myController6);