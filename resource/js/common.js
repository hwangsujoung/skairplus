function setViewport() {
    if( $(window).width() <= 480 ) {
        var ww = ( document.documentElement.clientWidth < window.screen.width ) ? $(window).width() : window.screen.width;
        var mw = 480;
        var ratio = ww / mw;
        $('meta[name="viewport"]').attr( 'content', 'width=' + mw + ', initial-scale=' + ratio + ', user-scalable=no' );
    } else {
        $('meta[name="viewport"]').attr( 'content', 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' );
    }
}
$(function(){

    setViewport();

    // 헤더
    var url = location.href;
    var pageHref = url.replace(location.protocol+'//'+location.host,'');
    var menuList = $('.header_wrap .gnb_wrap > ul > li');
    var depth2List = $('.header_wrap .gnb_wrap > ul > li > ul > li');
    var depth3List = $('.header_wrap .gnb_wrap > ul > li > ul > li > ul > li');

    for(var m=0; m<menuList.length; m++){
        var menu = menuList[m];
        for(var e=0; e<$(menu).find('a').length; e++){
            var childMenuTag = $(menu).find('a')[e];
            var childMenu = $(childMenuTag).parent('li');
            if($(childMenuTag).attr('href') == pageHref){
                $(childMenu).addClass('active effect');
                $($(childMenu).parents('li')[0]).addClass('active effect');
                $(menu).addClass('active effect');
            }
        }
        /*if($(menu).find('a').attr('href') == pageHref){
            $(menu).addClass('active');
        }*/
    }

    $(menuList).hover(function(){
        $(this).siblings().removeClass('effect');
        $(this).addClass('effect');
    }, function(){
        if($(this).hasClass('active')){
            $(this).addClass('effect');
        }else{
            $(this).removeClass('effect');
            $(this).siblings('.active').addClass('effect');
        }

        $(this).find('> ul > li').removeClass('effect');
        if($(this).find('> ul > li.active')) $(this).find('> ul > li.active').addClass('effect');
    });

    $(depth2List).on('click',function(){
        if($(this).find(' > ul').length > 0){
            if(!$(this).find(' > ul').is(':visible')) {
                $(this).addClass('effect');
                $(this).siblings().removeClass('effect');
            }
        }
    })

    /*$(depth2List).hover(function(){
        $(this).siblings().removeClass('effect');
        $(this).addClass('effect');
    }, function(){
        if($(this).hasClass('active')){
            $(this).addClass('effect');
        }else{
            $(this).removeClass('effect');
            $(this).siblings('.active').addClass('effect');
        }
    })*/

    $(depth3List).hover(function(){
        $(this).siblings().removeClass('effect');
        $(this).addClass('effect');
    }, function(){
        if($(this).hasClass('active')){
            $(this).addClass('effect');
        }else{
            $(this).removeClass('effect');
            $(this).siblings('.active').addClass('effect');
        }
    })



    // 탭 객체 생성
   if($('body').find('[data-tab]').length > 0){
        for(var i=0; i<$('body').find('[data-tab]').length; i++){
            var tab = $('body').find('[data-tab]')[i];
            if($(tab).attr('data-tab')){
                var tabId = $(tab).attr('data-tab');
                new Tab($(tab).find('[data-tab-menu="'+tabId+'"]'), $(tab).find('[data-tab-content="'+tabId+'"]'), 'active');
            }else{
                new Tab($(tab).find('[data-tab-menu]'), $(tab).find('[data-tab-content]'), 'active');
            }
        }
    }

   // 푸터
   $('.footer_wrap .move_to_top_con').on('click',function(){
       $("html, body").animate({ scrollTop: 0 });
       return false;
   })
})