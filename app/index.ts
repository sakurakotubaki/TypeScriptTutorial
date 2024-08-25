const jsonData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "tag": {
            "label": "1111"
        },
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "tag": {
            "label": "2222"
        },
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "tag": {
            "label": "ffffff"
        },　
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "tag": {
            "label": "4444"
        },
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "tag": {
            "label": "5555"
        },
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "tag": {
            "label": "qqqqq"
        },
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "tag": {
            "label": "7777"
        },
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "tag": {
            "label": "8888"
        },
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "tag": {
            "label": "9999"
        },
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "tag": {
            "label": "1010"
        },
    }
];

// data type
interface Company {
    id: number;
    name: string;
    tag: {
        label: string;
    };
}

function getJsonData(jsonData: Company[], keyword: string): Company[] | string {
    const result = jsonData.filter(item => {
        return Object.values(item.tag).some(value => value.includes(keyword));
    });
    return result.length > 0 ? result : "No result found" as string;
}

console.log(getJsonData(jsonData, "1111"));