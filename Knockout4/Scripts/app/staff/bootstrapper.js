var sampleapp = sampleapp || {};
sampleapp.bootstrapper = (function () {


    var run = function() {


        sampleapp.staffdataservice.getAllStaff(function (data) {
        

            console.log(data);
            sampleapp.vm.globalStaffMembers = ko.mapping.fromJS(data);
            ko.applyBindings(sampleapp.vm);

            console.log(sampleapp.vm);
        });

    };

    return {
        run: run
    };
})();


