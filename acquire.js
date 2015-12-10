/* 
 * @package acquire
 * @version 0.2
 * @author Jochem Stoel (http://jochemstoel.github.io/)
 * @url https://github.com/jochemstoel/acquire
 * @license Don't involve me.
 */
 
function acquire($lib, $fn) 
{
  var xhr, module, async;
  module = { };
  async = false;
  if (typeof $fn == 'function') 
  {
    async = true;
  }
  xhr = new XMLHttpRequest();
  xhr.open('GET', '/' + $lib + '.js', async);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () 
  {
        if (xhr.readyState === 4 && xhr.status == 200) 
        {
            if (async) 
            { 
              eval(xhr.responseText);
                return $fn(module.exports);
            } 
        }
    };
  xhr.send('lib='+$lib);
  if (!async) 
  {
    eval(xhr.responseText);
    return module.exports;
  }
}