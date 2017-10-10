# Class 13 
### View [all class list](https://poloey.github.io/feni/)


# jQuery
jQuery is a javascript DOM library. The slogan of jQuery is "write less do more". Today We have learnt about 4 jquery function

* jQuery / $ (selector)
* html ('html content') / html()
* hide () / hide(time in milliseconds)
* on(event, function)

### to select a dom element 
~~~js
var heading = jQuery('h1');
or 
var heading = $('h1');
~~~

### to get html from dom
~~~js
var htmlContent = $('h1').html();
~~~

### to set html 
~~~js
var heading = jQuery('h1');
heading.html('some html content') 
~~~

### to hide some element in dom
~~~js
var heading = $('h1');
heading.hide();
heading.hide(3000);
~~~
Since jQuery Selector very small so we can keep those selector and action in same line. It will saves one line of extra code.
~~~js
$('h1').hide();
$('h1').hide(3000);
~~~
### Event in Jquery
To create a event we use `on` function which take 2 arguments. event and function 
~~~js
function rezwana () {
  alert('hello  rezwana');
}
$('h1').on('click', rezwana);
~~~
We can write anonymous(unnamed/closure/callback) function. like following
~~~js
$('h1').on('click', function () {
  alert('hello  rezwana');
});
~~~

### Some Common events in jquery
* Mouse Event 
  * click
  * dblclick
  * mouseenter
  * mouseleave
* Keyboard Event
  * keypress	
  * keydown	
  * keyup	
* Document Event
  * load
  * resize
* Form Event
  * submit	
  * change	
  * focus	
