# 運用メモ

- ローカルで見る場合:
  - ブラウザで直接ファイルを開くと fetch が失敗する場合があります。ローカルサーバーを立ててください。
  - 例: Python があれば `python -m http.server 8000` をプロジェクトルートで実行し、 http://localhost:8000/ を開く
  - VSCode の拡張 Live Server でも簡単に確認できます。

- デプロイ:
  - GitHub Pages に push すれば公開できます（gh-pages ブランチまたは main ブランチ + GitHub Pages 設定）。
  - Netlify や Cloudflare Pages も簡単。

- 進化させる選択肢:
  - 慣れてきたら Eleventy, Hugo, Jekyll のような静的サイトジェネレータに移行するとテンプレートやビルドが楽になります。
  - まずはこの「クライアント側で Markdown をレンダリングする方法」で慣れるのがおすすめ。