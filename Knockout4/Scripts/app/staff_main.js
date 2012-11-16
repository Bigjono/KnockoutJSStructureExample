/// <reference path="../_references.js" />
(function () {

    var root = this;

    root.require.config({
        baseUrl: '/Scripts/app/staff',
        urlArgs: "bust=" + (new Date()).getTime()
    });


    define3RdPartyModules();
    loadPluginsAndBoot();
    


    function define3RdPartyModules() {
        //These are already loaded via bundles
        // define them and put them in the root object.
        define("jquery", [], function () { return root.jQuery; });
        define("ko", [], function() { return root.ko; });
        define("amplify", [], function() { return root.amplify; });        

    }

    function loadPluginsAndBoot() {
        requirejs([], boot);
    }

    function boot() {
        console.log("main boot loader running");
        require(['bootstrapper'], function (bs) {
             bs.run();
        });
    }

})();