module.exports = (grunt) ->
	grunt.initConfig
		module:
			moduleName: 'app'
			srcPath: './src'
			basePath: './'
			distPath: './dist'

			libs:
				src: '<%= module.srcPath %>/scripts/libs'
				compiled: '<%= module.distPath %>/scripts/libs'

			styles:
				src: '<%= module.srcPath %>/styles'
				compiled: '<%= module.distPath %>/styles'

			images:
				src: '<%= module.srcPath %>/images'
				compiled: '<%= module.distPath %>/images'

			scripts:
				src: '<%= module.srcPath %>/scripts'
				compiled: '<%= module.distPath %>/scripts'

			templates:
				src: '<%= module.distPath %>/templates'
				compiled: '<%= module.scripts.compiled %>'

		clean:
			options:
				force: true
			dist: [
				'<%= module.distPath %>'
			]

		copy:
			images:
				files: [
					expand: true
					cwd: '<%= module.images.src %>/'
					dest: '<%= module.images.compiled %>/'
					src: '**'
				]
			libs:
				files: [
					expand: true
					cwd: '<%= module.libs.src %>/'
					dest: '<%= module.libs.compiled %>/'
					src: '**/*.js'
				]
			index:
				files: [
					expand: true
					cwd: '<%= module.distPath %>/'
					src: 'index.html'
					dest: '<%= module.basePath %>/'
				]

		compass:
			options:
				sassDir: '<%= module.styles.src %>'
				cssDir: '<%= module.styles.compiled %>'
				imagesDir: '<%= module.images.compiled %>'
				relativeAssets: true,
				raw: "Sass::Script::Number.precision = 10\n"
			dist: {}

		jade:
			compile:
				expand: true,
				cwd: '<%= module.srcPath %>'
				src: ['**/*.jade', '!**/_*.jade']
				dest: '<%= module.distPath %>'
				ext: '.html'

		coffeelint:
			all: ['<%= module.srcPath %>/**/*.coffee']
			options:
				configFile: '.coffeelint.json'

		coffee:
			compile:
				expand: true
				flatten: false
				cwd: '<%= module.srcPath %>'
				src: '**/*.coffee'
				dest: '<%= module.distPath %>'
				ext: '.js'

		ngtemplates:
			options:
				prefix: '<%= module.moduleName %>/'
				module: 'App'
				htmlmin:
					collapseWhitespace: true
					removeComments: true
			app:
				cwd: '<%= module.templates.src %>'
				src: ['**/*.html']
				dest: '<%= module.templates.compiled %>/templates.js'

#		ngAnnotate:
#			options:
#				singleQuotes: true
#			dist:
#				files: [
#					expand: true
#					cwd: '<%= module.scripts.precompiled %>'
#					src: '**/*.js'
#					dest: '<%= module.scripts.compiled %>'
#				]

	require('load-grunt-tasks')(grunt)

	# Developer build
	grunt.registerTask('build', ['clean', 'copy:images', 'copy:libs', 'coffee', 'jade', 'copy:index', 'ngtemplates', 'compass'])

	# Default task
	grunt.registerTask('default', ['build'])

	# Задачка для линтовки кода
	grunt.registerTask('lint', ['coffeelint'])
