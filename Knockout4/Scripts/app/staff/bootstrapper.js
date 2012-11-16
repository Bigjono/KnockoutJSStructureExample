define('bootstrapper',    
    ['jquery','ko', 'dataservice','vm'],
    function ($,ko,dataservice,vm) {
        var run = function() {

            console.log("bootstrapper.run executed");
            
            console.log(dataservice);

            dataservice.staff.getAllStaff( function(data) {
                console.log("all staff loaded");

                console.log(data);
                vm.staffMembers=ko.mapping.fromJS(data);
                ko.applyBindings(vm);

                console.log(vm);
            });

        };
            
        return {
            run: run
        };
    });