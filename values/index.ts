// bool型
// true/falseのみを許容する型
let flag: boolean = true;

// number型。整数、浮動小数点数、16進数、2進数、8進数が使用可能
// 数字を扱う型
let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b000;
let octal: number = 0o123;

// string型
// 文字列を扱う型
let color: string = "blue";

// array型
// 配列を扱う型
// 型を書いた後にブラケット[]を使用する
let list: number[] = [1, 2, 3];

// array型（別の書き方）
// ジェネリクス<>を使用する
let list2: Array<number> = [1, 2, 3];

// tuple型
// 複数の型を持つ配列を扱う型
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // NG

// any型
// 何でも扱える型。型チェックを無効にする。基本使わない
let notSure: any = 4;

// unknown型
// anyと同じく何でも扱える型。anyよりも厳密
let notSure2: unknown = 4;

// void型
// 何も返さない関数の戻り値の型。anyの逆で型がないことを表す
function warnUser(): void {
  console.log("This is my warning message");
}

// null/undefined型
// TypeScriptではnullとundefinedはそれぞれの型を持つ。単体では役に立たない
let u: undefined = undefined;
let n: null = null;

// never型
// 決して返らない関数の戻り値の型
function error(message: string): never {
  throw new Error(message);
}

// object型
// 非プリミティブ型を表す型。つまり、number, string, boolean, bigint, symbol, null, or undefined以外の型
interface Object {
  name: string;
  age: number;
}
let objectType: Object;
