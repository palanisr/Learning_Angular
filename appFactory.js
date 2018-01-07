var app = angular.module('appFactory',[]);

var myFactory = function(){
    console.log('myProvider.$get() called from factory');
    return 'My Value from Factory';
}

app.factory('myProviderFactory',myFactory);