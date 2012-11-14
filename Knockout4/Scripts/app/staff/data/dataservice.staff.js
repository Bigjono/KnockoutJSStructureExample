/// <reference path="../../_references.js" />
define('dataservice.staff',
    ['amplify'],
    function (amplify) {
 
        /// setup and definition
        var init = function() {

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

        };




        init();


        return {
           
            
        };

    });