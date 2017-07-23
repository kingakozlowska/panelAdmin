/**
 * Created by mac on 22/07/2017.
 * ustawienia strony
 */

$('.usersContent').hide();
$('.statisticContent').hide();


// hamburger

$('#hamburger').click(function () {
    var statusHamburger = $('#hamburgerMenu').css( "display" );
    if( statusHamburger == "none") {
        var styles = {
            display: "block",
            height: "100%"
        };
        $('#hamburgerMenu').css(styles);
    }else{
        $('#hamburgerMenu').css( "display", "none" );
    }
});


$('#hamburgerMenu > ul > li:nth-child(1), header > nav > a:nth-child(1) > i, .colFirst > ul > li:nth-child(1), #logoInColFirst > a, #logo > a  ').click(function () {
    $('.statisticContent, .usersContent').hide();
    $('.startContent').show();
    // zmykamy zkaladke
    $('#hamburgerMenu').css( "display", "none" );

    //$('.colFirst> ul > li:nth-child(1) > a').css("border-bottom","2px solid #ffbd4a");
    //$('.colFirst > ul > li:nth-child(2) > a,.colFirst > ul > li:nth-child(3) > a ').css("border-bottom","none");


});

$('#hamburgerMenu > ul > li:nth-child(2) , .colFirst > ul > li:nth-child(2), .startContent > div:nth-child(2) > div:nth-child(2)').click(function () {
    $('.startContent, .usersContent').hide();
    $('.statisticContent').show();
    // zmykamy zkaladke
    $('#hamburgerMenu').css( "display", "none" );
    //$('.colFirst > ul > li:nth-child(2) > a').css("border-bottom","2px solid #ffbd4a");
    //$('.colFirst > ul > li:nth-child(1) > a,.colFirst > ul > li:nth-child(3) > a ').css("border-bottom","none");
});

$('#hamburgerMenu > ul > li:nth-child(3), .colFirst> ul > li:nth-child(3), .startContent > div:nth-child(2) > div:nth-child(1)').click(function () {
    $('.startContent, .statisticContent').hide();
    $('.usersContent').show();
    // zmykamy zkaladke
    $('#hamburgerMenu').css( "display", "none" );
    //$('.colFirst> ul > li:nth-child(3) > a').css("border-bottom","2px solid #ffbd4a");
   //$('.colFirst > ul > li:nth-child(1) > a, .colFirst > ul > li:nth-child(2) > a ').css("border-bottom","none");

});


//

