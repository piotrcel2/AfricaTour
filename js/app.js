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
    var section3 = $('.section3');
    var section4 = $('.section4');
    var section5 = $('.section5');
    var quotesection = $('.quotesection');
    var countrylist = $('.countrylist');
    var countryname = $('.countryelement');
    var picboxout = $('.picboxout');
    var picboxin = $('.picboxin');
    var prevbutton = $('#prev');
    var nextbutton = $('#next');
    var offerbox = $('.offerbox');
    var footer = $('footer');
    
    var form = $('form');
    var inputname = $('.nameinput');
    var inputmail = $('.emailinput');
    var inputmessage = $('.msginput');
    var errorbox = $('.error');
    var submitbutton = $('.sendinput');
    
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
                                                    //równie dobrze można to zrobić w htmlu
        var firstelementtoclone = $(this).children().first().clone();
        var lastelementtoclone = $(this).children().last().clone();
        
        $(this).append(firstelementtoclone);
        $(this).prepend(lastelementtoclone);
        
    })
    
    var imgs = $('.imgclass');  //lokalizacja wszystkich obrazków po ich zapętleniu
    pictureblocks = $('.picboxin ul'); // odświeżenie list obrazków
    
    

    
    
    
    
    
    
    
    
    function setwidth (){                       // funkcja określająca szerokość bloków z obrazkami - dla responsywności
        
        var newimg = $('.shown .imgclass');     // dla wywołania szerokości wyświetlonych w danym momencie elementów!!
                                                // dla elementów hidden- byłoby to 0 nawet przy ustalonej szerokości
        
        pictureblocks.css('width', newimg.width()*6);
        imgwidth = newimg.width();              // ustalenie szerokości jednego obrazka- służy obliczaniu przewijania
        setposition();
        
    }
    
    setwidth(); // wykonywane również przy każdym resize, tu jednorazowo przy wyświetleniu strony
    
    
    
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
    
    
    nextbutton.on('click', function(){              //PRZYCISK next!!!!

        
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
           
           if ( $(this).data('index') != countryindex ){    // działa tylko wtedy gdy klikamy na niewybrane państwo
               pictureindex = Math.floor((Math.random() * 4) + 1);
               countryindex = $(this).data('index');
               
               setnewcountry();
               
           }
                  
       });
         
    });
    
    
    
    
    function setnewcountry(){ // nadanie nowego państwa do wyświetlenia
        
        
        section2.children().removeClass('shown');
        section2.children().addClass('hidden');
        $(section2.children()[countryindex]).removeClass('hidden');
        $(section2.children()[countryindex]).addClass('shown');         //działania na opisach
        
        $(section2.children().last()).removeClass('hidden');            //zapobiega znikaniu offerboxa(jest na tej samej liście)
        
        
        pictureblocks.removeClass('shown');
        pictureblocks.addClass('hidden');
        $(pictureblocks[countryindex]).removeClass('hidden');
        $(pictureblocks[countryindex]).addClass('shown');               //działania na blokach zdjęć
        
        countryname.css('color', '#967c61');
        $(countryname[countryindex]).css('color', 'white');             //podświetlenie wybranego państwa
        
        setposition();                                                  //błyskawiczne odświeżenie pozycji
        
    }
    
    

    
    
    function match_media_with_listener() {              //funkcja odpowiadająca za responsywność

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
                section3.addClass('section3small');
                section3.removeClass('section3big');
                section4.addClass('section4small');
                section4.removeClass('section4big');
                section5.addClass('section5small');
                section5.removeClass('section5big');
                quotesection.addClass('quotesectionsmall');
                quotesection.removeClass('quotesectionbig');
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
                footer.addClass('footersmall');
                footer.removeClass('footerbig');
                
                
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
                section3.addClass('section3big');
                section3.removeClass('section3small');
                section4.addClass('section4big');
                section4.removeClass('section4small');
                section5.addClass('section5big');
                section5.removeClass('section5small');
                quotesection.addClass('quotesectionbig');
                quotesection.removeClass('quotesectionsmall');
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
                footer.addClass('footerbig');
                footer.removeClass('footersmall');
                
                
                
                
                
            }
        }
    }


    match_media_with_listener();

    
    
    navbutton.on('click', function(){           //odpowiada za wyśw./chow. submenu dla małego ekranu
        
        navaltlist.toggleClass('hidden');
        navaltlist.toggleClass('shown');
    })

    
    form.on("submit", function(e) {
        
        var insertname = inputname.val();
        var insertmail = inputmail.val();
        var insertmessage = inputmessage.val();
        
        var checkmailbug1 = insertmail.search('@');
        var checkmailbug2 = insertmail.search('.');
        
        if (insertname.length < 3){
            
            e.preventDefault();
            
            var errorname = 'Imię musi zawierać minimum 3 znaki';
            
            errorbox.empty();
            errorbox.append(errorname);
            
        } else if ( checkmailbug2 == -1 || checkmailbug1 == -1) {
            
            e.preventDefault();
            
            var errorname = 'Podany e-mail jest nieprawidłowy';
            
            errorbox.empty();
            errorbox.append(errorname); 
            
        } else if ( insertmessage.length < 10){
            
            e.preventDefault();
            
            var errorname = 'Wiadomość musi mieć minimum 10 znaków';
            
            errorbox.empty();
            errorbox.append(errorname); 
            
        } else {
            
            errorbox.empty();
            //tu powinno przejsc dalej
            
        }
    });
    
    
    
    
});