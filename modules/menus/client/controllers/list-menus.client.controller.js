(function () {
  'use strict';

  angular
    .module('menus')
    .controller('MenusListController', MenusListController)
    .controller('optionsMenuController', optionsMenuController);

  // optionsMenuController.$inject
  MenusListController.$inject = ['MenusService'];

  function MenusListController(MenusService) {
    var vm = this;

    vm.menus = MenusService.query();
  }
  function optionsMenuController($scope) {
    $scope.options = [{
      name: 'Nathon\'s Famous Hot Dog',
      price: 1.50
    },
    {
      name:'Cheesburger',
      price: 2.25
    },
    {
      name: 'Pepsi',
      price: 1.25
    },
    {
      name: 'Brooklyn Lager',
      price: 3.50
    }
  ];
  }

})();
