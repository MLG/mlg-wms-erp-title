angular.module('mlg-wms-erp-title', [])
  .directive('mlgWmsErpTitle', function ($http) {
    var directiveDefinitionObject = {
      restrict:   'AE',
      scope:      {
        defaultID: '@mlgWmsErpTitle'
      },
      template:   '<span>{{title}}</span>',
      controller: function ($scope, $http) {
        var nodeID = $scope.defaultID;
        $http.get('/b/api/boutique/MobileERP/' + nodeID)
          .success(function (response) {
            $scope.title = response.pageHeader || response.button;
            $scope.title = $scope.title + ' ' + nodeID;
          });
      }
    }
    return directiveDefinitionObject;
  });