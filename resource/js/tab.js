
Tab = function(menuList, contentList, selectedClass){

    this.menuList = menuList;
    this.contentList = contentList ;

    this.selectedIndex = 0;
    this.selectedClass = selectedClass ? selectedClass : 'active';

    this.addEvent();
}

Tab.prototype = {
    addEvent : function(){
        var _this = this;

        $(_this.menuList).on('click',function(){
            _this.selectedIndex = $(this).index();
            _this.indexChange(_this.selectedIndex);

        })
    }
    ,indexChange : function(idx){
        var _this = this;

        _this.menuList.removeClass(_this.selectedClass);
        _this.menuList.eq(idx).addClass(_this.selectedClass);
        if(_this.contentList){
            _this.contentList.hide();
            _this.contentList.eq(idx).show();
        }
    }
}