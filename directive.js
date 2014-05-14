'use strict';

angular.module('mlg-wms-erp-title', [])
  .directive('mlgWmsErpTitle', function () {
    var directiveDefinitionObject = {
      restrict:   'E',
      scope:      {
        defaultID: '@id'
      },
      template:   '<span>{{title}}</span>',
      controller: ['$scope', '$http', function ($scope, $http) {
        var nodeID = $scope.defaultID;
        $http.get('/b/api/boutique/MobileERP/' + nodeID)
          .success(function (response) {
            $scope.title = response.pageHeader || response.button;
            $scope.title = $scope.title + ' | ' + nodeID;
          });
      }]
    }
    return directiveDefinitionObject;
  });