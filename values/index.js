// bool型
// true/falseのみを許容する型
var flag = true;
// number型。整数、浮動小数点数、16進数、2進数、8進数が使用可能
// 数字を扱う型
var decimal = 256;
var hex = 0xfff;
var binary = 0;
var octal = 83;
// string型
// 文字列を扱う型
var color = "blue";
// array型
// 配列を扱う型
// 型を書いた後にブラケット[]を使用する
var list = [1, 2, 3];
// array型（別の書き方）
// ジェネリクス<>を使用する
var list2 = [1, 2, 3];
// tuple型
// 複数の型を持つ配列を扱う型
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // NG
// any型
// 何でも扱える型。型チェックを無効にする。基本使わない
var notSure = 4;
// unknown型
// anyと同じく何でも扱える型。anyよりも厳密
var notSure2 = 4;
// void型
// 何も返さない関数の戻り値の型。anyの逆で型がないことを表す
function warnUser() {
    console.log("This is my warning message");
}
// null/undefined型
// TypeScriptではnullとundefinedはそれぞれの型を持つ。単体では役に立たない
var u = undefined;
var n = null;
// never型
// 決して返らない関数の戻り値の型
function error(message) {
    throw new Error(message);
}
var objectType;
