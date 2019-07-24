$(document).ready(function () {
            // $("#image1").hover 
            $("#design").click(function () {
                $("#designicon").toggle();
                $("#designdescription").toggle();
            });

            $("#dev").click(function () {
                $("#devicon").toggle();
                $("#devdescription").toggle();
            })
            $("#product").click(function () {
                $("#producticon").toggle();
                $("#productdescription").toggle();
            })
            $("#work5").hover(function () {
                $(".caption5").fadeIn(250);
            }, function () {
                $(".caption5").fadeOut(250);
            });
            $("#work4").hover(function () {
                $(".caption4").fadeIn(250);
            }, function () {
                $(".caption4").fadeOut(250);
            });
            $("#work3").hover(function () {
                $(".caption3").fadeIn(250);
            }, function () {
                $(".caption3").fadeOut(250);
            });
            $("#work2").hover(function () {
                $(".caption2").fadeIn(250);
            }, function () {
                $(".caption2").fadeOut(250);
            });
            $("#work1").hover(function () {
                $(".caption1").fadeIn(250);
            }, function () {
                $(".caption1").fadeOut(250);
            });

            });