import { navigationData, Category, Website } from '@/data/navigation';
import NavigationCard from '@/components/NavigationCard';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Nav />
        
        <div className="space-y-6">
          {navigationData.map((category: Category) => (
            <section key={category.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {category.title}
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2">
                {category.websites.map((website: Website) => (
                  <NavigationCard key={website.url} website={website} />
                ))}
              </div>
            </section>
          ))}


          {/* <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                友情链接
              </h2>
              <div className="text-sm space-y-2">
                <ul className="list">
                  <li style={{textAlign: 'left'}}>
                    <h3>1.搜索关注微信公众号：sevenliao，内容更精彩</h3>
                    <img src="http://sevenliao.com/images/7.jpg" className='sevenImg' alt="sevenliao QR code" />
                    <h3><a href="http://www.sevenliao.cn/">2.前端开发技术文章</a></h3>
                    <h3><a href="http://13culb.com/actgame/index.html">3.13Culb游戏中心</a></h3>
                    <h3>4.微信小程序《大头贴纸》，给自己图片美颜一下或者加个头像呗</h3>
                    <img src="http://sevenliao.com/images/dttz.jpg" className='sevenImg' alt="dttz QR code" />
                    <h3><a href="https://juejin.cn/user/2736016885557869" target="_blank">5.稀土掘金主页</a></h3>
                  </li>
                </ul>
              </div>
          </section> */}

        </div>
      </div>
    </main>
  );
}