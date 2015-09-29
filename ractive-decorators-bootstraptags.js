/*

	ractive-decorators-bootstraptags
	================================

	Version 0.1

	Small decorator that enables Bootstrap Tags Input (https://github.com/timschlechter/bootstrap-tagsinput).

	To use, add decorator tagsinput. For example:
		
		<select multiple name="tags" decorator="tagsinput"></select>

	Parameters can be set either in template, added after decorator, or in javascript code:
	Template:
		<select multiple name="tags" decorator="tagsinput:{allowDuplicates: true, itemValue: 'value', itemText: 'text'}"></select>
	JS:
		Ractive.decorators.tagsinput.options = { allowDuplicates: true, itemValue: 'value', itemText: 'text' };

	If you need events, they are in another plugin (https://github.com/performante/ractive-events-bootstraptags)

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-decorators-bootstraptags.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-decorators-bootstraptags' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// AMD environment
    if (typeof define === 'function' && define.amd) {
        define([ 'ractive', 'jquery' ], factory);
    }

    // Common JS (i.e. node/browserify)
    else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
        factory(require('ractive'), require('jquery'));
    }

    // browser global
    else if (global.Ractive && global.jQuery) {
        factory(global.Ractive, global.jQuery);
    }

    else {
        throw new Error('Could not find Ractive or jQuery! It must be loaded before the ractive-decorators-ractive-decorators-bootstraptags plugin');
    }

}( typeof window !== 'undefined' ? window : this, function ( Ractive, $ ) {

	'use strict';

	/* plugin code goes here */

	var tagsinputDecorator = function (node, options) {
        if (typeof options === 'undefined') {
            options = tagsinputDecorator.options;
        }
        $(node).tagsinput(options);

        return {
            teardown: function () {
                $(node).tagsinput('destroy');
            }
        };
    };

    tagsinputDecorator.options = {};

    Ractive.decorators.tagsinput = tagsinputDecorator;

}));
