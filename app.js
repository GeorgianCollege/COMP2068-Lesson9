var Person = (function () {
    //CONSTRUCTOR +++++++++++++++++++++++
    function Person(name) {
        this._name = name;
    }
    Person.prototype.sayName = function () {
        console.log("your name is: " + this._name);
    };
    return Person;
})();
var tom = new Person("Tom");
tom.sayName();
//# sourceMappingURL=app.js.map