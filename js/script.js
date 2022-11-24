// ハンバーガーメニュー
$(function () {
  $(".js-l-header__burger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".js-l-header__burger-menu").addClass("active");
      $("body").addClass("fixed");
    } else {
      $(".js-l-header__burger-menu").removeClass("active");
      $("body").removeClass("fixed");
    }
  });
});
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$(".l-header__burger-menu-link,.l-header__burger-menu-link a").on("click", function (event) {
  $(".js-l-header__burger-btn").trigger("click");
});