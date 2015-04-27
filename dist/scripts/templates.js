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
    "<div ng-controller=\"slide3Ctrl\"><div class=\"b-slide-header\"><div class=\"b-slide-number\">03</div><div class=\"b-slide-title\">Производительность</div></div><div class=\"b-slide-content\"><div class=\"b-table\"><div class=\"b-table-row\"><div class=\"b-table-col\"></div><div class=\"b-table-col\">Chrome</div><div class=\"b-table-col\">FF</div><div class=\"b-table-col\">Safari</div><div class=\"b-table-col\">IE 11</div><div class=\"b-table-col\">IE 10</div></div><div class=\"b-table-row\"><div class=\"b-table-col\">Вставить html строкой</div><div class=\"b-table-col\">92 ms</div><div class=\"b-table-col\">177 ms</div><div class=\"b-table-col\">91 ms</div><div class=\"b-table-col\">302 ms</div><div class=\"b-table-col\">188 ms</div></div><div class=\"b-table-row\"><div class=\"b-table-col\">Вставить html по элементам</div><div class=\"b-table-col\">145 ms</div><div class=\"b-table-col\">213 ms</div><div class=\"b-table-col\">68 ms</div><div class=\"b-table-col\">743 ms</div><div class=\"b-table-col\">477 ms</div></div><div class=\"b-table-row\"><div class=\"b-table-col\">Canvas</div><div class=\"b-table-col\">76 ms</div><div class=\"b-table-col\">323 ms</div><div class=\"b-table-col\">83 ms</div><div class=\"b-table-col\">193 ms</div><div class=\"b-table-col\">266 ms</div></div></div><div ng-click=\"test()\" class=\"b-test-button\">Потестить</div><div id=\"test-target\"></div></div></div>"
  );


  $templateCache.put('app/slides/4.html',
    "<div ng-controller=\"slide4Ctrl\"><div class=\"b-slide-header\"><div class=\"b-slide-number\">04</div><div class=\"b-slide-title\">Сглаживания текста</div></div><div class=\"b-slide-content\"><div class=\"b-text\"><div>Сглаженный текст браузером</div><img width=\"621\" height=\"63\" src=\"./dist/images/Image_4.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div><div class=\"b-text\"><div>Текст в канвасе</div><img width=\"671\" height=\"72\" src=\"./dist/images/Image_3.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div><div class=\"b-text\"><div>Сглаженный текст в канвасе</div><div><span>Алгоритм расчета&nbsp;</span><a href=\"https://bel.fi/alankila/lcd/\">https://bel.fi/alankila/lcd/</a></div><img width=\"525\" height=\"57\" src=\"./dist/images/Image_2.jpg\" style=\"margin: 8px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1)\"></div></div></div>"
  );


  $templateCache.put('app/slides/5.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">05</div><div class=\"b-slide-title\">Маштабирование страницы</div></div><div class=\"b-slide-content\"><div>Изображение в канвасе под маштабом</div><div style=\"margin: 16px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden; height: 496px\"><img height=\"496\" src=\"./dist/images/Image_5.jpg\" style=\"\"></div></div></div>"
  );


  $templateCache.put('app/slides/6.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">06</div><div class=\"b-slide-title\">Мониторы Retina</div></div><div class=\"b-slide-content\"><div>Изображение на мониторе с devicePixelRatio отличным от 1</div><div style=\"margin: 16px 0 0 0; border: 1px solid rgba(0, 0, 0, 0.1); overflow: hidden; height: 496px\"><img height=\"496\" src=\"./dist/images/Image_.jpg\" style=\"\"></div></div></div>"
  );


  $templateCache.put('app/slides/7.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">07</div><div class=\"b-slide-title\">Прочие мелкие баги</div></div><div class=\"b-slide-content\"><div>1. Сглаживание текста, canvas, css3 анимация в Хроме</div><div>2. IE и доступ к холсту</div><div>3. drawImage У всех кроме Хрома</div></div></div>"
  );


  $templateCache.put('app/slides/8.html',
    "<div><div class=\"b-slide-header\"><div class=\"b-slide-number\">08</div><div class=\"b-slide-title\">Заключение</div></div><div class=\"b-slide-content\"><div><span>Презенташка&nbsp;</span><a href=\"\">GitHub</a></div><div><span>Моя почта&nbsp;</span><a href=\"FireVolkhov@gmail.com\">FireVolkhov@gmail.com</a></div></div></div>"
  );


  $templateCache.put('app/test.html',
    "<div class=\"b-test\"></div>"
  );

}]);
