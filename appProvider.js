//Provider ...what is a provider
var app = angular.module('appProvider', []);


function MyObject() {
    this.getValue = function () {
        return 'My object value';
    }
}


var myProvider = function () {
    console.log('myProvider.$get() called from provider');
    this.$get = function () {
        return "My Value";
    };
}

app.provider('myProvider', myProvider);