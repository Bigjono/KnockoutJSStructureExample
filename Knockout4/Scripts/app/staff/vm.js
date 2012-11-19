var sampleapp = sampleapp || {};
sampleapp.vm = (function ()
{
    var staffMembers = ko.observableArray();

    var
        addStaffMember = function (data, event) {
            var item ={ "firstName": "Luke", "surname": "skywalker", "emailAddress": "luke@skywalkerranch.com", "telephone": "123465789",id: 27 ,mobile:"123456789"};
            console.log(item);

            sampleapp.vm.globalStaffMembers.push(ko.mapping.fromJS(item));

            console.log(event);
    },
    removeStaffMember = function(data,event) {

        console.log(data);

        sampleapp.vm.globalStaffMembers.remove(data);
   

    };


    return {
        globalStaffMembers: staffMembers,
        addStaffMember: addStaffMember,
        removeStaffMember:removeStaffMember
    };

})();