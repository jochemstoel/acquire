<img src="http://jochemstoel.github.io/img/acquire-img.jpg">

Acquire function allows you to synchronously and asynchronously initialize Javascript modules in your browser. It behaves like Node.js’s require(), meaning it exposes <i>module.exports</i>. It can be used to load modules from your local or external host.

## Include on page
```html
<script type="application/javascript" src="acquire.js"></script>
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
## Load modules from a different domain
Don’t forget to define the allowed request origin in your .htaccess file if you want to load packages from a different domain.

Add te following code to your .htaccess file to allow XMLHttpRequests from other domains. 
```conf
RewriteEngine on
Header add Access-Control-Allow-Origin "*"
Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
```

If you need to enable Apache Headers Module, open a terminal and type the following:
```bash
a2enmod headers
service apache2 restart
``` 
