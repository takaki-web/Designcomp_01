// ハンバーガーメニュー
$(function () {
  $('.js-l-header__burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-l-header__burger-menu').addClass('active')
    } else {
      $('.js-l-header__burger-menu').removeClass('active')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function (event) {
  $('.js-l-header__burger-btn').trigger('click')
})
// ×ボタン押したらハンバーガーメニューが閉じるように
$('.js-l-header__burger-menu').on('click', function (event) {
  $('.js-l-header__burger-btn').trigger('click')
})


