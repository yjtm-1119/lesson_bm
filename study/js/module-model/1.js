var foo = (function (id) { 
    function change() {
        publicAPI.identify = identify2;
    }
    function identify1() {
        console.log(id);
    }
    function identify2() {
        console.log(id.toUpperCase())
    }
    var publicAPI = {
        change: change,
        identify: identify1
    };
    // console.log(publicAPI);
    // console.log(publicAPI.change);
    return publicAPI;
})("hello world")


foo.identify();
foo.change();
foo.identify();
