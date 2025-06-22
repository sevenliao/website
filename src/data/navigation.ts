import { NavigationItem } from '../types/navigation';

export interface Website {
  name: string;
  url: string;
  description?: string;
}

export interface Category {
  title: string;
  websites: Website[];
}

export const navigationData: Category[] = [
  {
    title: "常用网站",
    websites: [
      { name: "百度", url: "https://www.baidu.com", description: "全球最大的中文搜索引擎" },
      { name: "淘宝", url: "https://www.taobao.com", description: "中国最大的网上购物平台" },
      { name: "京东", url: "https://www.jd.com", description: "中国最大的自营式电商企业" },
      { name: "腾讯视频", url: "https://v.qq.com", description: "中国领先的在线视频平台" },
    ],
  },
  {
    title: "社交媒体",
    websites: [
      { name: "微博", url: "https://weibo.com", description: "中国最大的社交媒体平台" },
      { name: "知乎", url: "https://www.zhihu.com", description: "中国最大的问答社区" },
      { name: "抖音", url: "https://www.douyin.com", description: "中国领先的短视频平台" },
      { name: "小红书", url: "https://www.xiaohongshu.com", description: "生活方式分享平台" },
    ],
  },
  {
    title: "新闻资讯",
    websites: [
      { name: "新浪新闻", url: "https://news.sina.com.cn", description: "中国领先的新闻门户" },
      { name: "腾讯新闻", url: "https://news.qq.com", description: "中国最大的新闻资讯平台" },
      { name: "网易新闻", url: "https://news.163.com", description: "中国领先的新闻门户" },
      { name: "今日头条", url: "https://www.toutiao.com", description: "个性化资讯推荐平台" },
    ],
  },
];

export const navigationItems: NavigationItem[] = [
  {
    id: '1',
    title: '百度',
    logo: 'https://www.baidu.com/favicon.ico',
    url: 'https://www.baidu.com',
    category: '搜索引擎'
  },
  {
    id: '2',
    title: 'Google',
    logo: 'https://www.google.com/favicon.ico',
    url: 'https://www.google.com',
    category: '搜索引擎'
  },
  {
    id: '3',
    title: 'GitHub',
    logo: 'https://github.com/favicon.ico',
    url: 'https://github.com',
    category: '开发工具'
  },
  {
    id: '4',
    title: 'Stack Overflow',
    logo: 'https://stackoverflow.com/favicon.ico',
    url: 'https://stackoverflow.com',
    category: '开发工具'
  },
  {
    id: '5',
    title: '掘金',
    logo: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-icon/1.1.4/favicon.ico',
    url: 'https://juejin.cn',
    category: '技术社区'
  }
]; 