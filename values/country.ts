function main() {
  const members = [
    { name: "Roko", age: 26, height: 170.0, weight: 50.0 },
    { name: "Mako", age: 24, height: 160.0, weight: 45.0 },
    { name: "Miki", age: 22, height: 150.0, weight: 40.0 },
    { name: "Nana", age: 20, height: 140.0, weight: 35.0 },
    { name: "Yuko", age: 18, height: 130.0, weight: 30.0 },
    { name: "Yoko", age: 16, height: 120.0, weight: 25.0 },
    { name: "Mako", age: 14, height: 110.0, weight: 20.0 },
    { name: "Yuko", age: 12, height: 100.0, weight: 15.0, country: "Japan" },
  ];

  /**
   * @param {Member[]} members
   * data type Member[] は、以下のように定義されています
   * type Member = {
   *    name: string;
   *    age: number;
   *    height: number;
   *    weight: number;
   *    country?: string;
   * };
   * @param {boolean} hasOwnProperty
   *  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   *  hasOwnProperty() メソッドは、指定されたプロパティがオブジェクトに存在するかどうかを返します。
   */

  type Member = {
    name: string;
    age: number;
    height: number;
    weight: number;
  };

  const keyCountry: Member[] = [];

  // for文でmembersをloop
  for (const m of members) {
    console.log(m);
    // {name: Roko, age: 26, height: 170.0, weight: 50.0}
    // {name: Mako, age: 24, height: 160.0, weight: 45.0}
    // {name: Miki, age: 22, height: 150.0, weight: 40.0}
    // {name: Nana, age: 20, height: 140.0, weight: 35.0}
    // {name: Yuko, age: 18, height: 130.0, weight: 30.0}
    // {name: Yoko, age: 16, height: 120.0, weight: 25.0}
    // {name: Mako, age: 14, height: 110.0, weight: 20.0}
    // {name: Yuko, age: 12, height: 100.0, weight: 15.0, country: Japan}
    console.log("-----------------------------------------------------");
    // Objectの中にcountryというkeyがあるかどうかを確認
    if (m.hasOwnProperty("country")) {
      // keyCountryにcountryというkeyがあるMapを追加
      keyCountry.push(m);
    }
  }

  console.log(keyCountry);
  // [{name: Yuko, age: 12, height: 100.0, weight: 15.0, country: Japan}]
}

main();
