$(document).ready(function(){
    $(".ui").hover(function(){
        $(".get-1").addClass("hover");
        } , function(){
        $(".get-1").removeClass("hover");
    });

    $(".front").hover(function(){
        $(".get-2").addClass("hover");
        } , function(){
        $(".get-2").removeClass("hover");
    });

    $(".backend").hover(function(){
        $(".get-3").addClass("hover");
        } , function(){
        $(".get-3").removeClass("hover");
    });
});