/* ===============================================
#ハンバーガーメニュー
=============================================== */
jQuery(function ($) {
    var menu = $(".c-drawer__open");

    $(".c-drawer__content a").on("click", function () {
        $("body").removeClass("is-fixed");
    });

    $(".c-drawer__close").on("click", function () {
        $("body").removeClass("is-fixed");
    });

    $(".c-drawer__content a").click(function () {
        $("#drawer-check")
            .removeAttr("checked")
            .prop("checked", false)
            .change();
    });

    menu.on("click", function () {
        $("body").toggleClass("is-fixed");
    });
});
/* ===============================================
#アコーディオン
=============================================== */
jQuery(function ($) {
    $(".qa__dt").on("click", function () {
        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle(200);
        /*矢印の向きを変更*/
        $(this).toggleClass("open", 200);
    });
});

/* ===============================================
#スムーススクロール
=============================================== */
$(function () {
    "use strict";
    $('a[href^="#"]').click(function () {
        var windowWidth = $(window).width();
        
        $("body").removeClass("nav-open");
        if (windowWidth >= 1024) {
            var headerHight = 0; //ヘッダの高さ
        } else if(windowWidth >= 768) {
            headerHight = 0; //ヘッダの高さ
        } else {
            headerHight = 0; //ヘッダの高さ
        }
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? "html" : href);
        // 移動先を数値で取得
        var position = target.offset().top - headerHight;
        // スムーススクロール
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});