$(document).ready(function () {

    
    var logo = $('.logo');
    var headerout = $('.headerout');
    var breaksection = $('.breaksection');
    var navlist = $('.navlist');
    var navbutton = $('.fa-bars');
    var navaltlist = $('.navaltlist');


    function match_media_with_listener() {

        var mq = window.matchMedia("(max-width: 768px)");

        mq.addListener(WidthChange);
        WidthChange(mq); // media query change


        function WidthChange(mediaQuery) {


            if (mediaQuery.matches) {
                
                // MAŁE OKNO!!!!!
                console.log("małe okno");
                
                logo.addClass('logosmall');
                logo.removeClass('logobig');
                headerout.addClass('headeroutsmall');
                headerout.removeClass('headeroutbig');
                breaksection.addClass('breaksmall');
                breaksection.removeClass('breakbig');
                navlist.addClass('hidden');
                navlist.removeClass('shown');
                navbutton.addClass('shown');
                navbutton.removeClass('hidden');
        
                
            } else {
                
                // DUŻE OKNO!!!!!
                console.log("duże okno");
                
                logo.addClass('logobig');
                logo.removeClass('logosmall');
                headerout.addClass('headeroutbig');
                headerout.removeClass('headeroutsmall');
                breaksection.addClass('breakbig');
                breaksection.removeClass('breaksmall');
                navlist.addClass('shown');
                navlist.removeClass('hidden');
                navbutton.addClass('hidden');
                navbutton.removeClass('shown');
                navaltlist.addClass('hidden');
                navaltlist.removeClass('shown');
                
                
                
                
                
                
            }
        }
    }


    match_media_with_listener();

    navbutton.on('click', function(){
        
        console.log("elo");
    })

});
