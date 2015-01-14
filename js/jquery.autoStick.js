(function($){
	var defaults = {
		wrapperElement:"body",
		beforeElement:null,
		marginTop:20,
		marginBottom:20,
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
			var bottom = false;
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
				var height = 0;
				var beforeElement = opt.beforeElement;
				var beforeHeight = 0;
				if(beforeElement){
					beforeHeight = $(beforeElement).offset().top + $(beforeElement).height();
				}
				height = beforeHeight || $wrapper.offset().top;
				if(scroll > height - opt.marginTop){
					if(scroll + $this.height() + opt.marginBottom > $wrapper.offset().top + $wrapper.height()){
						var bottom = $wrapper.offset().top + $wrapper.outerHeight() - $this.outerHeight();
						$this.css("position","absolute");
						$this.css("top",bottom - opt.marginBottom);
						bottom = true;
					}else{
						$this.css("position","fixed");
						$this.css("top",opt.marginTop);
						bottom = false;
					}
				}else{
					$this.css("position","absolute");
					if(beforeHeight){
						$this.css("top",beforeHeight);
					}
					bottom = false;
				}
			});
		}
	})
})(jQuery);