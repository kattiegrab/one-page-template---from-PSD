module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	imagemin: {
	    dynamic: {
	        files: [{
	            expand: true,
	            cwd: 'images/',
	            src: ['images/*.{png,jpg,gif}'],
	            dest: 'images/build/'
	        }]
	    }
	},
  htmllint: {
    all: ["demos/**/*.html", "tests/**/*.html"]
  },
  jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    }
});
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'htmllint', 'jshint']);
};