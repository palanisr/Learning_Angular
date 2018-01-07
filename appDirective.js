var app = angular.module('appDirective', []);

var myDirective_1 = function () {
    return {
        restrict: 'E',
        template: '<div>Hello World!</div>'
    };
}

app.directive('helloWorld', myDirective_1);

var myDirective_2 = function () {
    return {
        restrict: 'E',
        template: '<span>{{ user.firstname }} {{ user.lastname }}</span>',
        scope: {
            user: '='
        }
    };

}

app.directive('userFullname', myDirective_2);

function User(first, last, email, status) {
    console.log('Object Builder');
    this.first = first;
    this.last = last;
    this.email = email;
    this.status = status;

    //return this;
}

var myDirective_3 = function () {
    return {
        restrict: 'E',
        template: '<span>{{ us.user.firstname }} {{ us.user.lastname }} {{us.user.status}}</span>',
        scope: {
            user: '='
        },
        controllerAs: "us",
        bindToController: true,
        controller: function() {
            console.log('Inside Directive controller');
            //var user =new User('Ruban','Palani','person@email.com','Active');
            //console.log(us);
            //return user;
        return this.user.status='ACTIVER';
        }
    };
}

app.directive('test', myDirective_3);