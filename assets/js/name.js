// ------------------------------
// 夢主名の保存・読み込み・置換
// ------------------------------

function getDreamName() {
  const match = document.cookie.match(/dreamName=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

function setDreamName(name) {
  document.cookie = "dreamName=" + encodeURIComponent(name) + "; path=/; max-age=31536000"; 
  // 1年保存
}

function replaceDreamName() {
  const name = getDreamName();
  if (!name) return;

  // text.html では置換しない
  if (location.pathname.includes("text.html")) return;

  document.body.innerHTML = document.body.innerHTML.replace(/{{dn1}}/g, name);
}


// ------------------------------
// 名前入力フォームがある場合の処理
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("dream-name");

  if (input) {
    // Cookie の値を反映
    input.value = getDreamName();

    // 入力が変わったら保存して即時反映
    input.addEventListener("input", () => {
      setDreamName(input.value);
      replaceDreamName();
    });
  }

});