// Promiseを返す関数
const promiseNew = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise");
    }, 1000);
  });
};
promiseNew().then((value) => {
  console.log(value);
});

// Promiseでfetchを使う
const url = "https://jsonplaceholder.typicode.com/posts";
const getPromise: Promise<Response> = fetch(url);
getPromise
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
  });

// fetchの使い方
// https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch