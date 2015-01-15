/**
* jquery.autoStick.js
* @version v0.1.0
* @author steelydylan
* @link http://horicdesign.com
* @license MIT License
*/
(function($){
    var defaults = {
        wrapperElement:"body",
        beforeElement:null,
        marginTop:20,
        fixTop:20,
        marginBottom:20,
        marginLeft:10,
        enableCondition:function(){
            return true;
        }
    }
    $.fn.extend({
        autoStick:function(opt){
            opt = $.extend(defaults,opt);
            $wrapper = $(opt.wrapperElement);
            $wrapper.css("position","relative");
            var $this = $(this);
            var that = this;
            $(window).resize(function(){
                if(!opt.enableCondition.apply(that)){
                    $this.css("position","static");
                    return true;
                }
            });
            $(window).scroll(function(){  
                if(!opt.enableCondition.apply(that)){
                    $this.css("position","static");
                    return true;
                }         
                var scroll = $(this).scrollTop();
                var beforeElement = opt.beforeElement;
                var beforeHeight = $wrapper.offset().top;
                if(beforeElement){
                    beforeHeight = $(beforeElement).offset().top + $(beforeElement).height();
                }
                if(scroll > beforeHeight - opt.marginTop){
                    if(scroll + $this.height() + opt.marginBottom > $wrapper.offset().top + $wrapper.height()){
                        var bottom = $wrapper.outerHeight() - $this.outerHeight();
                        $this.css("position","absolute");
                        $this.css("top",bottom - opt.marginBottom);
                        $this.css("left",opt.marginLeft);
                        width = $this.width();
                    }else{
                        $this.css("position","fixed");
                        $this.css("top",opt.fixTop);
                        $this.css("left",$wrapper.offset().left+opt.marginLeft);
                    }
                }else{
                    $this.css("position","absolute");
                    if(beforeHeight){
                        $this.css("top",beforeHeight-$wrapper.offset().top);
                        $this.css("left",opt.marginLeft);
                        width = $this.width();
                    }
                }
            }).scroll();
        }
    })
})(jQuery);