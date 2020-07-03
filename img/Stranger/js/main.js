$(document).ready(function () {


    $('#scene01 .title').fadeIn(300);


    $(function () {
        $(".glitch-img").mgGlitch({
            // set 'true' to stop the plugin
            destroy: false,
            // set 'false' to stop glitching
            glitch: true,
            // set 'false' to stop scaling
            scale: true,
            // set 'false' to stop glitch blending
            blend: true,
            // select blend mode type
            blendModeType: 'hue',
            // set min time for glitch 1 elem
            glitch1TimeMin: 200,
            // set max time for glitch 1 elem
            glitch1TimeMax: 400,
            // set min time for glitch 2 elem
            glitch2TimeMin: 10,
            // set max time for glitch 2 elem
            glitch2TimeMax: 100,
        });
    });

    $(function () {
        $(".glitch-img02").mgGlitch({
            // set 'true' to stop the plugin
            destroy: false,
            // set 'false' to stop glitching
            glitch: true,
            // set 'false' to stop scaling
            scale: true,
            // set 'false' to stop glitch blending
            blend: true,
            // select blend mode type
            blendModeType: 'hue',
            // set min time for glitch 1 elem
            glitch1TimeMin: 200,
            // set max time for glitch 1 elem
            glitch1TimeMax: 400,
            // set min time for glitch 2 elem
            glitch2TimeMin: 10,
            // set max time for glitch 2 elem
            glitch2TimeMax: 100,
        });
    });

    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    $('.naviJs > li').mouseenter(function () { // .topmenu 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.png', '_on.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });

    $('.naviJs > li').mouseleave(function () { // .topmenu 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_on.png', '.png'))
    });

    $('.gnb >li:nth-child(1)').on('mouseover', function () {
        $('.gnb >li:nth-child(1)').addClass('on');
    });

    $('.gnb >li:nth-child(2)').on('mouseover', function () {
        $('.gnb >li:nth-child(2)').addClass('on');
    });

    $('.gnb >li:nth-child(3)').on('mouseover', function () {
        $('.gnb >li:nth-child(3)').addClass('on');
    });

    $('.gnb >li:nth-child(4)').on('mouseover', function () {
        $('.gnb >li:nth-child(4)').addClass('on');
    });

    $('.gnb >li:nth-child(5)').on('mouseover', function () {
        $('.gnb >li:nth-child(5)').addClass('on');
    });

    $('.gnb >li:nth-child(1)').on('mouseleave', function () {
        $('.gnb >li:nth-child(1)').removeClass('on');
    });

    $('.gnb >li:nth-child(2)').on('mouseleave', function () {
        $('.gnb >li:nth-child(2)').removeClass('on');
    });

    $('.gnb >li:nth-child(3)').on('mouseleave', function () {
        $('.gnb >li:nth-child(3)').removeClass('on');
    });

    $('.gnb >li:nth-child(4)').on('mouseleave', function () {
        $('.gnb >li:nth-child(4)').removeClass('on');
    });

    $('.gnb >li:nth-child(5)').on('mouseleave', function () {
        $('.gnb >li:nth-child(5)').removeClass('on');
    });

    $(function () {
        $(".naviJs > li > a, .topBtn").click(function () {
            var b = $($(this).attr("href")).position().top;
            var a = $(".gnb").innerHeight();
            $('.gnb').removeClass('visible');
            // $('.menu').toggleClass('active');
            //         // $('.gnb').toggleClass('visible');
            $(".scrollBox").stop().animate({
                scrollTop: b - (a)
            }, 1200, "easeInOutExpo");
            return false

        });

        $('.menu').on('click', function () {
            $('.menu').toggleClass('active');
            $('.gnb').toggleClass('visible');
            $('.gnb > li > a').on('click', function () {
                $('.menu').removeClass('active');
            });
        });

        // $("#scene02 .sc02_video .play").on("click", function () {
        //     $('#scene02 .sc02_video .trailer_tv').trigger('play');
        //     // $('#scene02 .sc02_video .pause').fadeIn();
        //     $('#scene02 .sc02_video .play').fadeOut();
        // });
        //
        // $("#scene02 .sc02_video").on("mouseenter", function () {
        //     $('#scene02 .sc02_video .pause').fadeIn();
        // });
        //
        // $('#scene02 .sc02_video .pause').on('click', function () {
        //     $('#scene02 .sc02_video .trailer_tv').trigger('pause');
        //     $('#scene02 .sc02_video .play').fadeIn();
        //     $('#scene02 .sc02_video .pause').fadeOut();
        // });

        $('#scene02 .sc02_video .pause').on('mouseover', function () {
            $('#scene02 .sc02_video .pause').animate({
                opacity: 1
            }, 100);
        });

        $('#scene02 .sc02_video .pause').on('mouseleave', function () {
            $('#scene02 .sc02_video .pause').animate({
                opacity: 0
            }, 100);
        });

        $('#scene02 .sc02_video .pause').on('click', function () {
            $('#scene02 .sc02_video .trailer_tv').trigger('pause');
            $('#scene02 .sc02_video .play').fadeIn();
        });

        $('#scene02 .sc02_video .play').on('click', function () {
            $('#scene02 .sc02_video .trailer_tv').trigger('play');
            $('#scene02 .sc02_video .play').fadeOut();
            // $('#scene02 .sc02_video .pause').animate({opacity:1},100);
        });


        $('#scene02 .trailer_btn .play').on('click', function () {
            $('#scene02 .trailer_tv').trigger('play');
            $('#scene02 .trailer_btn .pause').fadeIn();
        });

        $('#scene02 .trailer_btn .pause').on('click', function () {
            $('#scene02 .trailer_tv').trigger('pause');
        });

        $("#scene04 .synopsis_bg").slick({
            dots: true, //네비게이션 사용여부
            arrows: true, //화살표 사용여부
            prevArrow: $('.prev'), //이전 화살표
            nextArrow: $('.next'), //다음 화살표
            autoplay: false, //자동넘김
            autoplaySpeed: 2000, //자동넘김 속도
            pauseOnHover: false, //마우스 오버시 자동재생 멈춤
            fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
            speed: 500, // 슬라이드 속도
            infinite: true, // 무한슬라이
            asNavFor: '', //다른 슬라이드 연동 여부
            centerMode: false, //센터모드
            centerPadding: '0%', //센터 모드 시 여백
            slidesToShow: 1, //보여질 슬라이드 갯수
            slidesToScroll: 1, //넘겨질 슬라이드 갯수
            swipe: true, //스와이프
            focusOnSelect: false, //슬라이드 선택시 넘어
            draggable: false,
            vertical: false, //세로 슬라이드
            verticalSwiping: false, //세로 스와이프
            initialSlide: 0, //슬라이드 시작순서
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
            variableWidth: false,
        });

        $('#scene04 .synopsis_bg')
            .on('init', function (event, slick) {

            })
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                starList()
            })

            .on('afterChange', function (event, slick, currentSlide, nextSlide) {
                starList()
            });

        function list01() {
            $('#scene04 .contents > div:nth-child(1)').fadeIn();
            $('#scene04 .contents > div:nth-child(3)').fadeOut();
            $('#scene04 .contents > div:nth-child(2)').fadeOut();
        }

        function list02() {
            $('#scene04 .contents > div:nth-child(2)').fadeIn();
            $('#scene04 .contents > div:nth-child(1)').fadeOut();
            $('#scene04 .contents > div:nth-child(3)').fadeOut();
        }

        function list03() {
            $('#scene04 .contents > div:nth-child(3)').fadeIn();
            $('#scene04 .contents > div:nth-child(2)').fadeOut();
            $('#scene04 .contents > div:nth-child(1)').fadeOut();
        }

        function starList() {

            if ($('#slick-slide00').hasClass('slick-active')) {
                list01();
            }
            if ($('#slick-slide01').hasClass('slick-active')) {
                list02();
            }
            if ($('#slick-slide02').hasClass('slick-active')) {
                list03();
            }

        }

        $(".characters_img").slick({
            dots: true, //네비게이션 사용여부
            arrows: true, //화살표 사용여부
            prevArrow: $('.characters_btn .characters_btn_left'), //이전 화살표
            nextArrow: $('.characters_btn .characters_btn_right'), //다음 화살표
            autoplay: true, //자동넘김
            autoplaySpeed: 2000, //자동넘김 속도
            pauseOnHover: true, //마우스 오버시 자동재생 멈춤
            fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
            speed: 900, // 슬라이드 속도
            infinite: true, // 무한슬라이
            asNavFor: '', //다른 슬라이드 연동 여부
            centerMode: false, //센터모드
            centerPadding: '0%', //센터 모드 시 여백
            slidesToShow: 1, //보여질 슬라이드 갯수
            slidesToScroll: 1, //넘겨질 슬라이드 갯수
            swipe: true, //스와이프
            focusOnSelect: false, //슬라이드 선택시 넘어
            draggable: false,
            vertical: false, //세로 슬라이드
            verticalSwiping: false, //세로 스와이프
            initialSlide: 0, //슬라이드 시작순서
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
            variableWidth: false,
        });

        $('.characters_img')
            .on('init', function (event, slick) {})
            .on('afterChange', function (event, slick, currentSlide, nextSlide) {
                starList2()
            });

        function list001() {
            $('.characters_name > div:nth-child(1)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });

            $('.characters_name > div:nth-child(6)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(2)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(1)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(2)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(6)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }

        function list002() {
            $('.characters_name > div:nth-child(2)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });
            $('.characters_name > div:nth-child(1)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(3)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(2)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(1)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(3)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }

        function list003() {
            $('.characters_name > div:nth-child(3)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });
            $('.characters_name > div:nth-child(2)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(4)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(3)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(2)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(4)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }

        function list004() {
            $('.characters_name > div:nth-child(4)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });
            $('.characters_name > div:nth-child(3)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(5)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(4)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(3)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(5)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }


        function list005() {
            $('.characters_name > div:nth-child(5)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });
            $('.characters_name > div:nth-child(4)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(6)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(5)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(4)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(6)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }

        function list006() {
            $('.characters_name > div:nth-child(6)').fadeIn().delay(0).stop().animate({
                opacity: 1,
                right: 650
            });
            $('.characters_name > div:nth-child(5)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_name > div:nth-child(1)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });

            $('.characters_contents > div:nth-child(6)').fadeIn().delay(500).stop().animate({
                opacity: 1,
                right: 600
            });
            $('.characters_contents > div:nth-child(5)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
            $('.characters_contents > div:nth-child(1)').fadeOut().stop().animate({
                opacity: 0,
                right: 0
            });
        }

        function starList2() {

            if ($('#slick-slide10').hasClass('slick-active')) {
                list001();
            }
            if ($('#slick-slide11').hasClass('slick-active')) {
                list002();
            }
            if ($('#slick-slide12').hasClass('slick-active')) {
                list003();
            }
            if ($('#slick-slide13').hasClass('slick-active')) {
                list004();
            }
            if ($('#slick-slide14').hasClass('slick-active')) {
                list005();
            }
            if ($('#slick-slide15').hasClass('slick-active')) {
                list006();
            }
        }

        $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        // 두번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(2) > div:nth-child(2)').fadeOut();
        });

        // 세번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(3) > div:nth-child(2)').fadeOut();
        });

        // 네번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });

        $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(4) > div:nth-child(2)').fadeOut();
        });

        // 다섯번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(5) > div:nth-child(2)').fadeOut();
        });

        // 여섯번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(6) > div:nth-child(2)').fadeOut();
        });

        // 일곱번째 사진 //
        $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(1)').on('mouseenter', function () {
            $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(1)').on('mouseleave', function () {
            $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(1) > div:nth-child(2)').fadeOut();
        });

        $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(1)').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(2)').fadeIn();
        });
        $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(2) .box').on('click', function () {
            $('#scene06 .gallery_box > div:nth-child(7) > div:nth-child(2)').fadeOut();
        });

    });


    $('#scene06 .bt_event > a > img').on('click', function () {
        $('#scene07').fadeIn();
    });


    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);


        if (a >= 1800) {
            // $("").addClass("on");
            $('#scene02 .trailer .trailer_title').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 3600) {
            // $("").addClass("on");
            $('#scene04 .synopsis_title').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 4980) {
            // $("").addClass("on");
            $('#scene05 .characters_title').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 6100) {
            // $("").addClass("on");
            $('#scene06 .gallery_title').addClass('on');
        } else {
            // $("").removeClass("on");

        }


        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    // $("li", this).removeClass("on").eq(0).addClass("on")
                    // $("li", this).removeClass("on").eq(0).addClass("on2")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        // $("li", this).removeClass("on").eq(c).addClass("on")
                        // $("li", this).removeClass("on").eq(c).addClass("o2")
                    })
                }
            }
        })

        // $('#scene03 .sc03_bg').stop().animate({'margin-top': a * 0.1}, 100);
    })
});