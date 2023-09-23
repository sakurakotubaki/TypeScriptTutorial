class Animal {
    name: string;// 変数の型を指定
    // constructorはクラスのインスタンスを作成するときに呼び出される
    constructor(name: string) {
      // this.nameはインスタンスのプロパティで、nameは引数のプロパティ
        this.name = name;
    }
    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a = new Animal("🐮さん");
console.log(a.sayHi()); // My name is 🐮さん