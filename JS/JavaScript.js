$(window).on("scroll", function(){
    if($(this).scrollTop() < 600){
        $(".cover").addClass("scrolledHeader");
    }else{
        $(".cover").removeClass("scrolledHeader");
    }
    if($(this).scrollTop() > 2400){
        $(".frame-1 .explosion").addClass("expand");
        $(".frame-1 .package").addClass("expand");
        $(".frame-1 .berry").addClass("expand");
    }else{
        $(".frame-1 .explosion").removeClass("expand");
        $(".frame-1 .package").removeClass("expand");
        $(".frame-1 .berry").removeClass("expand");
    }
    if($(this).scrollTop() > 2500){
        $(".text").addClass("visible");
    }else{
        $(".text").removeClass("visible");
    }
});
$(window).on("click", function(){
        if($("#tab-1").is(':checked')){
            $("#content-item-1").addClass("visible");
            $("#content-item-2").removeClass("visible");
            $("#content-item-3").removeClass("visible");
            $("#content-item-4").removeClass("visible");
        } else if($("#tab-2").is(':checked')){
            $("#content-item-2").addClass("visible");
            $("#content-item-1").removeClass("visible");
            $("#content-item-3").removeClass("visible");
            $("#content-item-4").removeClass("visible");
        }else if($("#tab-3").is(':checked')){
            $("#content-item-3").addClass("visible");
            $("#content-item-1").removeClass("visible");
            $("#content-item-2").removeClass("visible");
            $("#content-item-4").removeClass("visible");
        }else if($("#tab-4").is(':checked')){
            $("#content-item-4").addClass("visible");
            $("#content-item-1").removeClass("visible");
            $("#content-item-2").removeClass("visible");
            $("#content-item-3").removeClass("visible");
        }
});