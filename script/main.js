$(function(){



    //slide

    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots:true,
        customPaging: function(slider, i) { 
            console.log($(slider.$slides[i]).html());
            return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
        },
      });


    var n=0;
    $(".roll a").click(function(e){
    e.preventDefault();
    n=$(this).parent("li").index();
    $(".roll li").removeClass("on");
    $(".roll li").eq(n).addClass("on");
    
        
    });



    // freshservice


    $(window).on('load resize',function(){
        var ws=window.outerWidth;

        if(ws<768){
            $(".multiple-items").slick("unslick");
        }else{
            $(".multiple-items").not(".slick-initialized").slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: false,
                autoplaySpeed: 2000,
                opacity:0,
                dots:true,
                responsive: [ 
                {
                breakpoint: 1300,
                settings: { slidesToShow: 3, slidesToScroll: 3,
                infinite: true, dots: true 
                }
            }]})
        }

    });

    // mobilebtn

    $(".mobilebtn").click(function(e){
        e.preventDefault();
        $(".mobilenav").show();
        $(".innerbtn").removeClass("on")
        $(".inner").animate({marginRight:0})
    })
    $(".innerbtn").click(function(e){
        e.preventDefault();
        $(".inner").animate({marginRight:"-66.667%"})
        $(".innerbtn").addClass("on")
        $(".mobilenav").hide();
    })

    
    // menubar

    $("#eventContent"). hide();
    var sw=false; 
    $("#mainevent").click(function(e){
        e.preventDefault();
        if (sw==false){
        $ ("#eventContent").fadeIn();
        $ (".mevent .arrow").css({"transform":"rotateZ(90deg)"});
        sw=true;
        }else{
        $("#eventContent").fadeOut();
        $ (".mevent .arrow").css({"transform":"rotateZ(-90deg)"});
        sw=false;
        };
    })

    

    // sub2 독자브랜드
    AOS.init();




    // event
    $(window).scroll(function(){
        var ebox = $(".pcRoll").offset().top;
        var lo=$(window).scrollTop();
        if(ebox <= lo){
            $("#event .imgBox1").addClass("active");
            $(".textBox1").addClass("active");
        }else if(ebox >= lo){
            $("#event .imgBox1").removeClass("active");
            $(".textBox1").removeClass("active");
        }


        var ebox2 = $("#event .imgBox1").offset().top;
        var lo2=$(window).scrollTop();
        if(ebox2 <= lo2){
            $("#event .imgBox2").addClass("active");
            $(".textBox2").addClass("active");
        }
        else if(ebox >= lo){
            $("#event .imgBox2").removeClass("active");
            $(".textBox2").removeClass("active");
        }

    });









   
    // sns
    $(".CU").hover(function(){
        $(".CU .detail").stop().animate({marginTop:-280},200);
    },function(){
        $(".CU .detail").stop().animate({marginTop:0},200);
    });
    

    $(".blog").hover(function(){
        $(".blog .detail").stop().animate({marginTop:-440},200);
    },function(){
        $(".blog .detail").stop().animate({marginTop:0},200);
    });


    $(".facebook").hover(function(){
        $(".facebook .detail").stop().animate({marginTop:-392},200);
    },function(){
        $(".facebook .detail").stop().animate({marginTop:0},200);
    });

    $(".youtube").hover(function(){
        $(".youtube .detail").stop().animate({marginTop:-270},200);
    },function(){
        $(".youtube .detail").stop().animate({marginTop:0},200);
    });




    // company

    $(".csub1").hover(function(){
        
        $(".csub1 .sub").fadeIn(100);
    },function(){
        $(".csub1 .sub").fadeOut(100);
    });

    $(".csub2").hover(function(){
        $(".csub2 .sub").fadeIn(100);
    },function(){
        $(".csub2 .sub").fadeOut(100);
    });

    $(".csub3").hover(function(){
        $(".csub3 .sub").fadeIn(100);
    },function(){
        $(".csub3 .sub").fadeOut(100);
    });

    $(".csub4").hover(function(){ 
        $(".csub4 .sub").fadeIn(100);
    },function(){
        $(".csub4 .sub").fadeOut(100);
    });



    // sub

    // info
    $('#info').hide();	
    $("#info").fadeIn(2000);


    // koreacu
    // $(".korea").hide();
    // $(window).scroll(function(){
    //     var here = $(".infoinner p").offset().top;
    //     var h=$(window).scrollTop();
    //     if(here <= h){
    //     $(".korea").fadeIn();
    //     } 
    // });


    // var isVisible = false;

    // $(window).on("scroll",function() {
    //     if (checkVisible($(".kcircle .c1, .kcircle .c2, .kcircle .c3"))&&!isVisible) {
    //         $(".kcircle .c1, .kcircle .c2, .kcircle .c3").addClass("active");
    //         isVisible=true;
    //     }
    // });

    // function checkVisible( elm, eval ) {
    //     eval = eval || "object visible";
    //     var viewportHeight = $(window).height(),
    //         scrolltop = $(window).scrollTop(),
    //         y = $(elm).offset().top,
    //         elementHeight = $(elm).height();   
        
    //     if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    //     if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    // }


    // // differ
    // $(".differ").fadeOut();
    // $(window).scroll(function(){
    //     var here = $(".kcircle").offset().top;
    //     var h=$(window).scrollTop();
    //     if(here <= h){
    //     $(".differ").fadeIn();
    //     } 
    // });


    // $(window).scroll(function(){
    //     var here = $(".storyinner").offset().top;
    //     var h=$(window).scrollTop();
    //     if(here <= h){
    //     $(".bdifferCircle .bc1, .bdifferCircle .bc2,.bdifferCircle .bc3, .bdifferCircle .bc4").addClass("active");
    //     } 
    // });




    // // DLP
    // $(".dlptitle").hide();
    // $(window).scroll(function(){
    //     var here = $(".bdifferCircle .bc4").offset().top;
    //     var h=$(window).scrollTop();
    //     if(here <= h){
    //     $(".dlptitle").fadeIn();
    //     } 
    // });



    $(window).resize(function(){
        var w=window.outerWidth;
        if(w>768){
            $(".pform1 .ftext p, .pform2 .ftext p, .pform3 .ftext p").show();
        }else{
            $(".pform1 .ftext p, .pform2 .ftext p, .pform3 .ftext p").hide();
        }
    })


    $(".pform1").hover(function(){
        var wid=window.outerWidth;
        if(wid<768){
            $(".ftext .fc1").fadeOut(100);
            $(".pform1 .ftext p").fadeIn(100);
            $(".pform1 .ftext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<768){
                $(".ftext .fc1").fadeIn(100);
                $(".pform1 .ftext p").fadeOut(100);
                $(".pform1 .ftext b").css({"color":"#000"});
            }
        }
    );

    $(".pform2").hover(function(){
        var wid=window.outerWidth;
        if(wid<768){
            $(".ftext .fc2").fadeOut(100);
            $(".pform2 .ftext p").fadeIn(100);
            $(".pform2 .ftext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<768){
                $(".ftext .fc2").fadeIn(100);
                $(".pform2 .ftext p").fadeOut(100);
                $(".pform2 .ftext b").css({"color":"#000"});
            }
        }
    );

    $(".pform3").hover(function(){
        var wid=window.outerWidth;
        if(wid<768){
            $(".ftext .fc3").fadeOut(100);
            $(".pform3 .ftext p").fadeIn(100);
            $(".pform3 .ftext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<768){
                $(".ftext .fc3").fadeIn(100);
                $(".pform3 .ftext p").fadeOut(100);
                $(".pform3 .ftext b").css({"color":"#000"});
            }
        }
    );






    // sub2 

    // banner
    $(".banText p").hide();	
    $(".banText p").delay(800);
    $(".banText p").fadeIn(1500);
    
    
    // 특징
    $(".fBox1").hover(function(){
        
        $(".fboxdetail1").fadeIn(100);
    },function(){
        $(".fboxdetail1").fadeOut(100);
    });

    $(".fBox2").hover(function(){
        
        $(".fboxdetail2").fadeIn(100);
    },function(){
        $(".fboxdetail2").fadeOut(100);
    });

    $(".fBox3").hover(function(){
        
        $(".fboxdetail3").fadeIn(100);
    },function(){
        $(".fboxdetail3").fadeOut(100);
    });

    $(".fBox4").hover(function(){
        
        $(".fboxdetail4").fadeIn(100);
    },function(){
        $(".fboxdetail4").fadeOut(100);
    });


    // question
    
    $(window).resize(function(){
        var wid=window.outerWidth;
        if(wid>1024){
            $(".ques1 .qtext p, .ques2 .qtext p,.ques3 .qtext p").show();
        }else{
            $(".ques1 .qtext p, .ques2 .qtext p,.ques3 .qtext p").hide();
        }
    })

    $(".ques1").hover(function(){
        var wid=window.outerWidth;
        if(wid<1024){
            $(".ques1 .qc1").hide();
            $(".ques1 .qtext p").show();
            $(".ques1 .qtext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<1024){
                $(".ques1 .qc1").show();
                $(".ques1 .qtext p").hide();
                $(".ques1  .qtext b").css({"color":"#000"});
            }
        }
    );


    $(".ques2").hover(function(){
        var wid=window.outerWidth;
        if(wid<1024){
            $(".ques2 .qc2").hide();
            $(".ques2 .qtext p").show();
            $(".ques2 .qtext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<1024){
                $(".ques2 .qc2").show();
                $(".ques2 .qtext p").hide();
                $(".ques2 .qtext b").css({"color":"#000"});
            }
        }
    );
    
    $(".ques3").hover(function(){
        var wid=window.outerWidth;
        if(wid<1024){
            $(".ques3 .qc3").hide();
            $(".ques3 .qtext p").show();
            $(".ques3 .qtext b").css({"color":"#6a318a"});
        }
        
        },function(){
            var wid=window.outerWidth;
            if(wid<1024){
                $(".ques3 .qc3").show();
                $(".ques3 .qtext p").hide();
                $(".ques3  .qtext b").css({"color":"#000"});
            }
        }
    );




    // 성공기

    
    $(".suctext1").hover(function(){
        var win_w = $(window).width()
        if(win_w >= 1300){
            $(".suctext1").stop().animate({marginTop:0},200);
            $(".suctext1").css({"background-color":"rgba(255, 255, 255, 0.8)"});
            $(".suctext1 p:nth-child(1),.suctext1 p:nth-child(2)").addClass("active");
            $(".sucpc1").show();
        }
    },function(){
        var win_w = $(window).width()
        if(win_w >= 1300){
            $(".suctext1").stop().animate({marginTop: 300},100);
            $(".suctext1").css({"background-color":"rgba(255, 255, 255, 0.6)"});
            $(".suctext1 p:nth-child(1),.suctext1 p:nth-child(2)").removeClass("active");
            $(".sucpc1").hide();
        }
    });
    
    $(".suctext2").hover(function(){
        var win_w = $(window).width()
        if(win_w >= 1300){
            $(".suctext2").stop().animate({marginTop:0},200);
            $(".suctext2").css({"background-color":"rgba(255, 255, 255, 0.8)"});
            $(".suctext2 p:nth-child(1),.suctext2 p:nth-child(2)").addClass("active");
            $(".sucpc2").show();
        }
    },function(){
        var win_w = $(window).width()
        if(win_w >= 1300){
            $(".suctext2").stop().animate({marginTop: 300},100);
            $(".suctext2").css({"background-color":"rgba(255, 255, 255, 0.6)"});
            $(".suctext2 p:nth-child(1),.suctext2 p:nth-child(2)").removeClass("active");
            $(".sucpc2").hide();
        }
    });
       
    $(window).resize(function(){
        var win = $(window).width()
        if(win <= 1300){
            $(".suctext1").css({"margin-top":"0"});
            $(".suctext2").css({"margin-top":"0"});
        }else{
            $(".suctext1").stop().animate({marginTop: 300},100);
            $(".suctext2").stop().animate({marginTop: 300},100);
        }

        var wd = $(window).width()
        if(wd >= 1024){
            // $(".innerbtn").click();
            $(".inner").stop().animate({marginRight:"-66.667%"},50)
            $(".innerbtn").addClass("on")
            $(".mobilenav").hide();
        }
    })







   




});