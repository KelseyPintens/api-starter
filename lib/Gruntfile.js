
module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			"../dist/app.js": ["../js/main.js"]
		},
		jshint: {
			options: {
				predef: ["document", "console"],
				esnext: true, 
                globalstrict: true,
                globals: {"$": true},
                browserify: true,
                debug: true
            },
            files: ["../js/**/*.js"]
		},
		sass: { 
			dist: {
				files: {
					"../css/styles.css": "../scss/styles.scss"
				}
			}
		},
		watch: { //automatically watch for changes
			javascripts: {
				files: ["../js/**/*.js"],
				tasks: ["jshint"]
			},
			sass: {
				files: ["../scss/**/*.scss"],
				tasks: ["sass"]
			},
            
			browserify: {
				files: ["../js/*.js"],
				tasks: ["browserify"]
			}
		}
	});
    
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.registerTask("default", ["jshint", "sass", "browserify", "watch"]); // put browserify
    
};
