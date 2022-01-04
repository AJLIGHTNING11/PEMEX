if ($(window).width() < 1025) {   

    $(".submenu").click(function(){
        $(this).children("ul").slideToggle();
    })

    $("ul").click(function(p){
        p.stopPropagation();
    })
}