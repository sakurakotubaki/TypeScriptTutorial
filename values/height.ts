function main() {
    type Member = {
        name: string;
        age: number;
        height: number;
        weight: number;
        country?: string
    }

    const members: Member[] = [
        { name: "Aya", age: 18, height: 160.0, weight: 40.0 },
        { name: "John", age: 20, height: 160.0, weight: 60.0, country: "🇺🇸" },
        { name: "Rui", age: 50, height: 170.0, weight: 60.0, country: "🇬🇧" },
    ];

    /**
     * sortメソッドを使って、heightが大きい順に並べる
     * 同じなら、ageが大きい順に並べる
     * b.height - a.height は、heightが大きい順に並べる
     */

    // sortメソッドを使って、heightが大きい順に並べる
    // 同じなら、ageが大きい順に並べる
    members.sort((a, b) => {
        const heightComparison = b.height - a.height;
        // !== 0 は、heightComparisonが0でない場合
        if (heightComparison !== 0) return heightComparison;
        return b.age - a.age;
    });

    console.log(members);

    // [{name: Rui, age: 50, height: 170.0, weight: 60.0, country: 🇬🇧}, {name: John, age: 20, height: 160.0, weight: 60.0, country: 🇺🇸}, {name: Aya, age: 18, height: 160.0, weight: 40.0}]
}

main();