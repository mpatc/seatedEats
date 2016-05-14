(function () {
  'use strict';

  angular
    .module('menus')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Menus',
      state: 'menus',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'menus', {
      title: 'List Menus',
      state: 'menus.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'menus', {
      title: 'Create Menu',
      state: 'menus.create',
      roles: ['user']
    });
  }
})();
