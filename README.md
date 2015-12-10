# Acquire()

Acquire function allows you to synchronously and asynchronously initialize Javascript modules in your browser. It behaves like Node.js’s require(), meaning it exposes <i>module.exports</i>. It can be used to load modules from your local or external host. Don’t forget to define the allowed request origin in your .htaccess file if you want to load packages from a different domain.

## Include on page
```html
&lt;script type="application/javascript" src="acquire.js"&gt;&lt;/script&gt;
```

## Synchronous
```javascript
/* Synchronous XMLHttp requests are deprecated. */
var myfunction = acquire('somefile');
```

## aSynchronous
```javascript
acquire('somefile', function(exp)
{
  exp('There is no spoon.'); // exp equals module.exports
});
```

## Expose to window
Expose asynchronously loaded modules to the global window object.

```javascript
acquire('somefile', function(exp)
{
  window.mymodule = exp;
});
``` 
