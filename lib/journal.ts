export type JournalArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  images: string[];
  content: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "yumenomori",
    title: "益子町「カフェ ゆめの杜」で、私が作った器をお使いいただいています",
    date: "2026.11.18",
    category: "日々の暮らし",
    thumbnail: "/yumenomori-photos/yumenomori-01.jpg",
    images: [
      "/yumenomori-photos/yumenomori-01.jpg",
      "/yumenomori-photos/yumenomori-02.jpg",
    ],
    content: [
      "栃木県益子町にある「カフェ ゆめの杜」様に、私が制作した器をお使いいただいています。",
      "今回、実際に器を使っていただいている様子を写真に収めました。",
      "コーヒーと一緒に並ぶケーキやデザートが、私の作った器に盛り付けられている様子を見ることができ、とても嬉しく思います。",
      "器は、料理や飲み物を受け止めるための道具でありながら、そこにあるだけで食事やひとときの雰囲気を少し変えてくれるものだと思っています。",
      "自分の手で作った器が、お店を訪れる方々の時間の中で使われていること。そのような場面に出会えることは、作り手として大きな喜びです。",
      "このようなご縁をいただき、ありがとうございます。",
      "益子町を訪れた際には、ぜひ「カフェ ゆめの杜」様に足を運んでみてください。",
    ],
  },
  {
    slug: "wasyoku-soma",
    title: "益子町「和食 杣」で、私が作った器をお使いいただいています",
    date: "2026.11.17",
    category: "日々の暮らし",
    thumbnail: "/wasyoku-soma-photos/soma-01.jpg",
    images: [
      "/wasyoku-soma-photos/soma-01.jpg",
      "/wasyoku-soma-photos/soma-02.jpg",
      "/wasyoku-soma-photos/soma-03.jpg",
      "/wasyoku-soma-photos/soma-04.jpg",
      "/wasyoku-soma-photos/soma-05.jpg",
    ],
    content: [
      "栃木県益子町にある「和食 杣」様に、私が制作した器をお使いいただいています。",
      "今回、実際にお店へ伺い、料理とともに器が使われている様子を撮影させていただきました。",
      "釉薬の異なる3種類の中鉢を納品させていただきました。",
      "角煮を盛った時をイメージして作らせていただきました。緑や淡い白の釉薬が重なり合う器に、料理の色合いがよく映えていて良かったです。",
      "料理が盛り付けられ、食卓に並び、使う人の手に触れることで、自分が作った器が、日々の食事の中で自然に使われていること。その一つひとつの積み重ねが、これからもものづくりを続けていく上での励みになっています。",
      "角煮の他にも刺身や煮魚、焼き魚、揚げ物、何をいただいても絶品です。益子町を訪れた際には、ぜひ「和食 杣」様に足を運んでみてください。",
      "このようなご縁をいただき、ありがとうございます。",
    ],
  },
];