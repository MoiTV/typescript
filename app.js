var Animal = /** @class */ (function() {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function() {
        return 'Hello ' + this.sing;
    };
    return Animal;
})();
var lion = new Animal('rarraar');
console.log(lion.greet());