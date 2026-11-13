# Vineyard Ministry Church | 葡萄園事工教會

葡萄園事工教會官方網站。

> 我們盼望以聖經真理為根基，傳揚耶穌基督並祂十字架的救恩，呼召人回轉歸向神，在基督裡得著新的生命。

## 技術

- [Astro](https://astro.build) 7（靜態網站）
- TypeScript、自訂 CSS
- 字型：Noto Serif TC / Noto Sans TC / Cormorant Garamond（Google Fonts）

## 開發

需要 Node.js 22.12 以上。

```bash
npm install
npm run dev      # 本機開發伺服器
npm run build    # 型別檢查並建置到 dist/
npm run lint     # ESLint
npm run preview  # 預覽建置結果
```

## 要修改內容時

| 想改的內容 | 檔案 |
| --- | --- |
| 教會名稱、事工介紹、聚會時間、地址、電話、Email | `src/data/site.json` |
| 首頁：信仰重點、常見問題 | `src/pages/index.astro` |
| 第一次來訪步驟 | `src/components/FirstVisitSteps.astro` |
| 各項事工（主日崇拜、查經與禱告、福音與關懷） | `src/content/ministries/*.md` |
| 原創詩歌清單（首頁精選前 6 首、`/songs/` 全部） | `src/data/songs.json`：新歌加在最上面，`id` 是 YouTube 網址 `watch?v=` 後面那段 |
| 配色與字型 | `src/styles/global.css` 開頭的 `:root` |
| Logo | `src/assets/images/logo.png`；網站小圖示在 `public/favicon.png`、`public/apple-touch-icon.png` |

`site.json` 裡電話、Email、地址留空時，網站會顯示「即將公布」，填入後就會自動出現。

新增一項事工：在 `src/content/ministries/` 複製一個 `.md` 檔並修改內容，網站會自動產生 `/ministries/<檔名>/` 頁面並列在首頁。
