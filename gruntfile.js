module.exports = function (grunt){

  grunt.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        files: [
          {
            cwd: 'src/',
            src: 'index.html',
            dest: 'build/',
            expand: true
          }
        ]
      },
      images: {
        files: [
          {
            cwd: 'src/img/',
            src: ['*.png'],
            dest: 'build/img/',
            expand: true
          }
        ]
      },
      fonts: {
        files: [
          {
            cwd: 'fonts/',
            src: ['*.ttf'],
            dest: 'build/fonts/',
            expand: true
          }
        ]
      },
      jquery: {
        files: [
          {
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.min.js'],
            dest: 'build/',
            expand: true
          },
          {
            cwd: '',
            src: ['jquery.preload.js'],
            dest: 'build/',
            expand: true
          }
        ]
      }
    },
    sass: {
      allSass: {
        files: {
          'build/styles.css' : 'src/sass/main.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['src/js/img-load.js', 'src/js/*.js'],
        dest: 'build/js/app.js'
      }
    },
    watch: {
      css: {
        files:['src/sass/*.scss'],
        tasks: ['sass']
      },
      html: {
        files:['src/index.html'],
        tasks: ['copy']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'sass', 'copy', 'concat']);

};
