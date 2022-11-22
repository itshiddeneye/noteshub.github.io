if(typeof(Storage) !== "undefined") {

    var storedResult = localStorage.getItem("location");
    var storedURL = localStorage.getItem("url");

     if (storedURL !== 'undefined' && storedResult !== null) {


        if (storedResult !== 'undefined' && storedResult !== null) {

            $(window).scrollTop(storedResult);
        }
     }

    $(window).scroll(function () { 
      var scrolledDown = window.scrollY;
        var currentUrl = window.location.href;
        localStorage.setItem("location", scrolledDown);
        localStorage.setItem("url", currentUrl);
    });

} else {
    // No Web Storage Support.
}