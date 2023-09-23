var Animal = /** @class */ (function () {
    // constructorはクラスのインスタンスを作成するときに呼び出される
    function Animal(name) {
        // this.nameはインスタンスのプロパティで、nameは引数のプロパティ
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is ".concat(this.name);
    };
    return Animal;
}());
var a = new Animal("🐮さん");
console.log(a.sayHi()); // My name is 🐮さん
