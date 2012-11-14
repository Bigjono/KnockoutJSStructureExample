/// <reference path="../../_references.js" />

(function() {

   

    var init = function() {

        var allStaffUrl = "/api/staff";
        var staffMemberUrl = "/api/staff/{id}";
        
        window.amplify.request.define("getStaff", "ajax", {
            url: allStaffUrl,
            contentType: "application/json",
            type: "GET"
        }),
        window.amplify.request.define("getStaffMeber", "ajax",
            {
                url: staffMemberUrl,
                contentType: "application/json",
                type: "GET"
            });

    }

    


})();