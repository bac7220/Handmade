# claude-master

Web制作 おくだ屋の全プロジェクトを統括する司令塔リポジトリ。

各プロジェクトの状況管理・引き継ぎ・契約書類をここで一元管理する。
コードは各プロジェクトの個別リポジトリで管理し、このリポジトリでは編集・コミットは行わない。

---

## 管理しているプロジェクト

| プロジェクト | リポジトリ | 概要 |
|---|---|---|
| dawn-web-blog | bac7220/dawn-web-blog | 体験談ブログ（dawn-web.com） |
| web-okuda-blog | bac7220/web-okuda-blog | ポートフォリオサイト（web-okuda.com） |
| gpcorp-wp-theme | bac7220/gpcorp-wp-theme | GPcorp WPテーマ（クライアント案件） |
| trimmers-lab | bac7220/trimmers-lab | ドッグサロン トリるん。保守案件 |
| b-after | bac7220/B-After | 眉毛サロン B-After WPテーマ（S2NM株式会社） |
| BOWZ-BRAIN | bac7220/BOWZ-BRAIN | WPテーマ制作案件（S2NM株式会社・納品間近） |
| 母ECサイト | bac7220/haha-ec-site | 個人ECサイト（Next.js・稼働待ち） |

---

## リポジトリ構成

```
claude-master/
├── dashboard.md          # 全プロジェクトの状況一覧（司令塔の中心）
├── CLAUDE.md             # プロジェクト共通のClaude設定
└── projects/
    ├── b-after/
    │   ├── CLAUDE.md     # 環境情報・開発ルール
    │   └── contract/     # 契約書類一式
    ├── BOWZ-BRAIN/
    │   └── CLAUDE.md
    ├── dawn-web-blog/    # ※独自gitリポジトリ
    ├── gpcorp-wp-theme/  # ※独自gitリポジトリ
    ├── trimmers-lab/     # ※独自gitリポジトリ
    └── web-okuda-blog/   # ※独自gitリポジトリ
```

---

## 使い方

1. `dashboard.md` を開いて各プロジェクトの状況を確認する
2. 作業するプロジェクトフォルダを個別セッションで開く
3. 作業終了後、`dashboard.md` の「直近の動き」「次やること」を更新する
