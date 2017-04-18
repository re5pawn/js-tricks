// base class
var Machine = (function() {
  // private property
  var enabled = false;

  function Machine() {
    this.enable = function() {
      enabled = true;
    };

    this.disable = function() {
      enabled = false;
    };
  }

  Machine.prototype.getState = function() {
    return enabled;
  }

  return Machine;
})();

var CoffeeMachine = (function() {
  function CoffeeMachine(power) {
    // inherit
    Machine.call(this);
    // or
    // Machine.apply(this, arguments);

    var waterAmount = 0;
    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  }

  // if parent's methods are in the prototype
  // for get access to them:
  CoffeeMachine.prototype = Object.create(Machine.prototype);
  CoffeeMachine.prototype.constructor = Machine;

  return CoffeeMachine;
})();

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable(); // parent's method
coffeeMachine.setWaterAmount(100); // own method
coffeeMachine.disable(); // parent's method
coffeeMachine.getState(); // parent's prototype method
