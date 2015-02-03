/**
 * Created by ruslan on 03.02.15.
 */
$(function () {
    var popup = $('.popup');
    $('.popup-link').click(function () {
        $('.popup, .overlay').addClass('active');
    });

    $('.overlay, .close').click(function () {
        $('.popup, .overlay').removeClass('active');
    });
    var resultWidth = (-1 * (popup.innerWidth())) / 2;
    var resultHeight = (-1 * (popup.innerHeight())) / 2;

    popup.css({
        'margin-left': resultWidth,
        'margin-top': resultHeight
    });
});