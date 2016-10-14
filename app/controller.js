(function () {
	'use strict';
    angular.module('meanApp').controller('meanAppCtrl', MeanAppCtrl);

    MeanAppCtrl.$inject = ['$scope', '$http'];

    /**
     *
     */
    function MeanAppCtrl($scope, $http) {

        $scope.addContact = function(){           
            $http.post('/addcontact', { params: { contact: $scope.contact } }).success(function(response) {
                $scope.contact = {
                    name: "",
                    email: "",
                    number: "",
                    _id: null
                };                    
                console.log("Contact added successfully");
                $scope.getContactList();
            });
        };

        $scope.deleteContact = function(id){
            $http.post('/deletecontact', { params: { _id: id } }).success(function(response){
                console.log("Contact deleted successfully");
                $scope.getContactList();
            });
        };

        $scope.updateContact = function(id){
            $http.put('/updatecontact', { params: { contact: $scope.contact } }).success(function(response){
                $scope.contact = {
                    name: "",
                    email: "",
                    number: "",
                    _id: null
                };
                console.log("Contact updated successfully");
                $scope.getContactList();
            });
        };

        $scope.editContact = function(contact){
            $scope.contact.name = contact.name;
            $scope.contact.email = contact.email;
            $scope.contact.number = contact.number;
            $scope.contact._id = contact._id;
        };

        $scope.getContactList = function(){
            $http.get('/contactlist').success(function(response){
                console.log(response);
                $scope.contactslist = response;
            });
        };

        var initialize = function(){
            $scope.contact = {
                name: "",
                email: "",
                number: "",
                _id: null
            };
            $scope.getContactList();
        };
        
        initialize();
    }
})();