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
        zindex: 9999
    });

    $('#scene01 > div.main_title > img:nth-child(1)').click(function () {
        $(this).attr('src', $(this).attr('src').replace('story_title_on.png', 'story_title.png'))
        $('#scene01 > div.main_title > img:nth-child(2)').attr('src', $('#scene01 > div.main_title > img:nth-child(2)')
            .attr('src').replace('history_title_on.png', 'history_title.png'))
        $('#scene02 .story').css("display", "block")
        $('#scene02 .history').css("display", "none")
        $('#scene02').css("height", "2828px")
    })

    $('#scene01 > div.main_title > img:nth-child(2)').click(function () {
        $(this).attr('src', $(this).attr('src').replace('history_title.png', 'history_title_on.png'))
        $('#scene01 > div.main_title > img:nth-child(1)').attr('src', $('#scene01 > div.main_title > img:nth-child(1)')
            .attr('src').replace('story_title_on.png', 'story_title.png'))
        $('#scene02 .history').css("display", "block")
        $('#scene02 .story').css("display", "none")
        $('#scene02').css("height", "1824px")
    })

    $('#scene01 > div.main_title > img:nth-child(1)').click(function () {
        $(this).attr('src', $(this).attr('src').replace('story_title.png',
            'story_title_on.png'))
        $('#scene01 > div.main_title > img:nth-child(2)').attr('src',
            $('#scene01 > div.main_title > img:nth-child(2)')
            .attr('src').replace('history_title_on.png', 'history_title.png'))
        $('#scene02').css("height", "2828px")
    })

    // 연혁 그래프 사진 시작
    $('#scene02 .history .graph_number > div:nth-child(2) >img').click(function () {

        $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src',
            $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src')
            .replace('2002_on.png', '2002.png'))
        $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src',
            $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src')
            .replace('2011.png', '2011_on.png'))
        $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src',
            $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src')
            .replace('2014_on.png', '2014.png'))
        $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src',
            $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src')
            .replace('2018_on.png', '2018.png'))

        $('#scene02 .history .graph_img > div:nth-child(1)').fadeIn();
        $('#scene02 .history .graph_img > div:nth-child(2)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(3)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(4)').fadeOut();
    })

    $('#scene02 .history .graph_number > div:nth-child(3) >img').click(function () {

        $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src').replace('2002_on.png', '2002.png'))
        $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src').replace('2011_on.png', '2011.png'))
        $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src').replace('2014.png', '2014_on.png'))
        $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src').replace('2018_on.png', '2018.png'))

        $('#scene02 .history .graph_img > div:nth-child(2)').fadeIn();
        $('#scene02 .history .graph_img > div:nth-child(1)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(3)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(4)').fadeOut();
    })

    $('#scene02 .history .graph_number > div:nth-child(4) >img').click(function () {

        $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src').replace('2002_on.png', '2002.png'))
        $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src').replace('2011_on.png', '2011.png'))
        $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src').replace('2014_on.png', '2014.png'))
        $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src').replace('2018.png', '2018_on.png'))

        $('#scene02 .history .graph_img > div:nth-child(3)').fadeIn();
        $('#scene02 .history .graph_img > div:nth-child(2)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(4)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(1)').fadeOut();
    })

    $('#scene02 .history .graph_number > div:nth-child(1) >img').click(function () {

        $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(1) >img').attr('src').replace('2002.png', '2002_on.png'))
        $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(2) >img').attr('src').replace('2011_on.png', '2011.png'))
        $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(3) >img').attr('src').replace('2014_on.png', '2014.png'))
        $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src', $('#scene02 .history .graph_number > div:nth-child(4) >img').attr('src').replace('2018_on.png', '2018.png'))

        $('#scene02 .history .graph_img > div:nth-child(4)').fadeIn();
        $('#scene02 .history .graph_img > div:nth-child(2)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(3)').fadeOut();
        $('#scene02 .history .graph_img > div:nth-child(1)').fadeOut();
    })

    // 연혁 그래프 끝

});
$(function () {
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({
            scrollTop: b - a
        }, 1200, "easeInOutExpo");

        return false
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
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })


});