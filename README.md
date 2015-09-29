# Ractive.js bootstraptags decorator plugin

*Find more Ractive.js plugins at [docs.ractivejs.org/latest/plugins](http://docs.ractivejs.org/latest/plugins)*

[See the demo here.](http://performante.github.io/ractive-decorators-bootstraptags/)

## Usage

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-decorators-bootstraptags.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-decorators-bootstraptags' );
```

Small decorator that enables [Bootstrap Tags Input](https://github.com/timschlechter/bootstrap-tagsinput).

To use, add decorator tagsinput. For example:
    
```html
<select multiple name="tags" decorator="tagsinput"></select>
```

Parameters can be set either in template, added after decorator, or in javascript code:
Template:
```html
<select multiple name="tags" decorator="tagsinput:{allowDuplicates: true, itemValue: 'value', itemText: 'text'}"></select>
```
JS:
```js
Ractive.decorators.tagsinput.options = { allowDuplicates: true, itemValue: 'value', itemText: 'text' };
```

If you need events, they are in [another plugin](https://github.com/performante/ractive-events-bootstraptags)



## License

Copyright (c) 2015 Mateusz Cyraniak. Licensed MIT

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.
