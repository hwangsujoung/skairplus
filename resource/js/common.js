$(function(){

    // 탭 객체 생성성
   if($('body').find('[data-tab]').length > 0){
        for(var i=0; i<$('body').find('[data-tab]').length; i++){
            var tab = $('body').find('[data-tab]')[i];
            new Tab($(tab).find('[data-tab-menu]'), $(tab).find('[data-tab-content]'), 'active');
        }
    }
})