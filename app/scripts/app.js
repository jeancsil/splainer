'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('splain-app', ['ngSanitize',
                         'LocalStorageModule',
                         'ui.bootstrap',
                         'gd.ui.jsonexplorer',
                         'swd.inspector-gadget',
                         'ui.ace',
                         'o19s.splainer-search']);
