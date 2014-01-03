var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc: {
      dist: {
        src: [
            'app/**/*.js'
        ],
        dest: 'doc'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: false,
          data: {
            debug: false,
          }
        },
        files: [
          {
            expand: true, 
            cwd: 'ui/',
            src: "**/*.jade",
            dest: "ui/",
            ext: ".html",
          }
        ]
      }
    },
    clean: {
      html: {
        src: [
          'ui/**/*.html'
        ]
      }      
    }
  });


  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['jade','jsdoc']);
};