$(document).ready(function(){
    // $("#image1").hover 
    $("#design").click(function(){
        $("#designicon").toggle();$("#dev").click(function(){
            $("#devicon").toggle();
            $("devdescription").toggle();
        })
        $("#designdescription").toggle();
    });
    $("#dev").click(function(){
        $("#devicon").toggle();
        $("#devdescription").toggle();
    })
    $("#product").click(function(){
        $("#producticon").toggle();
        $("#productdescription").toggle();
    })
    $("#work5").hover(function(){
        $(".caption").fadeIn(250);
    }, function(){
        $(".caption").fadeOut(250);
    }
    )
});

  