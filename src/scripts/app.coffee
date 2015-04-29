angular.module 'App', ['ui.router']
	.config ($stateProvider, $urlRouterProvider) ->
		$urlRouterProvider
			.when '', '/slide/1'
			.when '/', '/slide/1'
			.otherwise '/slide/1'

  	$stateProvider
			.state 'root',
      	url: "/"

    	.state 'slide', {
				url: "/slide/:number"
				views:
					page:
						templateUrl: "app/slide.html"
						controller: 'slideCtrl'
			}


	.constant 'SLIDES', [
		name: '1 слайд'
		template: 'app/slides/1.html'
	,
		name: '2 слайд'
		template: 'app/slides/2.html'
	,
		name: '3 слайд'
		template: 'app/slides/3.html'
	,
		name: '4 слайд'
		template: 'app/slides/4.html'
	,
		name: '4 слайд'
		template: 'app/slides/4-1.html'
	,
		name: '5 слайд'
		template: 'app/slides/5.html'
	,
		name: '5 слайд'
		template: 'app/slides/5-1.html'
	,
		name: '5 слайд'
		template: 'app/slides/5-2.html'
	,
		name: '6 слайд'
		template: 'app/slides/6.html'
	,
		name: '7 слайд'
		template: 'app/slides/7.html'
	,
		name: '8 слайд'
		template: 'app/slides/8.html'
	]


	.directive 'commonInclude', ($compile, $templateCache) ->
		link: (scope, element, attrs) ->
			elem = null
			newScope = null
		
			scope.$watch attrs.commonInclude, (templateUrl) ->
				if elem
					newScope.$destroy()
					elem.remove()
		
				if templateUrl
					elem = $compile($templateCache.get(templateUrl))(newScope = scope.$new())
					element.append elem


	.controller 'appCtrl', ($rootScope, $document, $state, SLIDES) ->
		$document.on 'keyup', (event) ->

			#rigth
			if event.which is 39
				$state.go 'slide', number: Math.min (parseInt($state.params?.number) + 1) or 1, SLIDES.length

			#left
			if event.which is 37
				$state.go 'slide', number: Math.max (parseInt($state.params?.number) - 1) or 1, 1


	.controller 'slideCtrl', ($scope, $rootScope, $state, SLIDES) ->
		$scope.slideTemplate = ''

		if $state.params?.number
			$scope.slideTemplate = SLIDES[$state.params.number - 1].template

	.directive 'code', ->
		link: ->
			setTimeout ->
				Rainbow.color();


	.controller 'slide4Ctrl', ($q, $scope, $document, $timeout) ->
		$timeout ->
#			notAntiCanvas = $document[0].getElementById 'not-antialiasing-text'
#			antiCanvas = $document[0].getElementById 'canvas-antialiasing-text'

#			ctx = notAntiCanvas.getContext '2d'
#			ctx.font = '14px Arial'
#			ctx.textBaseline = 'middle'
#			ctx.fillText 'Не сглаженный текст в канвасе', 0, 25

#			ctx = antiCanvas.getContext '2d'
#			ctx.font = '24px Arial'
#			ctx.textBaseline = 'middle'
#			ctx.fillText 'Сглаженный текст в канвасе', 0, 25


	.controller 'slide3Ctrl', ($q, $scope, $document, $timeout) ->
		count = 5000
		testCount = -1
		testTarget = null
		start = null
		testI = 0

		$scope.htmlString = []
		$scope.htmlElem = []
		$scope.canvas = []

		testHtmlString = ->
			$q.when()
				.then ->
					start = new Date().getTime()
					testTarget = $document[0].getElementById 'test-target'

					html = ['<div class="test-table">']
					i = 0

					while i++ <= count
						html.push "<div class='test-cell'>#{String.fromCharCode Math.round(Math.random() * 95) + 33}</div>"

					html.push '</div>'
					testTarget.innerHTML = html.join('')
				.then -> $timeout angular.noop, 1, false
				.then ->
					$scope.htmlString.push new Date().getTime() - start
					testTarget.innerHTML = ''
				.then -> $timeout angular.noop, 1, false
				.then ->
					if testI++ <= testCount
						return testHtmlString()

		testHtmlElem = ->
			$q.when()
				.then ->
					start = new Date().getTime()
					testTable = $document[0].createElement 'div'
					testTable.className = 'test-table'
					testTarget.appendChild testTable

					i = 0
					while i++ <= count
						elem = $document[0].createElement 'div'
						elem.className = 'test-cell'
						elem.innerHTML = String.fromCharCode Math.round(Math.random() * 95) + 33
						testTable.appendChild elem

				.then -> $timeout angular.noop, 1, false
				.then ->
					$scope.htmlElem.push new Date().getTime() - start
					testTarget.innerHTML = ''
				.then -> $timeout angular.noop, 1, false
				.then ->
					if testI++ <= testCount
						return testHtmlString()

		testCanvas = ->
			$q.when()
				.then ->
					start = new Date().getTime()
					canvas = $document[0].createElement 'canvas'
					testTarget.appendChild canvas
					canvas.width = 25 * 16
					canvas.height = count / 25 * 16
					ctx = canvas.getContext '2d'

					i = 0
					x = 0
					y = 0

					while i++ <= count
						ctx.beginPath()
						ctx.moveTo x + 15.5, y + 0.5
						ctx.lineTo x + 15.5, y + 15.5
						ctx.lineTo x + 0.5, y + 15.5
						ctx.stroke()

						ctx.font = '14px Arial'
						ctx.textBaseline = 'middle'
						ctx.textAlign = 'center'
						ctx.fillText(String.fromCharCode(Math.round(Math.random() * 95) + 33), x + 8, y + 8)

						x += 16

						if i % 25 is 0
							y += 16
							x = 0

				.then ->
					$scope.canvas.push new Date().getTime() - start
#					testTarget.innerHTML = ''
				.then -> $timeout angular.noop, 1, false
				.then ->
					if testI++ <= testCount
						return testHtmlString()

		$scope.test = ->
			$q.when()
				.then testHtmlString
				.then ->
					testI = 0
					console.log "htmlString: #{Math.round $scope.htmlString.reduce((x, y) -> (x or 0) + y) / $scope.htmlString.length} ms"
				.then -> $timeout angular.noop, 2000, false
				.then testHtmlElem
				.then ->
					testI = 0
					console.log "htmlElem: #{Math.round $scope.htmlElem.reduce((x, y) -> (x or 0) + y) / $scope.htmlElem.length} ms"
				.then -> $timeout angular.noop, 2000, false
				.then testCanvas
				.then ->
					testI = 0
					console.log "canvas: #{Math.round $scope.canvas.reduce((x, y) -> (x or 0) + y) / $scope.canvas.length} ms"
