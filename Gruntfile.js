module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: './lib', //ライブラリの配置先のディレクトリ
                    layout: 'byType', // レイアウト、説明は後述します
                    install: true, //grunt実行時にbower installを実行するかどうか
                    verbose: false, // ログの詳細を出すかどうか
                    cleanTargetDir: true, // targetDirを削除するかどうか
                    cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
                }
            }
        },
        sass: {
            dist: {
                expand: true,
                //SCSSファイルを指定
                cwd: 'css/_scss/',
                src: ['*.scss'],
                dest: './css/',
                ext: '.css'
            }
        },
        watch: {
            sass: {
                files: ['css/_scss/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
