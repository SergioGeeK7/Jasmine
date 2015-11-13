'use strict';

var app = angular.module('Application', ['ngResource']);

app.factory('UserFactory', function ($resource) {
    return $resource('Users/users.json');
    /*var users = [{
        name: 'sergio',
        age: 22
    }, {
        name: 'jhoana',
        age: 20
    }];



    return {
        get: function () {
            return users;
        }
    }*/

});

app.controller('MainCtrl', function ($scope, UserFactory) {
    $scope.text = 'Jasmine';
    $scope.users = UserFactory.get();
});
