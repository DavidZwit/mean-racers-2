module.exports = function(grunt) {
  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* For creating a server to test on */
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: ['tools', '_build/dev']
                }
            }
        },
        /* For typescript transpiling */
        ts: {
            options: {
                module: 'amd',
                target: 'es5',
                sourceMap: false,
                declaration: false,
                noImplicitAny: false,
                outFile: "_build/dev/game.js"
            },            
            dev: {
                src: ['ts/*.ts', 'tools/*.ts'],
                dest: '_build/dev/game.js'
            },
        },
        /* For live reloading */
        watch: {
            options: {
                livereload: true
            },

            typescript: {
                files: ['ts/**/*.ts'],
                tasks: ['ts:dev']
            },
            assets: {
                files: ['assets/**/*.*', 'templates/index.html'],
                tasks: ['copy:dev']
            }
        },
        copy: {
            dev: {
                files: [
                    {expand: true, cwd: 'assets', dest: '_build/dev/assets', src: ['**/*']},
                    {expand: true, cwd: 'templates', dest: '_build/dev', src: ['index.html']},
                    {expand: true, cwd: 'tools', dest: '_build/dev/tools', src: ['**/*']}
                ]
            }
        }
    });

    /* plugins */
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-ts');

    /* default tasks */
    grunt.registerTask('dev', [
        'copy:dev',
        'ts',
        'connect',
        'watch'
    ]);

};