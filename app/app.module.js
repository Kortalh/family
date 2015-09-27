'use strict';

var FAM = angular.module('FAM', [
	'ngRoute',
	'famControl',
	'famService'
]);

var famControl = angular.module('famControl', []);

var famService = angular.module('famService', ['ngResource']);