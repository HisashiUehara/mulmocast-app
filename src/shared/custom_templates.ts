import type { MulmoPresentationStyle } from "mulmocast";

/**
 * カスタムテンプレートの型定義
 */
export interface CustomTemplate {
  description: string;
  filename: string;
  presentationStyle: MulmoPresentationStyle;
  scriptName: string;
  systemPrompt: string;
  title: string;
}

/**
 * カスタムテンプレートの配列
 * ここに新しいテンプレートを追加していく
 */
export const customTemplates: CustomTemplate[] = [
  {
    // 侍の旅テンプレート - 地域を面白おかしく紹介
    filename: "samurai_travel",
    title: "Samurai Travel Guide",
    description: "A humorous samurai character introduces regions of Japan with entertaining stories",

    systemPrompt:
      "This template features a samurai guide who travels around Japan, introducing regions with humor and charm. " +
      "The samurai should be entertaining and informative, mixing historical facts with playful commentary. " +
      "Each beat should showcase a different aspect of the region: history, food, tourist spots, and local culture. " +
      "Image prompts should create a Japanese traditional art style with a touch of modern humor. " +
      "The tone should be light-hearted and engaging while being respectful of the culture.",

    scriptName: "samurai_travel.json",

    presentationStyle: {
      $mulmocast: {
        version: "1.1",
        credit: "closing"
      },

      // 横型動画設定（16:9アスペクト比）
      canvasSize: {
        width: 1920,
        height: 1080
      },

      // 音声設定
      audioParams: {
        audioVolume: 1,
        bgmVolume: 0.25,
        padding: 0.3,
        introPadding: 0.8,
        outroPadding: 1.2,
        closingPadding: 0.8,
        suppressSpeech: false
      },

      // 画像生成設定 - 日本風のスタイル
      imageParams: {
        style: "<style>Traditional Japanese art style with a modern twist. Think ukiyo-e meets contemporary illustration. Vibrant colors, detailed landscapes, and a touch of humor. The samurai character should be expressive and charming.</style>"
      },

      // 動画生成設定
      movieParams: {
        provider: "replicate",
        model: "bytedance/seedance-1-lite"
      },

      // スピーカー設定 - 侍ガイドキャラクター
      speechParams: {
        speakers: {
          SamuraiGuide: {
            voiceId: "onyx",
            displayName: {
              en: "Samurai Guide",
              ja: "侍ガイド"
            }
          }
        }
      },

      // 効果音設定
      soundEffectParams: {
        provider: "replicate"
      }
    }
  },

  // ここに追加のカスタムテンプレートを定義できます
  // 例:
  // {
  //   filename: "my_educational_template",
  //   title: "My Educational Template",
  //   description: "Template for educational content",
  //   ...
  // }
];

/**
 * カスタムテンプレートのプロンプトテキスト
 * filename をキーとして、AIに送るプロンプトテキストを定義
 */
