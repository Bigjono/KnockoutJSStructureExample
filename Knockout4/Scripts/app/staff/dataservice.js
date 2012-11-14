define('dataservice',
    [
        'dataservice.staff'
    ],
    function(staff) {
        var init = function () {
            console.log("master data service init");
            
        };

        init();
        
        return {
            staff: staff
        };
});