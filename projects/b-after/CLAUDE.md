# CLAUDE.md（B-After）

## 概要

眉毛サロンのWordPressオリジナルテーマ。

- クライアント: S2NM株式会社 西村京将 (kyosuke.nishimura@s2nm.jp)
- 本番サイト: https://b-after.co.jp
- テストサイト: http://b-after.okudaya-dev.com
- ローカルURL: http://b-after.test
- ローカルパス: `/Users/okudamasaki/Local Sites/b-after/app/public/wp-content/themes/B-After`

## プロジェクト構成

```
B-After/
├── assets/       # CSS, JS, 画像
├── css/          # コンパイル済みCSS
├── sass/         # Sassソース
├── template/     # テンプレートパーツ
└── *.php         # WordPressテンプレート
```

## コーディングルール

**CSS/Sass:**
- BEMライクな命名（l- / c- / p- / u- プレフィックス）
- Sassのソースは `sass/` を編集 → `css/` にコンパイル
- sassコマンドが使えない場合はVSCodeのLive Sass Compilerを使う

**ブレークポイント:**
- Mobile: ≤768px
- Tablet: 769px-999px
- Desktop: ≥1000px

**PHP:**
- WordPress関数（esc_url(), esc_html() 等）を使うこと
- カスタムフィールドはSmart Custom Fields（SCF）を使用
- カスタム投稿タイプ: `column`（タクソノミー: `column_category`）

## Git

- GitHubリポジトリ: B-After（旧: B-After_old）
- 本番反映: SSH → `git reset --hard origin/main`

## ローカル開発の注意

### 無効化しておくプラグイン（フォルダ名末尾に `_` をつける）
- `wordfence_`
- `siteguard_`
- `google-site-kit_`
- `ewww-image-optimizer_`
- `optinmonster_`

### AIWPMインポート後の注意
- `all-in-one-seo-pack` と `wordfence` のvendorファイルが壊れることがある
- DBの `active_plugins` から直接無効化するか、再インストールする

### ローカルが重い・読み込まない場合
1. Localアプリを完全終了 → 再起動
2. Web serverをApacheに変更
3. セキュリティ系プラグインを無効化
4. DBの `wp_aioseo_blc_links` テーブルを空にする

## 実装済み内容

- 構造化データ: BeautySalon + AggregateRating、FAQPage、Article×Person（監修者）
- LPページ: `page-entry.php`（フランチャイズ募集LP）
  - Sass: `sass/entry.scss` → `css/entry.css`

## 関連案件（s2nm.jp）

- Google AdSense手動広告をコラムページに設置済み（冒頭・中盤・末尾の3箇所）
- 自動広告はOFF
- 広告ユニット名: `column-ads`（記事内フォーマット）
