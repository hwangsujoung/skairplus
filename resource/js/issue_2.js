$(function(){
    $('#reportAddBtn').on('click',function(){
        $('body').css('overflow','hidden');
        $('#reportAddPop').show();
    })

    $('#reportAddCloseBtn').on('click',function(){
        $('body').css('overflow','');
        $('#reportAddPop').hide();
    })

    $('#reportAddPop .popup_style_0_dim').on('click',function(){
        $('body').css('overflow','');
        $('#reportAddPop').hide();
    })

    $('.file_delete_btn').on('click',function(){
        var fileCon = $(this).closest('.file_con');
        fileCon.find('input[type="file"]').val('');
        fileCon.find('.file_name').text('');
        fileCon.find('.file_name_con').hide();
        fileCon.find('.file_add_btn').show();
    })

    $('[id^="file_"]').on('change',function(e){
        var fileCon = $(this).closest('.file_con');
        if(e.target.files && e.target.files[0]){
            var file = e.target.files[0];

            fileCon.find('.file_name').text(file.name);
            fileCon.find('.file_name_con').show();
            fileCon.find('.file_add_btn').hide();

        }else{
            fileCon.find('.file_name').text('');
            fileCon.find('.file_name_con').hide();
            fileCon.find('.file_add_btn').show();
        }
    })
})