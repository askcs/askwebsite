function animateSlide (slide){
    switch (slide) {
        case 0:
            $(".animate01-01").addClass('animated bounce');
            setTimeout(function(){$(".animate01-02").addClass('animated bounce');}, 500);
            setTimeout(function(){$(".animate01-03").addClass('animated tada');}, 1200);
            setTimeout(function(){$(".scenarioText1").addClass('animated pulse');}, 2500);
            setTimeout(function(){$(".next").addClass('animated wobble');}, 4000);

            setTimeout(function(){ cleanStyles(0); }, 3500);
            break;
        case 1:
            $('.animate02-01').addClass('animated swing');
            setTimeout(function(){$(".animate02-02").addClass('animated shake');}, 250);
            setTimeout(function(){$(".animate02-03").addClass('animated shake');}, 500);
            setTimeout(function(){$(".scenarioText2").addClass('animated pulse');}, 1500);

            setTimeout(function(){ cleanStyles(1); }, 2500);
            break;
        case 2:
            $('.animate03-01').addClass('animated flip');
            setTimeout(function(){$(".scenarioText3").addClass('animated pulse');}, 1000);
            setTimeout(function(){$(".animate03-02").addClass('animated pulse');}, 2000);
            setTimeout(function(){$(".animate03-03").addClass('animated pulse');}, 2250);
            setTimeout(function(){$(".animate03-04").addClass('animated pulse');}, 2500);
            setTimeout(function(){$(".animate03-05").addClass('animated pulse');}, 2750);
            setTimeout(function(){$(".animate03-06").addClass('animated pulse');}, 3000);

            setTimeout(function(){ cleanStyles(2); }, 4000);
            break;
        case 3:
            $(".animate04-01").addClass('animated bounce');
            setTimeout(function(){$(".animate04-02").addClass('animated bounce');}, 500);
            setTimeout(function(){$(".animate04-03").addClass('animated bounce');}, 1200);
            setTimeout(function(){$(".animate04-04").removeClass('hide').addClass('animated rotateIn');}, 1900);
            setTimeout(function(){$(".scenarioText4").addClass('animated pulse');}, 2500);

            setTimeout(function(){ cleanStyles(3); }, 3500);
            break;
    }
}

function cleanStyles (slide)
{
    switch (slide) {
        case 0:
            // clean slide 0 styles
            $(".animate01-01").removeClass('animated bounce');
            $(".animate01-02").removeClass('animated bounce');
            $(".animate01-03").removeClass('animated tada');
            $(".scenarioText1").removeClass('animated pulse');
            break;
        case 1:
            // clean slide 1 styles
            $('.animate02-01').removeClass('animated swing');
            $(".animate02-02").removeClass('animated shake');
            $(".animate02-03").removeClass('animated shake');
            $(".scenarioText2").removeClass('animated pulse');
            break;
        case 2:
            // clean slide 2 styles
            $('.animate03-01').removeClass('animated flip');
            $(".scenarioText3").removeClass('animated pulse');
            $(".animate03-02").removeClass('animated pulse');
            $(".animate03-03").removeClass('animated pulse');
            $(".animate03-04").removeClass('animated pulse');
            $(".animate03-05").removeClass('animated pulse');
            $(".animate03-06").removeClass('animated pulse');
            break;
        case 3:
            // clean slide 3 styles
            $(".animate04-01").removeClass('animated bounce');
            $(".animate04-02").removeClass('animated bounce');
            $(".animate04-03").removeClass('animated bounce');
            $(".animate04-04").removeClass('animated rotateIn')/*.addClass('hide')*/;
            $(".scenarioText4").removeClass('animated pulse');
            break;
    }
}






setTimeout(function () { animateSlide(0); }, 500);

$(document).ready(function() {
    if ( $(window).width() >= 768 ) { $( '.mobileView' ).empty().detach(); }

    var pepe = $.fn.fullpage({
        "verticalCentered" : true,
        'resize' : true,
        'scrollingSpeed': 700,
        'easing': 'easeInQuart',
        'navigation': true,
        'navigationPosition': 'left',
        'navigationColor': '#000',
        'navigationTooltips': [],
        'slidesNavigation': false,
        'slidesNavPosition': 'bottom',
        'controlArrowColor': '#fff',
        'loopBottom': false,
        'loopTop': false,
        'loopHorizontal': false,
        'autoScrolling': true,
        'scrollOverflow': false,
        'css3': true,
        'paddingTop': 0,
        'paddingBottom': 0,
        'fixedElements': '#menu, #footer, #cookieMessage',
        'normalScrollElements': null,
        'keyboardScrolling': true,
        'touchSensitivity': 20,
        'continuousVertical': false,
        'animateAnchor': true,
        slidesColor: ['#facb6a', '#a5eaf5', '#000', '#000'],
        anchors: ['home', 'platform', 'products', 'cases'],
        menu: '#menu',

        afterLoad: function(anchorLink, index){

            function resetMenucolors() {
                $('#menu li a').removeClass('active');
            }

            if(anchorLink == 'products'){
                resetMenucolors();
                $('#menuProducts').addClass('active');
            } else {
                resetMenucolors();
            }
            ga('send', 'event', 'navigate', anchorLink, index);

        },

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex)
        {
            if (index == 1)
            {
                switch (slideIndex)
                {
                    case 0: animateSlide(0); break;
                    case 1: animateSlide(1); break;
                    case 2: animateSlide(2); break;
                    case 3: animateSlide(3); break;
                }
            }

            console.log('index ->', index);
        }
    });

});