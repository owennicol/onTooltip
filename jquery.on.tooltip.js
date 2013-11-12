;(function($){
	$.fn.tooltip = function(options) {
		
		var
		  defaults = {
		  	background: '#e3e3e3',
			color: 'black',
			borderColor: '#333',
			borderRadius: 0,
			offsetY: 10,
			offsetX: 20
		  },
		  settings = $.extend({}, defaults, options);
		  
		  this.each(function() {
		  	var $this = $(this);
			var title = this.title;
			
			if($this.is('a') && $this.attr('title') != '') {
				this.title = '';
				$this.hover(function(e) {
					// mouse over
					$('<div id="tooltip" />')
					  .appendTo('body')
					  .text(title)
					  .hide()
					  .css({
					  	backgroundColor: settings.background,
						color: settings.color,
						borderColor: settings.borderColor,
						top: e.pageY + settings.offsetY,
						left: e.pageX + settings.offsetX
					  })
					  .fadeIn(350);
					  
				  if(settings.borderRadius > 0) {
				  	$('#tooltip').css({borderRadius: settings.borderRadius + 'px'});
				  }
				}, function() {
					// mouse out
					$('#tooltip').fadeOut(100).remove();
				});	
			}
			
			$this.mousemove(function(e) {
				$('#tooltip').css({
					top: e.pageY + settings.offsetY,
					left: e.pageX + settings.offsetX
			     });
			});
		  });
		  // returns the jQuery object to allow for chainability.
		  return this;
	}
})(jQuery);
