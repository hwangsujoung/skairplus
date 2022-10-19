$(function(){

    $('[data-search]').on('click',function(){
        if($(this).attr('data-search') == 'hide') $(this).closest('.content_con').find('.filter_style_0_wrap').hide();
        else if($(this).attr('data-search') == 'show') $(this).closest('.content_con').find('.filter_style_0_wrap').show();
    })

    $('#cardAddBtn').on('click',function(){
        $('body').css('overflow','hidden');
        $('#cardAddPop').show();
    })

    $('#cardAddCloseBtn').on('click',function(){
        $('body').css('overflow','');
        $('#cardAddPop').hide();
    })

    $('#cardAddPop .popup_style_0_dim').on('click',function(){
        $('body').css('overflow','');
        $('#cardAddPop').hide();
    })

    $('#removeBtn').on('click',function(){
        $('#addPicture').val('');
        $('#previewImg').attr('src', '');
        $('#removeBtn').hide();
    })

    $('#addPicture').on('change',function(e){
        if(e.target.files && e.target.files[0]){
            console.log(123)
            var reader = new FileReader();

            reader.onload = function(r){
                $('#previewImg').attr('src', r.target.result);
                $('#removeBtn').show();
            }

            // reader가 이미지 읽도록 하기
            reader.readAsDataURL(e.target.files[0])
        }else{
            $('#previewImg').attr('src', '');
            $('#removeBtn').hide();
        }
    })


})