'use strict';

const   gulp        = require('gulp'),
        browserSync = require('browser-sync').create();

// // // // // // //
//
//  Browser-Sync
//
// // // // // // //
function browser_sync() {
    browserSync.init(null, {
        proxy: "display-board.test",
        port: 7102,
        notify: {
            styles: ['opacity: 0', 'position: absolute']
        },
        files: ['html/**/*.php','html/**/*.html','build/**/*' ]
    });
}


module.exports = { browser_sync };
