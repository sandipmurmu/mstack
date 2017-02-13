(function(){
    'use-strict';

    angular
    .module('app', ['ui.route'])
    .config(config);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");
})();