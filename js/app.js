$(document).ready(function () {

    var logo = $('.logo');
    var headerout = $('.headerout');
    var breaksection = $('.breaksection');
    var breakpattern = $('.breakpattern');
    var navlist = $('.navlist');
    var navbutton = $('.fa-bars');
    var navaltlist = $('.navaltlist');
    var breakline = $('.breakline');
    var section1 = $('.section1');
    var section2 = $('.section2');
    var countrylist = $('.countrylist');
    var countryname = $('.countryelement');
    var picboxout = $('.picboxout');
    var picboxin = $('.picboxin');
    var prevbutton = $('#prev');
    var nextbutton = $('#next');
    var offerbox = $('.offerbox');
    var imgwidth;
    
    var countryindex = Math.floor((Math.random() * 5)); //losowanie od 0 do 5 (1-6) pierwszego wyświetlonego kraju
    var pictureindex = Math.floor((Math.random() * 4) + 1); //losowanie od 1 do 4 (indeksy 0-5 dla nieskonczonego slidera)
    
    var pictureblocks = $('.picboxin ul');
    
    
    $(window).resize(function(){        //resize okna na bieżąco 
      
        setwidth();
        //poza nadaniem szerokości bloku- ustaw też nową pozycję dla danej rozdzielczości
    })
    
    setnewcountry(); // wywołanie na początek pierwszego obrazka

    
    
    
    pictureblocks.each(function (index,value){      //dzięki temu dublujemy pierwszy i ostatni element na koniec i początek listy- dla slidera
        
        var firstelementtoclone = $(this).children().first().clone();
        var lastelementtoclone = $(this).children().last().clone();
        
        $(this).append(firstelementtoclone);
        $(this).prepend(lastelementtoclone);
        
    })
    
    var imgs = $('.imgclass');  //odświeżenie obrazków
    var pictureblocks = $('.picboxin ul'); // odświeżenie list obrazków
    
    

    
    
    
    
    
    
    
    
    function setwidth (){
        
        var newimg = $('.shown .imgclass');     //dla wywołania szerokości wyświetlonych w danym momencie elementów!!
        
        pictureblocks.css('width', newimg.width()*6);
        imgwidth = newimg.width();
        setposition();
        
    }
    
    setwidth(); // wykonywane również przy każdym resize
    
    
    
    function setposition (){            //nadanie pozycji listy błyskawicznie
        
        pictureblocks.animate({right: imgwidth * pictureindex}, 0);
        
    }
    

    
    
    prevbutton.on('click', function(){              //PRZYCISK prev!!!!
        
        if ( pictureindex > 1){
            
            pictureindex -= 1;
            pictureblocks.animate({right: imgwidth * pictureindex}, 100);
            
        } else {
            
            pictureindex -= 1;
            pictureblocks.animate({right: imgwidth * pictureindex}, 100, function(){
                pictureindex = 4;
                setposition();
            });
        }
 
    });
    
    
    nextbutton.on('click', function(){              //PRZYCISKI next!!!!

        
        if ( pictureindex < 4){
            
            pictureindex += 1;
            pictureblocks.animate({right: imgwidth * pictureindex}, 100);
            
        } else {
            
            pictureindex += 1;
            pictureblocks.animate({right: imgwidth * pictureindex}, 100, function(){
                pictureindex = 1;
                setposition();
            });
        }
        
        
    });
    
    
    
    
    countryname.each(function (index,value0){       //PRZYCISKI WYBORU PAŃSTW!!!!
        
       $(this).on('click', function(){
           
           if ( $(this).data('index') != countryindex ){
               pictureindex = Math.floor((Math.random() * 4) + 1);
               countryindex = $(this).data('index');
               
               setnewcountry();
               
           } else {
               
               //brak akcji, bo index tego państwa był już wybrany
           }
                  
       });
         
    });
    
    
    
    
    function setnewcountry(){ // nadanie nowego państwa
        
        
        section2.children().removeClass('shown');
        section2.children().addClass('hidden');
        $(section2.children()[countryindex]).removeClass('hidden');
        $(section2.children()[countryindex]).addClass('shown');         //działania na opisach
        $(section2.children().last()).removeClass('hidden');            //zapobiega znikaniu offerboxa
        
        pictureblocks.removeClass('shown');
        pictureblocks.addClass('hidden');
        $(pictureblocks[countryindex]).removeClass('hidden');
        $(pictureblocks[countryindex]).addClass('shown');               //działania na blokach
        
        countryname.css('color', '#967c61');
        $(countryname[countryindex]).css('color', 'white');             //podświetlenie wybranego państwa
        
        setposition();                                                  //błyskawiczne odświeżenie pozycji
        
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
                section2.addClass('section2small');
                section2.removeClass('section2big');
                countrylist.addClass('countrylistsmall');
                countrylist.removeClass('countrylistbig');
                picboxout.addClass('picboxoutsmall');
                picboxout.removeClass('picboxoutbig');
                picboxin.addClass('picboxinsmall');
                picboxin.removeClass('picboxinbig');
                imgs.addClass('imgclasssmall');
                imgs.removeClass('imgclassbig');
                offerbox.addClass('offerboxsmall');
                offerbox.removeClass('offerboxbig');
                
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
                section2.addClass('section2big');
                section2.removeClass('section2small');
                countrylist.addClass('countrylistbig');
                countrylist.removeClass('countrylistsmall');
                picboxout.addClass('picboxoutbig');
                picboxout.removeClass('picboxoutsmall');
                picboxin.addClass('picboxinbig');
                picboxin.removeClass('picboxinsmall');
                imgs.addClass('imgclassbig');
                imgs.removeClass('imgclasssmall');
                offerbox.addClass('offerboxbig');
                offerbox.removeClass('offerboxsmall');
                
                
                
                
                
            }
        }
    }


    match_media_with_listener();

    navbutton.on('click', function(){
        
        navaltlist.toggleClass('hidden');
        navaltlist.toggleClass('shown');
    })

    
    
    
});