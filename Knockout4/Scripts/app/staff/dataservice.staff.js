define('dataservice.staff',
     ['amplify'],
    function (amplify) {

        /// setup and definition
        var init = function () {

            console.log("staff data service init");

            var allStaffUrl = "/api/staff";
            var staffMemberUrl = "/api/staff/{id}";

            amplify.request.define("getAllStaff", "ajax", {
                url: allStaffUrl,
                contentType: "application/json",
                type: "GET"
            }),
            amplify.request.define("getStaffMember", "ajax",
                {
                    url: staffMemberUrl,
                    contentType: "application/json",
                    type: "GET"
                });

        },
        getAllStaff = function (callback) {
            console.log("asking for all staff");
            return amplify.request({
                resourceId: 'getAllStaff',
                success: callback 
                
            });

        },
        getStaffMember = function (callback, id) {
            return amplify.request({
                resourceId: 'getStaffMember',
                data: { id: id },
                success: callback 
            });
        };




        init();


        return {
            getAllStaff: getAllStaff,
            getStaffMember: getStaffMember
        };

    });