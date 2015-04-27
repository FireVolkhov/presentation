(function() {
  angular.module('App', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/slide/1");
    return $stateProvider.state('root', {
      url: "/"
    }).state('slide', {
      url: "/slide/:number",
      views: {
        page: {
          templateUrl: "app/slide.html",
          controller: 'slideCtrl'
        }
      }
    });
  }).constant('SLIDES', [
    {
      name: '1 слайд',
      template: 'app/slides/1.html'
    }, {
      name: '2 слайд',
      template: 'app/slides/2.html'
    }, {
      name: '3 слайд',
      template: 'app/slides/3.html'
    }, {
      name: '4 слайд',
      template: 'app/slides/4.html'
    }, {
      name: '5 слайд',
      template: 'app/slides/5.html'
    }, {
      name: '5 слайд',
      template: 'app/slides/5-1.html'
    }, {
      name: '5 слайд',
      template: 'app/slides/5-2.html'
    }, {
      name: '6 слайд',
      template: 'app/slides/6.html'
    }, {
      name: '7 слайд',
      template: 'app/slides/7.html'
    }, {
      name: '8 слайд',
      template: 'app/slides/8.html'
    }
  ]).directive('commonInclude', function($compile, $templateCache) {
    return {
      link: function(scope, element, attrs) {
        var elem, newScope;
        elem = null;
        newScope = null;
        return scope.$watch(attrs.commonInclude, function(templateUrl) {
          if (elem) {
            newScope.$destroy();
            elem.remove();
          }
          if (templateUrl) {
            elem = $compile($templateCache.get(templateUrl))(newScope = scope.$new());
            return element.append(elem);
          }
        });
      }
    };
  }).controller('appCtrl', function($rootScope, $document, $state, SLIDES) {
    return $document.on('keyup', function(event) {
      var _ref, _ref1;
      if (event.which === 39) {
        $state.go('slide', {
          number: Math.min((parseInt((_ref = $state.params) != null ? _ref.number : void 0) + 1) || 1, SLIDES.length)
        });
      }
      if (event.which === 37) {
        return $state.go('slide', {
          number: Math.max((parseInt((_ref1 = $state.params) != null ? _ref1.number : void 0) - 1) || 1, 1)
        });
      }
    });
  }).controller('slideCtrl', function($scope, $rootScope, $state, SLIDES) {
    var _ref;
    $scope.slideTemplate = '';
    if ((_ref = $state.params) != null ? _ref.number : void 0) {
      return $scope.slideTemplate = SLIDES[$state.params.number - 1].template;
    }
  }).directive('code', function() {
    return {
      link: function() {
        return setTimeout(function() {
          return Rainbow.color();
        });
      }
    };
  }).controller('slide4Ctrl', function($q, $scope, $document, $timeout) {
    return $timeout(function() {});
  }).controller('slide3Ctrl', function($q, $scope, $document, $timeout) {
    var count, start, testCanvas, testCount, testHtmlElem, testHtmlString, testI, testTarget;
    count = 5000;
    testCount = -1;
    testTarget = null;
    start = null;
    testI = 0;
    $scope.htmlString = [];
    $scope.htmlElem = [];
    $scope.canvas = [];
    testHtmlString = function() {
      return $q.when().then(function() {
        var html, i;
        start = new Date().getTime();
        testTarget = $document[0].getElementById('test-target');
        html = ['<div class="test-table">'];
        i = 0;
        while (i++ <= count) {
          html.push("<div class='test-cell'>" + (String.fromCharCode(Math.round(Math.random() * 95) + 33)) + "</div>");
        }
        html.push('</div>');
        return testTarget.innerHTML = html.join('');
      }).then(function() {
        return $timeout(angular.noop, 1, false);
      }).then(function() {
        $scope.htmlString.push(new Date().getTime() - start);
        return testTarget.innerHTML = '';
      }).then(function() {
        return $timeout(angular.noop, 1, false);
      }).then(function() {
        if (testI++ <= testCount) {
          return testHtmlString();
        }
      });
    };
    testHtmlElem = function() {
      return $q.when().then(function() {
        var elem, i, testTable, _results;
        start = new Date().getTime();
        testTable = $document[0].createElement('div');
        testTable.className = 'test-table';
        testTarget.appendChild(testTable);
        i = 0;
        _results = [];
        while (i++ <= count) {
          elem = $document[0].createElement('div');
          elem.className = 'test-cell';
          elem.innerHTML = String.fromCharCode(Math.round(Math.random() * 95) + 33);
          _results.push(testTable.appendChild(elem));
        }
        return _results;
      }).then(function() {
        return $timeout(angular.noop, 1, false);
      }).then(function() {
        $scope.htmlElem.push(new Date().getTime() - start);
        return testTarget.innerHTML = '';
      }).then(function() {
        return $timeout(angular.noop, 1, false);
      }).then(function() {
        if (testI++ <= testCount) {
          return testHtmlString();
        }
      });
    };
    testCanvas = function() {
      return $q.when().then(function() {
        var canvas, ctx, i, x, y, _results;
        start = new Date().getTime();
        canvas = $document[0].createElement('canvas');
        testTarget.appendChild(canvas);
        canvas.width = 25 * 16;
        canvas.height = count / 25 * 16;
        ctx = canvas.getContext('2d');
        i = 0;
        x = 0;
        y = 0;
        _results = [];
        while (i++ <= count) {
          ctx.beginPath();
          ctx.moveTo(x + 15.5, y + 0.5);
          ctx.lineTo(x + 15.5, y + 15.5);
          ctx.lineTo(x + 0.5, y + 15.5);
          ctx.stroke();
          ctx.font = '14px Arial';
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'center';
          ctx.fillText(String.fromCharCode(Math.round(Math.random() * 95) + 33), x + 8, y + 8);
          x += 16;
          if (i % 25 === 0) {
            y += 16;
            _results.push(x = 0);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }).then(function() {
        return $scope.canvas.push(new Date().getTime() - start);
      }).then(function() {
        return $timeout(angular.noop, 1, false);
      }).then(function() {
        if (testI++ <= testCount) {
          return testHtmlString();
        }
      });
    };
    return $scope.test = function() {
      return $q.when().then(testHtmlString).then(function() {
        testI = 0;
        return console.log("htmlString: " + (Math.round($scope.htmlString.reduce(function(x, y) {
          return (x || 0) + y;
        }) / $scope.htmlString.length)) + " ms");
      }).then(function() {
        return $timeout(angular.noop, 2000, false);
      }).then(testHtmlElem).then(function() {
        testI = 0;
        return console.log("htmlElem: " + (Math.round($scope.htmlElem.reduce(function(x, y) {
          return (x || 0) + y;
        }) / $scope.htmlElem.length)) + " ms");
      }).then(function() {
        return $timeout(angular.noop, 2000, false);
      }).then(testCanvas).then(function() {
        testI = 0;
        return console.log("canvas: " + (Math.round($scope.canvas.reduce(function(x, y) {
          return (x || 0) + y;
        }) / $scope.canvas.length)) + " ms");
      });
    };
  });

}).call(this);
