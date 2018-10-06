/*global window,$*/
window.onload = function () {
    /*Responsive Ready R*/
    "use strict";
    if (window.innerWidth < 1300) {
        $(".bigMap").addClass("d-none");
        $(".smallMap").removeClass("d-none");
        $(".mapDes").removeClass("col-md-6");
    } else {
        $(".bigMap").removeClass("d-none");
        $(".smallMap").addClass("d-none");
        $(".mapDes").addClass("col-md-6");
    }
    if (window.innerWidth < 991) {
        $(".img").addClass("d-none");
        $(".RR").removeClass("col-md-6");
        $(".RR").addClass("col-xs-12");
    } else {
        $(".img").removeClass("d-none");
        $(".RR").removeClass("col-xs-12");
        $(".RR").addClass("col-md-6");
    }
    if (window.innerWidth < 768) {
        $(".Qimg").addClass("order-first");
        $(".Qimg").css('margin-bottom', '30px');
        $(".Qimg").css('margin-left', '11%');
        $(".Qdes").css('margin-left', '11%');
        $(".pricing .row .basic,.pricing .row .plus").css("border-right", "none");
        $(".pricing .row .basic,.pricing .row .plus").css("border-bottom", "1px solid #c1d3d2");
    } else {
        $(".Qimg").removeClass("order-first");
        $(".Qimg").css('margin-left', '0');
        $(".Qdes").css('margin-left', '0');
        $(".pricing .row .basic,.pricing .row .plus").css("border-right", "1px solid #c1d3d2");
        $(".pricing .row .basic,.pricing .row .plus").css("border-bottom", "none");
    }
    window.onresize = function () {
        if (window.innerWidth < 1300) {
            $(".bigMap").addClass("d-none");
            $(".smallMap").removeClass("d-none");
            $(".mapDes").removeClass("col-md-6");
        } else {
            $(".bigMap").removeClass("d-none");
            $(".smallMap").addClass("d-none");
            $(".mapDes").addClass("col-md-6");
        }
        if (window.innerWidth < 991) {
            $(".img").addClass("d-none");
            $(".RR").removeClass("col-md-6");
            $(".RR").addClass("col-xs-12");
        } else {
            $(".img").removeClass("d-none");
            $(".RR").removeClass("col-xs-12");
            $(".RR").addClass("col-md-6");
        }
        if (window.innerWidth < 768) {
            $(".Qimg").addClass("order-first");
            $(".Qimg").css('margin-bottom', '30px');
            $(".Qimg").css('margin-left', '11%');
            $(".Qdes").css('margin-left', '11%');
            $(".pricing .row .basic,.pricing .row .plus").css("border-right", "none");
            $(".pricing .row .basic,.pricing .row .plus").css("border-bottom", "1px solid #c1d3d2");
        } else {
            $(".Qimg").removeClass("order-first");
            $(".Qimg").css('margin-bottom', '0');
            $(".Qimg").css('margin-left', '0');
            $(".Qdes").css('margin-left', '0');
            $(".pricing .row .basic,.pricing .row .plus").css("border-right", "1px solid #c1d3d2");
            $(".pricing .row .basic,.pricing .row .plus").css("border-bottom", "none");
        }
    };
};
