
// Code to create a sticky header
$(document).ready(function() {

  //smooth scroll

  $('.menu li a[href^="#"]').on('click', function(e){
        // prevent default
        e.preventDefault();
        // store the user clicks in target variable
        var target=$(this.hash);
        // use this variable to animate
        if(target.length){
          $('html,body').stop().animate({
            scrollTop:target.offset(),top -60
          },1000);
        }
  });

  // end of smooth scolling
// store a variable that references header
var $header=$('header');
var $sticky=$header.before($header.clone().addClass('sticky'));


// scroll event

$(window).on("scroll",function() {
// variable to store scroll from top

var scrollFromTop = $(window).scrollTop();
// to toggle the class of the body
// the class "scroll" was added because now we can set any kind of style when the class
// has scroll
$('body').toggleClass('scroll',(scrollFromTop>350));

});


$('.grid').masonry({

// choose itemSelector

itemSelector: '.grid-items',
columnWidth : 120,
fitWidth: true


}); // end of masonry


//Slider
//Slider
//Slider
$(".slider").slick({

  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots:false,
  centerMode:true,
  slidesToScroll: 3,
  focusOnSelect: true,
  slidesToShow:3,
  infinte:true,
  variableWidth:true,
  variableHeight:true,
  prevArrow : '<button type="button" class="slick-prev">Previous</button>',
  nextArrow:  '<button type="button" class="slick-next">Next</button>',
  responsive:[
    {
      breakpoint:900,
      settings:{
        slidesToShow:2
      }
    },
    {
      breakpoint:700,
      settings:{
        slidesToShow:1
      }
    }
  ]
});



// responsive MENU STARTS

// responsive body starts
var body = $('body');

var menuTrigger=$('.js-menu-trigger');

var mainOverlay=$('.js-main-overlay');

menuTrigger.on('click',function(){
  body.addClass('menu-is-active');
});



}); // end of js
