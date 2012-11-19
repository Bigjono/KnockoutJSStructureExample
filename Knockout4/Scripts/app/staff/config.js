var sampleapp = sampleapp || {};
sampleapp.config = (function () {
        var
            // properties
            // ----------------------------------    
            currentUserId =3, // some junk data;
            init = function() {
                console.log("config init");
                


                console.log("config end init");
            };
        
         
            // call init
            init();
        return {
            /// return any properties here //
            currentUserId: currentUserId
        };
    
})();