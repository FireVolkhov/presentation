angular.module('App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/slide.html',
    "<div common-include=\"slideTemplate\" class=\"b-slide\"></div>"
  );


  $templateCache.put('app/slides/1.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">01</div><div class=\"b-slide-title\">Введение</div></div><div class=\"b-slide-content\"><div>Сергей Гаврилов Front-end Разработчик</div><div>Canvas и Pixel Perfect</div><img height=\"100%\" src=\"./dist/images/Image_1.jpg\" style=\"margin: 16px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div></div>"
  );


  $templateCache.put('app/slides/2.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">02</div><div class=\"b-slide-title\">Помечу был выбран canvas</div></div><div class=\"b-slide-content\"><div>Положилетьные и отрецательные стороны изпользования canvas</div><div>&nbsp;</div><div>+ Производительность</div><div>+ Удолетворение личного интереса</div><div>&nbsp;</div><div>- Больший обьем кода</div><div>- Больше затраты времени на продумывание верстки</div><div>- Не известные перспективы кросбраузерной совместимости</div></div></div>"
  );


  $templateCache.put('app/slides/3.html',
    "<div ng-controller=\"slide3Ctrl\"><div class=\"b-slide-header\"><div class=\"b-slide-number\">03</div><div class=\"b-slide-title\">Производительность</div></div><div class=\"b-slide-content\"><div class=\"b-table\"><div class=\"b-table-row b-table-row--header\"><div class=\"b-table-col\"></div><div class=\"b-table-col\">Chrome</div><div class=\"b-table-col\">FF</div><div class=\"b-table-col\">Safari</div><div class=\"b-table-col\">IE 11</div><div class=\"b-table-col\">IE 10</div></div><div class=\"b-table-row\"><div class=\"b-table-col\">Рендеринг календаря на Angular</div><div class=\"b-table-col b-table-col--content\">9 225</div><div class=\"b-table-col b-table-col--content\">2 330</div><div class=\"b-table-col b-table-col--content\">3 152</div><div class=\"b-table-col b-table-col--content\">11 567</div><div class=\"b-table-col b-table-col--content\">9 392</div></div><div class=\"b-table-row\"><div class=\"b-table-col\">Рендеринг на Canvas</div><div class=\"b-table-col b-table-col--content\">91</div><div class=\"b-table-col b-table-col--content\">506</div><div class=\"b-table-col b-table-col--content\">103</div><div class=\"b-table-col b-table-col--content\">184</div><div class=\"b-table-col b-table-col--content\">167</div></div></div><div ng-click=\"test()\" class=\"b-test-button\">Потестить</div><div id=\"test-target\"></div></div></div>"
  );


  $templateCache.put('app/slides/4-1.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">04.1</div><div class=\"b-slide-title\">Как это выглядет в коде</div></div><div class=\"b-slide-content\"><div><a href=\"https://github.com/FireVolkhov/CanvasService\">Используемый сервис</a></div><pre class=\"b-code\"><code data-language=\"coffeescript\">CanvasService.setContext @context\n" +
    "\n" +
    "nameStyle =\n" +
    " fillStyle: fillStyleName\n" +
    " font: css.fonts.timeOffInDay\n" +
    " antiAliased: true\n" +
    " antiAliasedBackgroundColor: backgroundColor\n" +
    " lineHeight: css.lineHeight\n" +
    " \n" +
    "CanvasService.text name,\n" +
    " x: timeOffBlock.topLeft.x + @style.paddingHorizontalDayText\n" +
    " y: timeOffBlock.topLeft.y + (css.sizes.rowHeight - css.lineHeight) / 2\n" +
    ", nameStyle\n" +
    "\n" +
    "...</code></pre></div></div>"
  );


  $templateCache.put('app/slides/4.html',
    "<div ng-controller=\"slide4Ctrl\"><div class=\"b-slide-header\"><div class=\"b-slide-number\">04</div><div class=\"b-slide-title\">Сглаживание текста</div></div><div class=\"b-slide-content\"><div class=\"b-text\"><div>Сглаженный текст браузером</div><img width=\"621\" height=\"63\" src=\"./dist/images/Image_4.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div><div class=\"b-text\"><div>Текст в канвасе</div><img width=\"671\" height=\"72\" src=\"./dist/images/Image_3.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div><div class=\"b-text\"><div>Сглаженный текст в канвасе</div><div><span>Алгоритм расчета&nbsp;</span><a href=\"https://bel.fi/alankila/lcd/\">https://bel.fi/alankila/lcd/</a></div><img width=\"525\" height=\"57\" src=\"./dist/images/Image_2.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div></div></div>"
  );


  $templateCache.put('app/slides/5-1.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">05.1</div><div class=\"b-slide-title\">Css в канвасе</div></div><div class=\"b-slide-content\"><div>Псевдо css, чтоб проще понимать</div><pre class=\"b-code\"><code data-language=\"coffeescript\">config:\n" +
    " sizes:\n" +
    "  headerHeight: 56\n" +
    "  leftBlockWidth: 256\n" +
    "  rowHeight: 40\n" +
    "  minWidthDay: 24\n" +
    "  lineWidth: 1\n" +
    "  \n" +
    " colors:\n" +
    "  mainText: '#292D38'\n" +
    "  secondText: '#99A8BF'\n" +
    "  \n" +
    "...</code></pre></div></div>"
  );


  $templateCache.put('app/slides/5-2.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">05.2</div><div class=\"b-slide-title\">Применение масштаба</div></div><div class=\"b-slide-content\"><pre class=\"b-code\"><code data-language=\"coffeescript\">scaleNumber: (number, scale) ->\n" +
    " Math.max(Math.round(number * scale), 1)\n" +
    " \n" +
    "scaleFont: (font, scale) ->\n" +
    " font.replace /\\d+px/g, (match) =>\n" +
    "  @scaleNumber(parseInt(match), scale) + 'px'\n" +
    "  \n" +
    "applyScale: (style, scale) ->\n" +
    " css = _.copy style\n" +
    " css.sizes.headerHeight = @scaleNumber css.sizes.headerHeight, scale\n" +
    " ...\n" +
    " css.fonts.main = @scaleFont css.fonts.main, scale\n" +
    " ...</code></pre></div></div>"
  );


  $templateCache.put('app/slides/5.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">05</div><div class=\"b-slide-title\">Маштабирование страницы</div></div><div class=\"b-slide-content\"><div>Изображение в канвасе под маштабом</div><div>и/или мониторе с devicePixelRatio отличным от 1</div><div style=\"margin: 16px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden; height: 496px\"><img height=\"496\" src=\"./dist/images/Image_5.jpg\" style=\"\"></div></div></div>"
  );


  $templateCache.put('app/slides/6.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">06</div><div class=\"b-slide-title\">Мониторы Retina</div></div><div class=\"b-slide-content\"><div>Простое решение</div><pre class=\"b-code\"><code data-language=\"coffeescript\">hidefCanvasWidth = $(hidefCanvas).attr('width')\n" +
    "hidefCanvasHeight = $(hidefCanvas).attr('height')\n" +
    "\n" +
    "$(hidefCanvas).attr('width', hidefCanvasWidth * window.devicePixelRatio)\n" +
    "$(hidefCanvas).attr('height', hidefCanvasHeight * window.devicePixelRatio)\n" +
    "$(hidefCanvas).css('width', hidefCanvasWidth)\n" +
    "$(hidefCanvas).css('height', hidefCanvasHeight)\n" +
    "hidefContext.scale(window.devicePixelRatio, window.devicePixelRatio)\n" +
    "\n" +
    "...</code></pre></div></div>"
  );


  $templateCache.put('app/slides/7.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">07</div><div class=\"b-slide-title\">Прочие мелкие баги</div></div><div class=\"b-slide-content\"><div class=\"b-p\">1. Потеря сглаживания текста в элементах из-за canvas и css3 анимация в Хроме</div><div class=\"b-p\">2. В IE 11 закрыт доступ к холсту через context.getImageData из события mousemove</div><div class=\"b-p\">3. context.drawImage при любых не точностях выкидывает эксепшины во всех браузерах кроме Хрома</div></div></div>"
  );


  $templateCache.put('app/slides/8.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">08</div><div class=\"b-slide-title\">Заключение</div></div><div class=\"b-slide-content\"><div><span>Презенташка&nbsp;</span><a href=\"http://firevolkhov.github.io/presentation/\">http://firevolkhov.github.io/presentation/</a></div><div><span>Моя почта&nbsp;</span><a href=\"FireVolkhov@gmail.com\">FireVolkhov@gmail.com</a></div></div></div>"
  );


  $templateCache.put('app/test.html',
    "<div class=\"b-test\"></div>"
  );

}]);
