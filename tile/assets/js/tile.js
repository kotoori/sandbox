(function ($) {
	$.fn.tile = function (columns) {
			var tiles, max, c, h, last = this.length - 1,
					s;
			if (!columns) columns = this.length;
			this.each(function () {
					s = this.style;
					if (s.removeProperty) s.removeProperty("height");
					if (s.removeAttribute) s.removeAttribute("height");
			});
			return this.each(function (i) {
					c = i % columns;
					if (c == 0) tiles = [];
					tiles[c] = $(this);
					h = tiles[c].height();
					if (c == 0 || h > max) max = h;
					if (i == last || c == columns - 1)
							$.each(tiles, function () {
									this.height(max);
							});
			});
	};
})(jQuery);

$(window).on('load resize', function () {
	if ($(window).width() > 767) {
			$('.js-title').tile(3);
			$('.js-text1').tile(3);
			$('.js-text2').tile(3);
		} else {
			$('.js-title').tile(1);
			$('.js-text1').tile(1);
			$('.js-text2').tile(1);
	}
});
