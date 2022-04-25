(function($) {
	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header')
		$main = $('#main'),
		$work1=$('#work1'),
		$work2=$('#work2'),
		$work3=$('#work3'),
		$work4=$('#work4'),
		$work5=$('#work5'),
		$work6=$('#work6'),
		$work7=$('#work7'),
		$game1=$('#game1'),
		$game2=$('#game2'),
		$game3=$('#game3'),
		$game4=$('#game4'),
		$game5=$('#game5'),
		$game6=$('#game6'),
		$game7=$('#game7'),
		$game8=$('#game8'),
		$game9=$('#game9'),
		$game10=$('#game10'),
		$game11=$('#game11'),
		$game12=$('#game12'),
		$game13=$('#game13'),
		$game14=$('#game14'),
		$game15=$('#game15'),
		$game16=$('#game16'),
		$game17=$('#game17'),
		$game18=$('#game18'),
		$game19=$('#game19'),
		$game20=$('#game20'),
		$game21=$('#game21'),
		$game22=$('#game22'),
		$game23=$('#game23'),
		$game24=$('#game24'),
		$game25=$('#game25'),
		$sure1=$('#sure1'),
		$sure2=$('#sure2'),
		$sure3=$('#sure3'),
		$sure4=$('#sure4'),
		$sure5=$('#sure5'),
		$sure6=$('#sure6'),
		$sure7=$('#sure7'),
		$sure8=$('#sure8'),
		$sure9=$('#sure9'),
		$sure10=$('#sure10'),
		$sure11=$('#sure11'),
		$sure12=$('#sure12'),
		$sure13=$('#sure13'),
		$sure14=$('#sure14'),
		$sure15=$('#sure15'),
		$sure16=$('#sure16'),
		$sure17=$('#sure17'),
		$worktext1=$('#worktext1'),
		$worktext2=$('#worktext2'),
		$worktext3=$('#worktext3'),
		$worktext4=$('#worktext4'),
		$worktext5=$('#worktext5'),
		$gametext1=$('#gametext1'),
		$gametext2=$('#gametext2'),
		$gametext3=$('#gametext3'),
		$gametext4=$('#gametext4'),
		$gametext5=$('#gametext5'),
		$gametext6=$('#gametext6'),
		$gametext7=$('#gametext7'),
		$gametext8=$('#gametext8'),
		$gametext9=$('#gametext9'),
		$gametext10=$('#gametext10'),
		$gametext11=$('#gametext11'),
		$main_articles = $main.children('article');
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		//辣鸡IE的适配
		if (browser.name == 'ie') {
			var flexboxFixTimeoutId;
			$window.on('resize.flexbox-fix', function() {
				clearTimeout(flexboxFixTimeoutId);
				flexboxFixTimeoutId = setTimeout(function() {
					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');
				}, 250);
			})
		}
		// Main
		var	delay = 325;
		// 显示
			$main._show = function(id) {
					var $article = $main_articles.filter('#' + id);
					if ($article.length == 0)
						return;
					if ($body.hasClass('is-article-visible')) {
							var $currentArticle = $main_articles.filter('.active');
							$currentArticle.removeClass('active');
							setTimeout(function() {
									$currentArticle.hide();
									$article.show();
									setTimeout(function() {
										$article.addClass('active');
									}, 25);
							}, delay);
					}
					else {
							$body.addClass('is-article-visible');
							setTimeout(function() {
									$header.hide();
									$main.show();
									$article.show();
								// Activate article.
									setTimeout(function() {
										$article.addClass('active');
									}, 25);
							}, delay);
					}
			};
	//藏起来
			$main._hide = function(addState) {
					var $article = $main_articles.filter('.active');
					if (!$body.hasClass('is-article-visible'))
						return;
						$article.removeClass('active');
						setTimeout(function() {
							$article.hide();
							$main.hide();
							$header.show();
							setTimeout(function() {
								$body.removeClass('is-article-visible');
							}, 25);
					}, delay);
			};
		// Articles.
		//加按钮
			$main_articles.each(function() {
				var $this = $(this);
					$('<div class="close">Close</div>').appendTo($this).on('click', function() { location.hash = '';});
					$this.on('click', function(event) {
						event.stopPropagation();
					});
			});
		// 按下
			$body.on('click', function(event) {
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);
			});
			$window.on('hashchange', function(event) {
					if (location.hash == '' ||	location.hash == '#') {
							event.preventDefault();
							event.stopPropagation();
							$main._hide();
					}
					else if ($main_articles.filter(location.hash).length > 0) {
							event.preventDefault();
							event.stopPropagation();
							$main._show(location.hash.substr(1));
					}
			});
				$main.hide();
				$main_articles.hide();
				$window.on('load', function() { $main._show(location.hash.substr(1));});
				$work1.click(function(){$work1.hide(1000);$worktext1.hide(500); $worktext2.animate({fontSize:"3em"},"slow");});
				$work2.click(function(){$work2.hide(1000);$worktext2.hide(500); $work3.hide(1000);$worktext3.animate({fontSize:"3em"},"slow");});
				$work4.click(function(){$work4.hide(1000);});
				$work5.click(function(){$work5.hide(1000);$work6.hide(1000);$worktext3.hide(500); $worktext4.animate({fontSize:"3em"},"slow");});
				$work7.click(function(){$worktext5.animate({fontSize:"4em"},"slow");$worktext4.hide(500);});
				//游戏
				$game1.click(function(){$game1.hide(1000);$gametext1.hide(1000);});
				$game2.click(function(){$game2.hide(1000);$gametext2.hide(1000);$gametext4.hide(1000);$game8.hide(1000);$gametext5.hide(1000);$game7.hide(1000);$gametext6.hide(1000);$game9.hide(1000);$game10.hide(1000);$game11.hide(1000);$game12.hide(1000);$game13.hide(1000);
				$game14.hide(1000);$gametext7.hide(1000);$game15.hide(1000);$game16.hide(1000);$game17.hide(1000);$game18.hide(1000);$game19.hide(1000);$game20.hide(1000);});
				$game3.click(function(){$game3.hide(1000);$game4.hide(1000);$game5.hide(1000);$game6.show(1000);$gametext3.hide(1000);});
				$game4.click(function(){$game3.hide(1000);$game4.hide(1000);$game5.hide(1000);$game6.show(1000);$gametext3.hide(1000);});
				$game5.click(function(){$game3.hide(1000);$game4.hide(1000);$game5.hide(1000);$game6.show(1000);$gametext3.hide(1000);});
				//小小建筑师//
				$game6.click(function(){$game6.hide(1000);$gametext4.show(1000);$game7.show(1000);});
				$game7.click(function(){$game7.hide(1000);$gametext4.hide(1000);$game8.show(1000);$gametext5.show(1000);});
				$game8.click(function(){$game8.hide(1000);$gametext5.hide(1000);$game9.show(1000);$gametext6.show(1000)});
				//我要下课//
				$game9.click(function(){$game9.hide(1000);$gametext6.hide(1000);$game10.show(1000)});
				$game10.click(function(){$game10.hide(1000);$game11.show(1000)});
				$game11.click(function(){$game11.hide(1000);$game12.show(1000)});
				$game12.click(function(){$game12.hide(1000);$game13.show(1000)});
				//其他建设//
				$game13.click(function(){$game13.hide(500);$game14.show(500);$gametext7.show(500);});
				$game14.click(function(){$game14.hide(500);$game15.show(500);$gametext7.hide(500);});
				$game15.click(function(){$game15.hide(500);$game16.show(500);});
				$game16.click(function(){$game16.hide(500);$game17.show(500);});
				$game17.click(function(){$game17.hide(500);$game18.show(500);});
				$game18.click(function(){$game18.hide(500);$game19.show(500);});
				$game19.click(function(){$game19.hide(500);$game20.show(500);});
				$game20.click(function(){$game20.hide(1000);$gametext8.animate({fontSize:"5em"},"slow");});
				//sure
				$sure1.click(function(){$sure1.hide(1000);$sure2.animate({fontSize:"5em"},"slow");$sure3.hide(500);$sure4.hide(500);
					$sure5.hide(500);$sure8.hide(500);$sure11.hide(500);$sure14.hide(500);
					$sure6.hide(500);$sure9.hide(500);$sure12.hide(500);$sure15.hide(600);
					$sure7.hide(500);$sure10.hide(500);$sure13.hide(500);$sure16.hide(500);})
				$sure2.click(function(){$sure2.hide(1000);$sure3.show(1000);$sure4.show(1000);})
				$sure3.click(function(){$sure3.hide(1000);$sure5.show(1000);})
				$sure5.click(function(){$sure5.hide(1000);$sure6.show(1000);})
				$sure6.click(function(){$sure6.hide(1000);$sure7.show(1000);$sure8.show(1000);})
				$sure7.click(function(){$sure7.hide(1000);$sure8.hide(1000);$sure9.show(1000);})
				$sure8.click(function(){$sure7.hide(1000);$sure8.hide(1000);$sure9.show(1000);})
				$sure9.click(function(){$sure9.hide(500);$sure10.show(500);})
				$sure10.click(function(){$sure10.hide(500);$sure11.show(500);})
				$sure11.click(function(){$sure11.hide(500);$sure12.show(500);$sure13.show(500);})
				$sure12.click(function(){$sure12.hide(500);$sure13.hide(500);$sure14.show(500);})
				$sure13.click(function(){$sure12.hide(500);$sure13.hide(500);$sure14.show(500);})
				$sure14.click(function(){$sure14.hide(500);$sure15.show(500);})
				$sure15.click(function(){$sure15.hide(500);$sure16.show(1000);$sure4.hide(500);$sure16.animate({fontSize:"3em"},"slow");})
})(jQuery);