jQuery(document).ready(function(){   
    $('.burger').click(function(){
        $('.burger_top').toggleClass('active');
        $('.burger_middle').toggleClass('active');
        $('.burger_bottom').toggleClass('active');
        $('.mobile').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style')
                }
        });
    });
});