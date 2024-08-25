type Member = {
    name: string;
    age: number;
    height: number;
    weight: number;
    label: string;
    country?: string;
};

const members: Member[] = [
    { name: "Roko", age: 26, height: 170.0, weight: 50.0, label: "88" },
    { name: "Nick", age: 28, height: 180.0, weight: 70.0, label: "1111" },
    { name: "Aya", age: 18, height: 160.0, weight: 40.0, label: "aaa" },
    { name: "John", age: 30, height: 160.0, weight: 60.0, label: "jjj" },
    { name: "Rui", age: 30, height: 170.0, weight: 60, label: "333" },
];

/**
 * 
 * filterメソッドを使って、labelに指定した文字列が含まれるMemberを返す
 * includesメソッドは、文字列が含まれているかどうかを確認する
 */

function searchKeyword(value: string): Member[] {
    return members.filter(m => m.label.includes(value));
}

function main() {
    let result = searchKeyword("aa");
    if (result.length > 0) {
        result.forEach(member => console.log(member));
    } else {
        console.log("Not Found");
    }

    // {name: Aya, age: 18, height: 160.0, weight: 40.0, label: aaa}

    result = searchKeyword("1");
    if (result.length > 0) {
        result.forEach(member => console.log(member));
    } else {
        console.log("Not Found");
    }

    // {name: Nick, age: 28, height: 180.0, weight: 70.0, label: 1111}
}

main();