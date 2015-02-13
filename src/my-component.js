require('skate');

module.exports = skate('simple-component', {
  created: function(element) {
    element.textContent = 'I am a simple component!';
  },

  attached: function(element) {
    console.log("Simple component: attach called");
  },

  events: {
    'click': function(element, eventObject) {
      console.log("Simple component: click event fired");
    }
  },
  prototype: {
    configure: function() {
      console.log("Simple component: custom configure method called");
    }
  }
});
