module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat:{
            dist:{
                src:['js/main.js','js/generatePage.js','js/localStorage.js','js/resTest.js'],
                dest:'js/build/production.js',
            }
        },
        uglify:{
            build:{
                src:'js/build/production.js',
                dest:'js/build/production.min.js'
                }
            }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['concat','uglify']);    
}