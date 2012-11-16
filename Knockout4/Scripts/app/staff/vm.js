define("vm",
    ["ko"],
    function(ko) {
        var staffMembers = ko.observableArray();


        return {
            staffMembers:staffMembers
        };

    });