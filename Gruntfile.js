var pkg = require('./package.json');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

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
  grunt.registerTask('style', ['sass']);
}
