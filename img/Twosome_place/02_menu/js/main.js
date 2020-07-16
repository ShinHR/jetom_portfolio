$(document).ready(function () {
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
    zindex: 9999,
  });

  $("#scene01 .new_menu .new_menu_img").slick({
    dots: false, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".new_menu .new_prev_arrows"), //이전 화살표
    nextArrow: $(".new_menu .new_next_arrows"), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 4000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    asNavFor: "", //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 3, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: true, //스와이프
    focusOnSelect: true, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    variableWidth: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
  });


  $('#drink > .hover > img:nth-child(1)').mouseenter(function () {
    $('#drink > .hover > img:nth-child(2)').css('cursor', 'pointer');
    $('#drink > .hover > img:nth-child(2)').fadeIn();
  });

  $('#drink > .hover >img:nth-child(2)').mouseleave(function () {
    $('#drink > .hover > img:nth-child(2)').fadeOut();
  });

  $('#drink > .hover > img:nth-child(2)').click(function () {
    $('#drink > .hover > img:nth-child(3)').css('cursor', 'pointer');
    $('#drink > .hover > img:nth-child(3)').fadeIn();
    $('#scene02').stop().animate({
      height: "2791"
    });
    $('#drink2 > div').stop().animate({
      top: "1719"
    });

    $('#drink3 > div').stop().animate({
      top: "2239"
    });
  });

  $('#drink .hover > img:nth-child(3)').click(function () {

    $('#drink > .hover > img:nth-child(3)').fadeOut();
    $('#scene02').stop().animate({
      height: "1817"
    });

    $('#drink2 > div').stop().animate({
      top: "747"
    });

    $('#drink3 > div').stop().animate({
      top: "1267"
    });
  });


});

$(function () {
  $(".naviJs > li > a, .topBtn").click(function () {
    var b = $($(this).attr("href")).position().top;
    var a = $(".gnb").innerHeight();
    $(".scrollBox")
      .stop()
      .animate({
        scrollTop: b - a
      }, 1200, "easeInOutExpo");

    return false;
  });
  $(".scrollBox").scroll(function () {
    var a = $(".scrollBox").scrollTop();
    $(".posNum").text(a);
    // var drop = true
    if (a >= 100 && a <= 500 && drop) { }
    // $("").addClass("on");
    // $('#header').addClass('wheel');

    // } else {
    //     // $("").removeClass("on");
    //     // $('#header').removeClass('wheel');
    //
    // }
    $(".wrap > div").each(function (c) {
      var d = 100;
      var b = $(".wrap > div:first").position().top;
      var e = $(this).position().top;
      if (a <= b - d) {
        $(".naviJs").each(function () {
          $("li", this).removeClass("on").eq(0).addClass("on");
        });
      } else {
        if (a >= e - d) {
          $(".naviJs").each(function () {
            $("li", this).removeClass("on").eq(c).addClass("on");
          });
        }
      }
    });
  });
});