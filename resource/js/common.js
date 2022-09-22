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

    for(var m=0; m<menuList.length; m++){
        var menu = menuList[m];
        if($(menu).find('> a').attr('href') == pageHref){
            $(menu).find('> a').addClass('active');
        }
    }

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