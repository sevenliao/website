import { NavigationItem } from '../types/navigation';

export interface Website {
  name: string;
  url: string;
  description?: string;
  logo?: string;
}

export interface Category {
  title: string;
  type: string;
  websites: Website[];
}

export const navigationData: Category[] = [
  {
    title: "常用网站",
    type: "first",
    websites: [
      { name: "bilibili", url: "http://www.bilibili.com", description: "bilibili", logo: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/0.4201.png" },
      { name: "acfun", url: "https://www.acfun.cn", description: "acfun", logo: "https://dgss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/8.82dc79662c182e1571c41bffe915fd27.png" },
      { name: "直播吧", url: "https://www.zhibo8.cc", description: "直播吧", logo: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/80401.png" },
      { name: "百度", url: "https://www.baidu.com", description: "全球最大的中文搜索引擎", logo: "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2021-3-5/baidulogo.png" },
      { name: "京东", url: "https://www.jd.com", description: "中国最大的自营式电商企业", logo: "https://dgss2.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/aa0448bf686b54f648b869155388d64e.ico"  },
      { name: "淘宝", url: "https://www.taobao.com", description: "淘宝网", logo:"https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2020-04-09/9a95d3783ba0e6dea8bd386e2d0ad67f.png" },
      { name: "京东", url: "https://union-click.jd.com/jdc", description: "京东网", logo:"https://dgss2.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/aa0448bf686b54f648b869155388d64e.ico" },
    ],
  },
  {
    title: "社交媒体",
    type: "second",
    websites: [
      { name: "微博", url: "https://weibo.com", description: "中国最大的社交媒体平台" },
      { name: "知乎", url: "https://www.zhihu.com", description: "中国最大的问答社区" },
      { name: "抖音", url: "https://www.douyin.com", description: "中国领先的短视频平台" },
      { name: "小红书", url: "https://www.xiaohongshu.com", description: "生活方式分享平台" },
      { name: "腾讯视频", url: "https://v.qq.com", description: "中国领先的在线视频平台" },
      { name: "网易云音乐", url: "http://music.163.com", description: "网易云音乐" },
      { name: "汽车之家", url: "https://www.autohome.com.cn/shenzhen/", description: "汽车之家" },
      { name: "126邮箱", url: "http://mail.126.com/", description: "126邮箱" },
      { name: "西瓜视频", url: "https://www.ixigua.com/?wid_try=1/", description: "西瓜视频" },
      { name: "Github", url: "https://github.com/", description: "Github" },
    ],
  },
  {
    title: "新闻资讯",
    type: "second",
    websites: [
      { name: "cctv", url: "https://news.cctv.com", description: "cctv", logo: "https://dgss0.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/urlicon/13.1470.png" },
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