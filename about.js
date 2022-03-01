var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.cardholder'
})
.setClassToggle('.cardholder', 'show')
.addTo(controller);

