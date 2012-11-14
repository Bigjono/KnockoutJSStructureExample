define('bootstrapper',    
    ['jquery', 'dataservice'],
    function ($,dataservice) {
        var run = function() {

            console.log("bootstrapper.run executed");
            
            console.log(dataservice);

        };
            
        return {
            run: run
        };
    });