export const customTemplateDataSet: Record<string, string> = {
  samurai_travel: `
Generate a Samurai Travel Guide script following this structure. Use the JSON template below.

\`\`\`JSON
{
  "$mulmocast": {
    "version": "1.1",
    "credit": "closing"
  },
  "title": "[REGION_NAME] の旅 - 侍ガイドが案内",
  "lang": "ja",
  "beats": [
    {
      "speaker": "SamuraiGuide",
      "text": "[OPENING: 侍が登場し、訪れる地域を紹介。ユーモアを交えた挨拶]",
      "imagePrompt": "[IMAGE: 侍ガイドが刀を持って笑顔で立っている。背景には訪れる地域の象徴的な風景。浮世絵風のスタイル]",
      "moviePrompt": "[MOVIE: Samurai guide waving cheerfully with a scenic regional landmark in the background]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[HISTORY: この地域の歴史や文化的背景を面白おかしく解説]",
      "imagePrompt": "[IMAGE: 歴史的な建物や遺跡。侍ガイドが説明しているシーン。伝統的な日本画スタイル]",
      "moviePrompt": "[MOVIE: Historical site with samurai guide gesturing animatedly while explaining]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[FOOD: 地域の名物料理を紹介。食べる時の面白いリアクション]",
      "imagePrompt": "[IMAGE: 美味しそうな地域の名物料理。侍ガイドが箸を持って驚きの表情で料理を見ている]",
      "moviePrompt": "[MOVIE: Samurai guide tasting local food with exaggerated delighted reaction]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[SPOT_1: 主要な観光スポットの紹介。その場所の魅力を楽しく伝える]",
      "imagePrompt": "[IMAGE: 地域の有名な観光スポット。侍ガイドがそこで記念撮影をしているかのようなポーズ]",
      "moviePrompt": "[MOVIE: Samurai guide exploring the tourist spot with enthusiasm]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[SPOT_2: もう一つの観光スポットや体験を紹介。ユーモアを加えて]",
      "imagePrompt": "[IMAGE: 別の観光スポットや体験施設。侍ガイドが楽しそうに体験している様子]",
      "moviePrompt": "[MOVIE: Samurai guide trying a local activity or visiting another attraction]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[LOCAL_CULTURE: 地元の人々や文化との交流。温かいエピソード]",
      "imagePrompt": "[IMAGE: 地元の人々と侍ガイドが交流している温かいシーン。笑顔があふれる]",
      "moviePrompt": "[MOVIE: Samurai guide interacting warmly with local people]"
    },
    {
      "speaker": "SamuraiGuide",
      "text": "[CLOSING: 旅の感想をまとめる。視聴者にも訪れることを勧める楽しいメッセージ]",
      "imagePrompt": "[IMAGE: 夕日を背景に、侍ガイドが満足そうに笑顔で立っている。地域の美しい風景]",
      "moviePrompt": "[MOVIE: Samurai guide waving goodbye with a beautiful sunset and regional landscape]"
    }
  ],
  "canvasSize": { "width": 1920, "height": 1080 },
  "movieParams": {
    "provider": "replicate",
    "model": "bytedance/seedance-1-lite"
  },
  "imageParams": {
    "style": "<style>Traditional Japanese art style with a modern twist. Think ukiyo-e meets contemporary illustration. Vibrant colors, detailed landscapes, and a touch of humor. The samurai character should be expressive and charming.</style>"
  }
}
\`\`\`

Important notes:
- 侍ガイドのキャラクターは親しみやすく、ユーモアがあること
- 各地域の特徴（歴史、食、観光、文化）をバランスよく紹介
- 画像プロンプトは日本の伝統的な芸術スタイルを意識
- ビート数は6-8個程度が推奨
- 全体のトーンは明るく楽しく、視聴者を旅に誘うような雰囲気
- 地域の魅力を尊重しつつ、エンターテイメント性も重視
`,

  // 追加のテンプレートのプロンプトをここに定義
  // my_educational_template: "..."
};

/**
 * カスタムテンプレートの画像データセット
 * SVG形式のData URLを使用してサムネイル画像を提供
 */
export const customTemplateImageDataSet: Record<string, string> = {
  samurai_travel: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='150' fill='url(%23bg)' /%3E%3Cpath d='M0 100 L50 70 L80 85 L120 60 L150 80 L200 70 L200 150 L0 150 Z' fill='%234a5568' opacity='0.6'/%3E%3Cpath d='M0 110 L40 85 L70 95 L110 75 L140 90 L170 80 L200 85 L200 150 L0 150 Z' fill='%232d3748' opacity='0.8'/%3E%3Ccircle cx='170' cy='30' r='18' fill='%23fbbf24' opacity='0.9'/%3E%3Cg transform='translate(70, 60)'%3E%3Ccircle cx='30' cy='10' r='8' fill='%231a202c'/%3E%3Crect x='27' y='2' width='6' height='6' rx='3' fill='%231a202c'/%3E%3Crect x='22' y='18' width='16' height='25' rx='2' fill='%232d3748'/%3E%3Cline x1='24' y1='20' x2='24' y2='40' stroke='%234a5568' stroke-width='1'/%3E%3Cline x1='36' y1='20' x2='36' y2='40' stroke='%234a5568' stroke-width='1'/%3E%3Crect x='15' y='22' width='7' height='3' rx='1.5' fill='%232d3748'/%3E%3Crect x='38' y='22' width='7' height='3' rx='1.5' fill='%232d3748'/%3E%3Crect x='40' y='15' width='25' height='2' rx='1' fill='%23cbd5e0'/%3E%3Crect x='40' y='14' width='4' height='4' fill='%234a5568'/%3E%3Crect x='24' y='43' width='5' height='15' rx='1' fill='%231a202c'/%3E%3Crect x='31' y='43' width='5' height='15' rx='1' fill='%231a202c'/%3E%3C/g%3E%3Ctext x='100' y='135' font-family='Arial, sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='white'%3E侍の旅%3C/text%3E%3Ctext x='100' y='148' font-family='Arial, sans-serif' font-size='10' text-anchor='middle' fill='white' opacity='0.9'%3ESamurai Travel%3C/text%3E%3C/svg%3E`
};
