$(function (argument) {
	$('.dec_1').eq(0).show().siblings().hide();
});

$('.dec li').hover(function() {
    $(this).removeClass('dec_dibu_2');
    $(this).addClass('dec_dibu_1').siblings().addClass('dec_dibu_2').removeClass('dec_dibu_1');
    console.log($(this).index());
    var $_div = $(this).index();
    $('.dec_1').eq($_div).show().siblings().hide();
});
