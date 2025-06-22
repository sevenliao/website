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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Nav />
        
        <div className="space-y-8">
          {navigationData.map((category: Category) => (
            <section key={category.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.websites.map((website: Website) => (
                  <NavigationCard key={website.url} website={website} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}