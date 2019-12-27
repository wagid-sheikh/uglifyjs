'use strict';
/* This is just get a reference to the file system module so that we can create minified version of source file in file system itself. */
let fs = require('fs'); 
/* Include uglify-js module for doing the actual minification work of source file */
let uj = require('uglify-js');
if (process.argv.length < 3){
	console.log('ERROR: Please pass name of JavaScipts seperated by space to minify using UglifyJS');
}
else{
	let myArgs = process.argv.slice(2); /* Convert Command Line File Name Arguments to array. No reason as such to convert to an array except for ease of use */
	for (let j = 0; j < myArgs.length; j++) {
		if (fs.existsSync(myArgs[j])) { /* checking to see if the given file exists of not */
			/* file exists, let's minify it */
			let result = uj.minify(myArgs[j], {
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
			fs.writeFile(myArgs[j].replace(".js","")+".min.js", result.code, function(err) { /* write minified file back to file system */
				(err)?console.log(err):console.log(myArgs[j]+" File was successfully minified to "+myArgs[j].replace(".js","")+".min.js");
			});
		}
		else{
			console.log(myArgs[j]+": no such file found");
		}
	}
}
