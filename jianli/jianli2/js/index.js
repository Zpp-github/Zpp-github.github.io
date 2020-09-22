// tab栏切换
$(function () {
    $('.tab li').click(function () {
        // Click "li" in the upper part, add "current" class in current "li", and remove other brothers
        $(this).addClass('current').siblings().removeClass('current');
        // Click to get the index number of the current "li"
        var index = $(this).index();
        // Let the "item" with corresponding index numbers in the lower part show, and the rest "item" hide
        $('.tab_list .item').eq(index).show(1050).siblings().hide(1000);
    })
})