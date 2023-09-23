window.addEventListener("DOMContentLoaded", function() {
  const countUp: HTMLElement | null = document.getElementById("countUp");
  const count: HTMLElement | null = document.getElementById("count");
  let num = 0;
  // ?をつけることでnullチェックを行う
  countUp?.addEventListener("click", function() {
    console.log("トランスパイルしたコード");
    num++;
    // nullチェックを行う
    if (count !== null) {
      count.textContent = num.toString();
    }
  });
});

// クリックするとブラウザーをリロードする
window.addEventListener("DOMContentLoaded", function() {
  const reload: HTMLElement | null = document.getElementById("reload");
  reload?.addEventListener("click", function() {
    window.location.reload();
  });
});