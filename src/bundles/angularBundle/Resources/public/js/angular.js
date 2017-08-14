/*
 *
 *	ENTRY POINT WEBPACK DEMO BUNLDE
 *
 *
 *  Add your assets here with require  to an integration in webpack  bundle
 *
 *  require('jquery');
 *  require('../css/mycss.css')
 *
 */
require("../css/angular.css");

module.exports = function (){

	/*
 	 *	Class
	 *
	 *	Namespace angular client side
 	 *
 	 */
	const angular = class angular {

		constructor() {
		}
	};

	return new angular();
}();
