$(function(){
    $(".pic1").hide();
    $(".space2").on("mouseover", function() {
        $(".pic1").show();    
    })
    $(".space2").on("mouseout", function() {
        $(".pic1").hide();
    })
})