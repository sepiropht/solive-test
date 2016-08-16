var pkg = require('./package.json');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'public/scripts/core.min.js' : 'spublic/cripts/core.js',
          'public/scripts/lib.min.js' : 'public/scripts/lib.js',
        }
      }
    },
    
    concat: {
      core: {
        src: ['public/app.js', 'public/scripts/modules/*/*.app.js', 'public/scripts/modules/*/*.controller.js',
        'public/scripts/modules/*/*.factories.js', 'public/scripts/modules/*/*.directives.js', 'public/scripts/modules/*/*.filters.js'],
        dest: 'public/scripts/core.js',
      },
      lib: {
        src: ['public/scripts/lib/angular.js', 'public/scripts/lib/*.js'],
        dest: 'public/scripts/lib.js'
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/assets/sass',
          src: ['styles.scss', 'modules/*.scss'],
          dest: 'public/assets/styles',
          ext: '.css'
        }]
      }
    },

    watch: {
      css: {
        files: ['public/assets/sass/*.scss', 'public/assets/sass/modules/*.scss'],
        tasks: ['sass'],
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('javascript', ['concat:core', 'concat:lib', 'uglify']);
  grunt.registerTask('js-concat', ['concat:core', 'concat:lib']);
  grunt.registerTask('js-uglify', ['uglify']);
  grunt.registerTask('style', ['sass']);
}