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

  $("#scene01 .main_banner").slick({
    dots: true, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".prev"), //이전 화살표
    nextArrow: $(".next"), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 8000, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 700, // 슬라이드 속도
    infinite: true, // 무한슬라이
    asNavFor: "", //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 1, //보여질 슬라이드 갯수
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

  $("#scene01 .best_menu .best_menu_img").slick({
    dots: true, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".best_menu .prev_arrows"), //이전 화살표
    nextArrow: $(".best_menu .next_arrows"), //다음 화살표
    autoplay: false, //자동넘김
    autoplaySpeed: 0, //자동넘김 속도
    pauseOnHover: false, //마우스 오버시 자동재생 멈춤
    fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    asNavFor: "", //다른 슬라이드 연동 여부
    centerMode: false, //센터모드
    centerPadding: "0%", //센터 모드 시 여백
    slidesToShow: 5, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    swipe: false, //스와이프
    focusOnSelect: true, //슬라이드 선택시 넘어
    draggable: true,
    vertical: false, //세로 슬라이드
    verticalSwiping: false, //세로 스와이프
    initialSlide: 0, //슬라이드 시작순서
    variableWidth: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
  });


  var a = 0;
  $('#scene01 .best_menu .best_menu_img')
    .on('init', function (event, slick) {

    })

    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      starList2()
    })

  function list001() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "60"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();

  }


  function list002() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "120"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();

  }


  function list003() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "180"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
  }


  function list004() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "240"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
  }


  function list005() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "300"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
  }


  function list006() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "360"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
  }

  function list007() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "420"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
  }


  function list008() {
    $('#scene01>.best_menu_line>img:nth-child(2)').stop().animate({
      width: "483"
    }, 400)
    $('#scene01 .best_menu .best_menu_img > img:nth-child(1)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(2)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(3)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(4)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(5)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(6)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(7)').stop();
    $('#scene01 .best_menu .best_menu_img > img:nth-child(8)').stop();
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
    if ($('#slick-slide16').hasClass('slick-active')) {
      list007();
    }
    if ($('#slick-slide17').hasClass('slick-active')) {
      list008();
    }
  }

  $('#scene04 > .tag > img:nth-child(1)').click(function () {
    $(this).attr('src', $(this).attr('src').replace('title.png', 'title_on.png'))
    $('#scene04 > div.check > div > img:nth-child(1)').attr('src', $('#scene04 > div.check > div > img:nth-child(1)').attr('src').replace('check_circle.png', 'check.png'))
    $('#scene04 > div.product > div:nth-child(1) > img').attr('src', $('#scene04 > div.product > div:nth-child(1) > img').attr('src').replace('product.png', 'product_on.png'))

    $('#scene04 > div.tag > img:nth-child(2)').attr('src', $('#scene04 > div.tag > img:nth-child(2)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(2)').attr('src', $('#scene04 > div.check > div > img:nth-child(2)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(2) > img').attr('src', $('#scene04 > div.product > div:nth-child(2) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(3)').attr('src', $('#scene04 > div.tag > img:nth-child(3)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(3)').attr('src', $('#scene04 > div.check > div > img:nth-child(3)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(3) > img').attr('src', $('#scene04 > div.product > div:nth-child(3) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(4)').attr('src', $('#scene04 > div.tag > img:nth-child(4)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(4)').attr('src', $('#scene04 > div.check > div > img:nth-child(4)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(4) > img').attr('src', $('#scene04 > div.product > div:nth-child(4) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > .more').css({
      "left": "447px"
    })

  });


  $('#scene04 > .tag > img:nth-child(2)').click(function () {
    $(this).attr('src', $(this).attr('src').replace('title.png', 'title_on.png'))
    $('#scene04 > div.check > div > img:nth-child(2)').attr('src', $('#scene04 > div.check > div > img:nth-child(2)').attr('src').replace('check_circle.png', 'check.png'))
    $('#scene04 > div.product > div:nth-child(2) > img').attr('src', $('#scene04 > div.product > div:nth-child(2) > img').attr('src').replace('product.png', 'product_on.png'))

    $('#scene04 > div.tag > img:nth-child(1)').attr('src', $('#scene04 > div.tag > img:nth-child(1)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(1)').attr('src', $('#scene04 > div.check > div > img:nth-child(1)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(1) > img').attr('src', $('#scene04 > div.product > div:nth-child(1) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(3)').attr('src', $('#scene04 > div.tag > img:nth-child(3)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(3)').attr('src', $('#scene04 > div.check > div > img:nth-child(3)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(3) > img').attr('src', $('#scene04 > div.product > div:nth-child(3) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(4)').attr('src', $('#scene04 > div.tag > img:nth-child(4)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(4)').attr('src', $('#scene04 > div.check > div > img:nth-child(4)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(4) > img').attr('src', $('#scene04 > div.product > div:nth-child(4) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > .more').css({
      "left": "767px"
    })

  });


  $('#scene04 > .tag > img:nth-child(3)').click(function () {
    $(this).attr('src', $(this).attr('src').replace('title.png', 'title_on.png'))
    $('#scene04 > div.check > div > img:nth-child(3)').attr('src', $('#scene04 > div.check > div > img:nth-child(3)').attr('src').replace('check_circle.png', 'check.png'))
    $('#scene04 > div.product > div:nth-child(3) > img').attr('src', $('#scene04 > div.product > div:nth-child(3) > img').attr('src').replace('product.png', 'product_on.png'))

    $('#scene04 > div.tag > img:nth-child(1)').attr('src', $('#scene04 > div.tag > img:nth-child(1)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(1)').attr('src', $('#scene04 > div.check > div > img:nth-child(1)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(1) > img').attr('src', $('#scene04 > div.product > div:nth-child(1) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(2)').attr('src', $('#scene04 > div.tag > img:nth-child(2)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(2)').attr('src', $('#scene04 > div.check > div > img:nth-child(2)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(2) > img').attr('src', $('#scene04 > div.product > div:nth-child(2) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(4)').attr('src', $('#scene04 > div.tag > img:nth-child(4)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(4)').attr('src', $('#scene04 > div.check > div > img:nth-child(4)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(4) > img').attr('src', $('#scene04 > div.product > div:nth-child(4) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > .more').css({
      "left": "1084px"
    })

  });

  $('#scene04 > .tag > img:nth-child(4)').click(function () {
    $(this).attr('src', $(this).attr('src').replace('title.png', 'title_on.png'))
    $('#scene04 > div.check > div > img:nth-child(4)').attr('src', $('#scene04 > div.check > div > img:nth-child(4)').attr('src').replace('check_circle.png', 'check.png'))
    $('#scene04 > div.product > div:nth-child(4) > img').attr('src', $('#scene04 > div.product > div:nth-child(4) > img').attr('src').replace('product.png', 'product_on.png'))

    $('#scene04 > div.tag > img:nth-child(1)').attr('src', $('#scene04 > div.tag > img:nth-child(1)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(1)').attr('src', $('#scene04 > div.check > div > img:nth-child(1)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(1) > img').attr('src', $('#scene04 > div.product > div:nth-child(1) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(2)').attr('src', $('#scene04 > div.tag > img:nth-child(2)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(2)').attr('src', $('#scene04 > div.check > div > img:nth-child(2)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(2) > img').attr('src', $('#scene04 > div.product > div:nth-child(2) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > div.tag > img:nth-child(3)').attr('src', $('#scene04 > div.tag > img:nth-child(3)').attr('src').replace('title_on.png', 'title.png'))
    $('#scene04 > div.check > div > img:nth-child(3)').attr('src', $('#scene04 > div.check > div > img:nth-child(3)').attr('src').replace('check.png', 'check_circle.png'))
    $('#scene04 > div.product > div:nth-child(3) > img').attr('src', $('#scene04 > div.product > div:nth-child(3) > img').attr('src').replace('product_on.png', 'product.png'))

    $('#scene04 > .more').css({
      "left": "1401px"
    })

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
    if (a >= 100 && a <= 500 && drop) {}
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