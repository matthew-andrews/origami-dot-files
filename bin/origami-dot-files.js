#!/usr/bin/env node

'use strict';

require('es6-promise').polyfill();
var denodeify = require('denodeify');
var exec = denodeify(require('child_process').exec);

var argv = require('minimist')(process.argv.slice(2));

if (argv._.indexOf('install') !== -1) {

	// -g downloads to home directory (*nix only)
	var directory = argv._.indexOf('-g') ? process.env.HOME : promise.cwd();
	console.log("Downloading .jshintrc & .editorconfig to " + directory);
	Promise.all([
		exec('curl https://raw.githubusercontent.com/Financial-Times/origami-build-tools/master/config/jshint.json -o .jshintrc', { cwd: directory }),
		exec('curl https://raw.githubusercontent.com/Financial-Times/origami-build-tools/master/config/.editorconfig -o .editorconfig', { cwd: directory })
	])
		.then(function() {
			console.log("Updated .jshintrc & .editorconfig");
		}, function(error) {
			console.log("An error has occurred: ", error);	
		});
}
