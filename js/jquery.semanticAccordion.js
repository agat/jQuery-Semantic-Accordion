/*
 * jQuery semanticAccordion
 * @copyright Aleksej Romanovskij http://agat.in/jquery-semantic-accordion-plugin/
 * @version 0.1
 */

(function($){
$.fn['semanticAccordion'] = function(options) {
	var defaults = {
		'headSelector': '> dt',
		'bodySelector': '> dd',
		'CSSClass': 'b-accordion',
		'HeadSuffix': '-head',
		'BodySuffix': '-body',
		'ContentSuffix': '-content',
		'OpenedSuffix': '-opened',
		'ClosedSuffix': '-closed'
	};
	
	options = $.extend(defaults, options);
    
	return this.each(function() {
		var obj = $(this),
			$objHead,
			$objBody,
			sHeadClass,
			sBodyClass,
			sContentClass,
			sOpenedClass,
			sClosedClass,
			sClass = obj.attr('class').split(' ')[0];
		
		// If object has no CSS class
		if(sClass == '') {
			// add it
			sClass = options['CSSClass'];
			obj.addClass(sClass);
		}
		
		// Set various CSS class names
		sHeadClass = sClass + options['HeadSuffix'];
		sBodyClass = sClass + options['BodySuffix'];
		sContentClass = sClass + options['ContentSuffix'];
		sOpenedClass = sClass + options['OpenedSuffix'];
		sClosedClass = sClass + options['ClosedSuffix'];	
		
		// Change DOM
		$objHead = obj.find(options['headSelector']);
		$objBody = obj.find(options['bodySelector']);
		
		$objHead.addClass(sHeadClass);
		
		$objBody.each(function(){
			$(this).
				addClass(sBodyClass).
				wrapInner('<div class="' + sContentClass + '" />').
				data('height', $(this).height());
		});
		
		$objHead
			.filter(':not(:first-child)').addClass(sClosedClass)
			.next().hide().css('height', 0);
		$objHead
			.first().addClass(sOpenedClass);
		
		// Navigation Events
		$objHead.click(function(){
			if($(this).hasClass(sClosedClass)){
				var domCurrent = $(this);
				var intCurrentHeight = domCurrent.next().data('height');
				var domOpened = $objHead.filter('.' + sOpenedClass);
				
				domOpened.addClass(sClosedClass).removeClass(sOpenedClass)
					.next().animate({'height': 0});
				domCurrent.removeClass(sClosedClass).addClass(sOpenedClass)
					.next().show().animate({'height': intCurrentHeight});
			}
		});
	});
};
})(jQuery);