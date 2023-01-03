$(function(){

    $('[data-search]').on('click',function(){
        if($(this).attr('data-search') == 'hide') $(this).closest('.content_con').find('.filter_style_0_wrap').hide();
        else if($(this).attr('data-search') == 'show') $(this).closest('.content_con').find('.filter_style_0_wrap').show();
    })

    /* 기존 설비이력카드 등록 팝업 */
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


    /* 운영이력 등록 팝업 */
    $('#historyAddBtn').on('click',function(){
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

    /*운영이력등록 > 상세 팝업*/
    $('#historyTable tbody tr').on('click',function(e){
        if(e.target.tagName == 'LABEL' || e.target.tagName == 'INPUT') return;
        if($(this).find('[data-detail-btn="add"]')) $('#detailAddPop').show();
        else if($(this).find('[data-detail-btn="view"]')) $('#detailViewPop').show();
    })

    /*상세등록팝업*/
    $('[data-detail-btn="add"]').on('click',function(){
        $('#detailAddPop').show();
    })

    $('#detailPopCloseBtn').on('click',function(){
        $('#detailAddPop').hide();
    })

    $('#detailAddPop .popup_style_1_dim').on('click',function(){
        $('#detailAddPop').hide();
    })

    /*상세보기 팝업*/
    $('[data-detail-btn="view"]').on('click',function(){
        $('#detailViewPop').show();
    })

    $('#detailViewPopCloseBtn').on('click',function(){
        $('#detailViewPop').hide();
    })

    $('#detailViewPop .popup_style_1_dim').on('click',function(){
        $('#detailViewPop').hide();
    })

})