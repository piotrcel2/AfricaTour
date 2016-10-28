$(document).ready(function () {

    var klikacz = $('#klikacz'); // do usunięcia!
    
    var logo = $('.logo');
    var headerout = $('.headerout');
    var breaksection = $('.breaksection');
    var breakpattern = $('.breakpattern');
    var navlist = $('.navlist');
    var navbutton = $('.fa-bars');
    var navaltlist = $('.navaltlist');
    var breakline = $('.breakline');
    var section1 = $('.section1');
    var countrylist = $('.countrylist');
    var picboxout = $('.picboxout');
    var picboxin = $('.picboxin');
    var countryname = $('.countryelement');
    var prevbutton = $('#prev');
    var nextbutton = $('#next');
    
    var countryindex = Math.floor((Math.random() * 5));;
    var pictureindex = 1;
    
    var pictureblocks = $('.picboxin ul');
    
    
    $(window).resize(function(){        //resize okna na bieżąco 
      
        setwidth();
        //poza nadaniem szerokości bloku- ustaw też nową pozycję dla danej rozdzielczości
    })
    
    setnewpicture(); // wywołanie na początek pierwszego obrazka

    
    
    
    pictureblocks.each(function (index,value){      //dzięki temu dublujemy pierwszy i ostatni element na koniec i początek listy- dla slidera
        
        var firstelementtoclone = $(this).children().first().clone();
        var lastelementtoclone = $(this).children().last().clone();
        
        $(this).append(firstelementtoclone);
        $(this).prepend(lastelementtoclone);
        
    })
    
    var imgs = $('.imgclass');  //odświeżenie obrazków
    var pictureblocks = $('.picboxin ul'); // odświeżenie list obrazków
    
    

    
    
    
    
    
    
    klikacz.on('click', function(){     // do usunięcia!!
        
        setwidth();
    });
    
    
    
    function setwidth (){
        
        var newimg = $('.shown .imgclass');     //dla wywołania szerokości wyświetlonych w danym momencie elementów!!
        
        pictureblocks.css('width', newimg.width()*6);
    }
    
    setwidth(); // wykonywane również przy każdym resize
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    prevbutton.on('click', function(){              //PRZYCISK prev!!!!
        
 
    });
    
    nextbutton.on('click', function(){              //PRZYCISKI next!!!!

        
    });
    
    
    
    
    countryname.each(function (index,value0){       //PRZYCISKI WYBORU PAŃSTW!!!!
        
       $(this).on('click', function(){
           
           if ( $(this).data('index') != countryindex ){
               countryindex = $(this).data('index');
               setnewpicture();
               
           } else {
               
               //brak akcji, bo index tego państwa był już wybrany
           }
                  
       });
         
    });
    
    
    
    
    function setnewpicture(){
        
    
        pictureblocks.removeClass('shown');
        pictureblocks.addClass('hidden');
        $(pictureblocks[countryindex]).removeClass('hidden');
        $(pictureblocks[countryindex]).addClass('shown');
   
        
    }
    
    

    
    
    function match_media_with_listener() {

        var mq = window.matchMedia("(max-width: 768px)");

        mq.addListener(WidthChange);
        WidthChange(mq); // zmiana szerokości ekranu


        function WidthChange(mediaQuery) {

            if (mediaQuery.matches) {
                
                // MAŁE OKNO!!!!!
                
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
                breakpattern.addClass('patternsmall');
                breakpattern.removeClass('patternbig');
                breakline.addClass('breaklinesmall');
                breakline.removeClass('breaklinebig');
                section1.addClass('section1small');
                section1.removeClass('section1big');
                countrylist.addClass('countrylistsmall');
                countrylist.removeClass('countrylistbig');
                picboxout.addClass('picboxoutsmall');
                picboxout.removeClass('picboxoutbig');
                picboxin.addClass('picboxinsmall');
                picboxin.removeClass('picboxinbig');
                imgs.addClass('imgclasssmall');
                imgs.removeClass('imgclassbig');
                
            } else {
                
                // DUŻE OKNO!!!!!
                
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
                breakpattern.addClass('patternbig');
                breakpattern.removeClass('patternsmall');
                breakline.addClass('breaklinebig');
                breakline.removeClass('breaklinesmall');
                section1.addClass('section1big');
                section1.removeClass('section1small');
                countrylist.addClass('countrylistbig');
                countrylist.removeClass('countrylistsmall');
                picboxout.addClass('picboxoutbig');
                picboxout.removeClass('picboxoutsmall');
                picboxin.addClass('picboxinbig');
                picboxin.removeClass('picboxinsmall');
                imgs.addClass('imgclassbig');
                imgs.removeClass('imgclasssmall');
                
                
                
                
                
            }
        }
    }


    match_media_with_listener();

    navbutton.on('click', function(){
        
        navaltlist.toggleClass('hidden');
        navaltlist.toggleClass('shown');
    })

    
    
    
});