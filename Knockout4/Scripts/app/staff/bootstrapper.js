define('bootstrapper',    
    ['jquery'],
    function ($) {
        var 
            run = function () {
                 
                
                console.log("bootstrapper.run executed");
            };

        return {
            run: run
        };
    });