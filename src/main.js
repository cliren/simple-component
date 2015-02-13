require("bootstrap/dist/css/bootstrap.css");
require('bootstrap');
require('jquery');
var MyComponent = require('./my-component');

$(function() {

  var myComponent = new MyComponent();

  var element = document.getElementById('myComponent');

  element.addEventListener("click", function() {
    console.log("Client is able to listen to click event of the component");
  });

  // TODO: doesn't work, why? Using skate master and running in latest Chrome which supports web components
  element.configure();

  //The following works
 /* setTimeout(function(){
    element.configure();
  }, 1);*/

});
