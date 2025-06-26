import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SevenLiao",
  description: "提供手机可以点击跳转查看新闻，连续剧，综艺节目和手机上看CCTV电视直播的页面",
  
  // 多关键词配置（SEO优化）
  keywords: ["sevenliao", "13culb", "直播", "新闻", "看视频", "追剧", "看综艺", "看直播", "看体育赛事", "cctv", "SEO"],

  // 作者和版权信息
  authors: [
    { name: "张三", url: "https://example.com/author" },
    { name: "李四", url: "https://example.com/editor" }
  ],
  
  // 搜索引擎爬虫指令
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 图标配置
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    // other: {
    //   rel: "android-chrome-192x192",
    //   url: "/android-chrome-192x192.png",
    // },
  },
  
  // 其他meta标签
  manifest: "/site.webmanifest", // PWA配置
  themeColor: "#ffffff", // 主题色
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  
  // 自定义meta标签
  other: {
    // "msapplication-TileColor": "#da532c",
    // "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
