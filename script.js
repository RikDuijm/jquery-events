$(document).ready(function() {

$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
});
   
/*
$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});




    $("#button1").click(function() {
        $("#button1").hide(4000);
});

   $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");  
});



   $("#button1").mouseenter (function() {
        $("#button1").fadeTo(4000, 0.5);
});
    $("#button1").mouseleave (function() {
        $("#button1").fadeTo(4000, 1);
});    





   
   $("p").on("click", function() {
       $("p").addClass("color");
}); 
    
    $("h2").hover (function() {
        $("h2").addClass("hover");
    }, function() {
        $("h2").removeClass("hover");
    });

   $("#h2-html").hover (function() {
        $("#h2-html").addClass("h2_font_size");
   }, function() {
        $("#h2-html").removeClass("h2_font_size");
    });
    
   $("#h2-mysql").hover (function() {
        $("#h2-mysql").addClass("h2_font_size");
   }, function() {
        $("#h2-mysql").removeClass("h2_font_size");
    });
    
   $("#h2-python").hover (function() {
        $("#h2-python").addClass("h2_font_size");
   }, function() {
        $("#h2-python").removeClass("h2_font_size");
    });
    
   $("#h2-jquery").hover (function() {
        $("#h2-jquery").addClass("h2_font_size");
   }, function() {  
        $("#h2-jquery").removeClass("h2_font_size");
    });
    
   $("#h2-django").hover (function() {
        $("#h2-django").addClass("h2_font_size");
   }, function() {  
        $("#h2-django").removeClass("h2_font_size");
    });
    
   $("#h2-css").hover (function() {
        $("#h2-css").addClass("h2_font_size");
   }, function() {
        $("#h2-css").removeClass("h2_font_size");
    });


 $(".bottom_button").hover (function() {
       $("body").css("background-color", "black");
   }, function() {
        $("body").css("background-color", "white");
    });       
    

*/



