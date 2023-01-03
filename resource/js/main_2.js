$(function(){

    $('#viewHistoryBtn').on('click',function(){
        $('body').css('overflow','hidden');
        $('#historyPop').show();
    })

    $('#historyPopCloseBtn').on('click',function(){
        $('body').css('overflow','');
        $('#historyPop').hide();
    })

    $('#historyPop .popup_style_1_dim').on('click',function(){
        $('body').css('overflow','');
        $('#historyPop').hide();
    })

    $('[data-all-check]').on('change',function(){
        if($(this).is(':checked')){
            $('[data-check]').prop('checked',true)
        }else{
            $('[data-check]').prop('checked',false)
        }
    })

    var checkLen = $('[data-check]').length;
    $('[data-check]').on('change',function(){
        if($('[data-check]:checked').length == checkLen){
            $('[data-all-check]').prop('checked',true)
        }else{
            $('[data-all-check]').prop('checked',false)
        }
    })


})