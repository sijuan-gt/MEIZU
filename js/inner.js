$(function() {
    $(".menu1").hide();
    $("menu5").hide();
    $(".nav1").on("mouseover", function() {
        $(".menu1").slideDown(500);
    })
    $(".menu1").on("mouseover", function() {
        $(".menu1").show();    
    })
    $(".nav1").on("mouseout", function() {
        $(".menu1").hide();
    })
     $(".nav2").on("mouseover", function() {
         $(".menu5").slideDown(500);    
    })
    $(".menu5").on("mouseover", function() {
        $(".menu5").show();    
    })
    $(".nav2").on("mouseout", function() {
        $(".menu5").hide();
    })
})    
