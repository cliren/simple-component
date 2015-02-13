require('jquery');
require("bootstrap/dist/css/bootstrap.css");
require('bootstrap');

var MyComponent = require('./my-component');

require('domready')(function() {

  var myComponent = new MyComponent();

  var element = document.getElementById('myComponent');

  element.addEventListener("click", function() {
    console.log("Client is able to listen to click event of the component");
  });

  element.configure();

});
