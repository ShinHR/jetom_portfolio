/**
 * Created by Administrator on 2016-09-04.
 */


$(document).ready(function () {

    $('#fullpage').fullpage({

        anchors: ['Page00', 'Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        navigationTooltips: ['Page00', 'Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        afterLoad: function (anchorLink, index) {
            if (index == 1) {
            } else {
            }

        }

    });



});