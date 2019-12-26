'use strict';
/*
This is just get a reference to the file system module so that we can create minified version of source file in file system itself.
*/
var fs = require('fs'); 

/*
Include uglify-js module for doing the actual minification work of source file
*/
var uj = require('uglify-js');

if (process.argv.length < 3){
	console.log('ERROR: Please pass name of JavaScipts seperated by space to minify using UglifyJS');
}
else{
	var myArgs = process.argv.slice(2);
	console.log(myArgs);
	for (let j = 0; j < myArgs.length; j++) {
		//TODO: Remove console.log(j + ' -> ' + (process.argv[j]));
		//get a reference to the minified version of file1.js, although I can pass source file name as command line parameter and make this utility more generic
		var result = uj.minify(myArgs[j], {
			mangle: true,
			compress: {
				sequences: true,
				dead_code: true,
				conditionals: true,
				booleans: true,
				unused: true,
				if_return: true,
				join_vars: true,
				drop_console: true
			}});
		fs.writeFile(myArgs[j].replace(".js","")+".min.js", result.code, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log(myArgs[j]+" File was successfully minified.");
			}
		});
	}
}