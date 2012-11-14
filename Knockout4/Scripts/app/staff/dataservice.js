define('dataservice',
    [
        'data/dataservice.staff'
    ],
    function(staffService) {
        var init = function () {
            console.log("master data service init");
            console.log(staffService);
        };

        init();
        

        return {
            staff: staffService
        };
});