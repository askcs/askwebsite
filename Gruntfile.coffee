'use strict'

module.exports = (grunt) ->
  require('load-grunt-tasks') grunt
  require('time-grunt') grunt

  grunt.initConfig
    config:
      app: 'app'
      dist: 'dist'


    jade:
      compile:
        options:
          pretty: true
        files:
          '.tmp/index.html': '<%= config.app %>/index.jade'
          '.tmp/about.html': '<%= config.app %>/about.jade'
          '.tmp/cases.html': '<%= config.app %>/cases.jade'
          '.tmp/jobs.html': '<%= config.app %>/jobs.jade'
          '.tmp/terms.html': '<%= config.app %>/terms.jade'
          '.tmp/platform.html': '<%= config.app %>/platform.jade'

    watch:
#      bower:
#        files: ['bower.json']
#        tasks: ['bowerInstall']
      jade:
        files: ['<%= config.app %>/*.jade']
        tasks: ['jade']
      js:
        files: ['<%= config.app %>/scripts/{,*/}*.js']
        tasks: ['jshint']
        options:
          livereload: true
      jstest:
        files: ['test/spec/{,*/}*.js']
        tasks: ['test:watch']
      gruntfile:
        files: ['Gruntfile.js']
      compass:
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
        tasks: [
          'compass:server'
          'autoprefixer'
        ]
      styles:
        files: ['<%= config.app %>/styles/{,*/}*.css']
        tasks: [
          'newer:copy:styles'
          'autoprefixer'
        ]
      livereload:
        options:
          livereload: '<%= connect.options.livereload %>'
        files: [
          '<%= config.app %>/{,*/}*.html'
          '.tmp/styles/{,*/}*.css'
          '<%= config.app %>/images/{,*/}*'
        ]


    connect:
      options:
        port: 9000
        livereload: 35729
        hostname: '0.0.0.0'
      livereload:
        options:
          open: false
          base: [
            '.tmp'
            '<%= config.app %>'
          ]
      test:
        options:
          port: 9001
          base: [
            '.tmp'
            'test'
            '<%= config.app %>'
          ]
      dist:
        options:
          open: true
          base: '<%= config.dist %>'
          livereload: false


    clean:
      dist:
        files: [
          dot: true
          src: [
            '.tmp'
            '<%= config.dist %>/*'
            '!<%= config.dist %>/.git*'
          ]
        ]
      server: '.tmp'


    jshint:
      options:
        jshintrc: '.jshintrc'
        reporter: require('jshint-stylish')
      all: [
        'Gruntfile.js'
        '<%= config.app %>/scripts/{,*/}*.js'
        '!<%= config.app %>/scripts/vendor/*'
        'test/spec/{,*/}*.js'
      ]


    mocha:
      all:
        options:
          run: true
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']


    compass:
      options:
        sassDir: '<%= config.app %>/styles'
        cssDir: '.tmp/styles'
        generatedImagesDir: '.tmp/images/generated'
        imagesDir: '<%= config.app %>/images'
        javascriptsDir: '<%= config.app %>/scripts'
        fontsDir: '<%= config.app %>/styles/fonts'
        importPath: '<%= config.app %>/vendors'
        httpImagesPath: '/images'
        httpGeneratedImagesPath: '/images/generated'
        httpFontsPath: '/styles/fonts'
        relativeAssets: false
        assetCacheBuster: false
      dist:
        options:
          generatedImagesDir: '<%= config.dist %>/images/generated'
      server:
        options:
          debugInfo: false


    autoprefixer:
      options:
        browsers: ['last 1 version']
      dist:
        files: [
          expand: true
          cwd: '.tmp/styles/'
          src: '{,*/}*.css'
          dest: '.tmp/styles/'
        ]


    bowerInstall:
      app:
        src: ['<%= config.app %>/index.html']
        ignorePath: '<%= config.app %>/'
        exclude: ['<%= config.app %>/vendors/bootstrap-sass/vendor/assets/javascripts/bootstrap.js']
      sass:
        src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
        ignorePath: '<%= config.app %>/vendors/'


    rev:
      dist:
        files:
          src: [
            '<%= config.dist %>/scripts/{,*/}*.js'
            '<%= config.dist %>/styles/{,*/}*.css'
            '<%= config.dist %>/images/{,*/}*.*'
            '<%= config.dist %>/styles/fonts/{,*/}*.*'
            '<%= config.dist %>/*.{ico,png}'
          ]


    useminPrepare:
      options:
        dest: '<%= config.dist %>'
      html: '<%= config.app %>/index.html'


    usemin:
      options:
        assetsDirs: [
          '<%= config.dist %>'
          '<%= config.dist %>/images'
        ]
      html: ['<%= config.dist %>/{,*/}*.html']
      css: ['<%= config.dist %>/styles/{,*/}*.css']


    imagemin:
      dist:
        files: [
          expand: true
          cwd: '<%= config.app %>/images'
          src: '{,*/}*.{gif,jpeg,jpg,png}'
          dest: '<%= config.dist %>/images'
        ]


    svgmin:
      dist:
        files: [
          expand: true
          cwd: '<%= config.app %>/images'
          src: '{,*/}*.svg'
          dest: '<%= config.dist %>/images'
        ]


    htmlmin:
      dist:
        options:
          collapseBooleanAttributes: true
          collapseWhitespace: true
          removeAttributeQuotes: true
          removeCommentsFromCDATA: true
          removeEmptyAttributes: true
          removeOptionalTags: true
          removeRedundantAttributes: true
          useShortDoctype: true
        files: [
          expand: true
          cwd: '<%= config.dist %>'
          src: '{,*/}*.html'
          dest: '<%= config.dist %>'
        ]


    copy:
      dist:
        files: [
          expand: true
          dot: true
          cwd: '<%= config.app %>'
          dest: '<%= config.dist %>'
          src: [
            '*.{ico,png,txt}'
            '.htaccess'
            'images/{,*/}*.webp'
            '{,*/}*.html'
            'styles/fonts/{,*/}*.*'
            'vendors/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'
          ]
        ]
      styles:
        expand: true
        dot: true
        cwd: '<%= config.app %>/styles'
        dest: '.tmp/styles/'
        src: '{,*/}*.css'


    modernizr:
      devFile: '<%= config.app %>/vendors/modernizr/modernizr.js'
      outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js'
      files: [
        '<%= config.dist %>/scripts/{,*/}*.js'
        '<%= config.dist %>/styles/{,*/}*.css'
        '!<%= config.dist %>/scripts/vendor/*'
      ]
      uglify: true


    concurrent:
      server: [
#        'jade'
        'compass:server'
        'copy:styles'
      ]
      test: ['copy:styles']
      dist: [
#        'jade'
        'compass'
        'copy:styles'
        'imagemin'
        'svgmin'
      ]


  grunt.registerTask 'server', (target) ->
    if target is 'dist'
      return grunt.task.run([
        'build'
        'connect:dist:keepalive'
      ])
    grunt.task.run [
      'clean:server'
      'concurrent:server'
      'autoprefixer'
      'connect:livereload'
      'watch'
    ]
    return


  grunt.registerTask 'test', (target) ->
    if target isnt 'watch'
      grunt.task.run [
        'clean:server'
        'concurrent:test'
        'autoprefixer'
      ]
    grunt.task.run [
      'connect:test'
      'mocha'
    ]
    return


  grunt.registerTask 'build', [
    'clean:dist'
    'useminPrepare'
    'concurrent:dist'
    'autoprefixer'
    'concat'
    'cssmin'
    'uglify'
    'copy:dist'
    'modernizr'
    'rev'
    'usemin'
    'htmlmin'
  ]


  grunt.registerTask 'default', [
    'newer:jshint'
    'test'
    'build'
  ]


  return