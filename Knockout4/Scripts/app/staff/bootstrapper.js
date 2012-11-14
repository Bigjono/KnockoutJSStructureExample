define('bootstrapper',    
    ['jquery', 'dataservice'],
    function ($,dataservice) {
        var run = function() {

            console.log("bootstrapper.run executed");

            console.log(dataservice);

        },
        staffCallBackSuccess = function(data) {
            console.log(data);
        },
        staffCallBackError= function(data) {
            console.log("tits up");
        };
            
        return {
            run: run
        };
    });