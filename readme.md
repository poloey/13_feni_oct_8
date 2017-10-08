# Class 01
### View [all class list](https://github.com/poloey/feni)

# jQuery
jQuery is a javascript DOM library. The slogan on jQuery is "write less do more". Today We learn about 4 jquery function

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
Since jQuery Selector is very smaller we should not using variable to store that. We can write directly like following
~~~js
$('h1').hide();
$('h1').hide(3000);
~~~
### to create a event we use `on` function which take 2 arguments. event and function 
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