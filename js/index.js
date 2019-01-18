// Delay code from executing until all DOM assets have been loaded
$(document).ready(function(){

// Prevent a page reload when a click occurs on the read more link
$(".readmore").click(function(event){
    event.preventDefault();
});

// When a click occurs on Read more link, show the rest of the paragraph on the page
    function readMore(){
        $("#show-this-on-click").slideDown();
        $(".readmore").hide();
    }
    
    $(".readmore").click(readMore);


// When a click occurs on a bullet on the main image, move to the next image in the slider
    var currIndex;

    $('.slider-img:first').fadeIn();
    
    $('.bullets').click(function() {
      $('.bullets').removeClass('selected');
    
      $(this).addClass('selected');
      currIndex = $(this).index()+1;
      $('.slider-img').fadeOut(0);
      $('.slider-img:nth-child('+currIndex+')').fadeIn();
    
    });

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

    });