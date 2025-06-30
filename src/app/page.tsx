'use client';

import { useEffect } from 'react';
import { navigationData, Category, Website } from '@/data/navigation';
import NavigationCard from '@/components/NavigationCard';
import Nav from '@/components/Nav';
// import type { Item, ItemListResponse } from '@/types/item';

export default function Home() {

  useEffect(()=> {
    // fetchItems();
  },[])

  // const fetchItems = async () => {
  //   try {
  //     const response = await fetch('/api/items');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch items');
  //     }
  //     const data: ItemListResponse = await response.json();
  //     console.log(data)
  //   } catch (err) {
  //     // setError(err instanceof Error ? err.message : 'An error occurred');
  //   } finally {
  //     // setLoading(false);
  //     console.log('find')
  //   }
  // }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Nav />
        
        <div className="space-y-8">
          {navigationData.map((category: Category) => (
            <section key={category.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.websites.map((website: Website) => (
                  <NavigationCard key={website.url} website={website} />
                ))}
              </div>
            </section>
          ))}

  
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                友情链接
              </h2>
              <div className="">
                <ul className="list">
                  <li style={{textAlign: 'left'}}>
                    <h3>1.搜索关注微信公众号：sevenliao，内容更精彩</h3>
                    <img src="http://sevenliao.com/images/7.jpg" className='sevenImg' />
                    <h3><a href="http://www.sevenliao.cn/">2.前端开发技术文章</a></h3>
                    <h3><a href="http://13culb.com/actgame/index.html">3.13Culb游戏中心</a></h3>
                    <h3>4.微信小程序《大头贴纸》，给自己图片美颜一下或者加个头像呗</h3>
                    <img src="http://sevenliao.com/images/dttz.jpg" className='sevenImg' />
                    <h3><a href="https://juejin.cn/user/2736016885557869" target="_blank">5.稀土掘金主页</a></h3>
                  </li>
                </ul>
              </div>
          </section>

        </div>
      </div>
    </main>
  );
}