window.addEventListener("DOMContentLoaded", function () {
    var countUp = document.getElementById("countUp");
    var count = document.getElementById("count");
    var num = 0;
    // ?をつけることでnullチェックを行う
    countUp === null || countUp === void 0 ? void 0 : countUp.addEventListener("click", function () {
        console.log("トランスパイルしたコード");
        num++;
        // nullチェックを行う
        if (count !== null) {
            count.textContent = num.toString();
        }
    });
});
// クリックするとブラウザーをリロードする
window.addEventListener("DOMContentLoaded", function () {
    var reload = document.getElementById("reload");
    reload === null || reload === void 0 ? void 0 : reload.addEventListener("click", function () {
        window.location.reload();
    });
});
