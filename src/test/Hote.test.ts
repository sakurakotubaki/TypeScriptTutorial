import { Hoge } from "../app/Hoge";

describe("Hogeのテスト", ()=>{

  test("first test", ()=> {
    const result = new Hoge().getFuga();
    // これは名前がfugaならテストが通るコード
    expect(result).toBe("fuga");
  });

});