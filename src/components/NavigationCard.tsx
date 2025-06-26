'use client';

import { Website } from '@/data/navigation';

// import '../styles/NavigationCard.sass'

interface NavigationCardProps {
  website: Website;
}

export default function NavigationCard({ website }: NavigationCardProps) {
  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className='navCardItem'
    >
      <div style={{display: 'flex', alignItems:'center'}}>
        {website.logo && <img style={{width: '16px', height:'16px', marginRight:'2px'}} src={website.logo} />}
        <span style={{fontWeight:'bold'}} >{website.name}</span>
      </div>
      {website.description && (
        <p className="navCardItem-desc">{website.description}</p>
      )}
    </a>
  );
  // return (
  //   <a
  //     href={website.url}
  //     target="_blank"
  //     rel="noopener noreferrer"
  //     className="block p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
  //   >
  //     <div style={{display: 'flex', alignItems:'center'}}>
  //       {website.logo && <img style={{width: '16px', height:'16px', marginRight:'2px'}} src={website.logo} />}
  //       <span style={{fontWeight:'bold'}} >{website.name}</span>
  //     </div>
  //     {website.description && (
  //       <p className="text-sm text-gray-600 dark:text-gray-400">{website.description}</p>
  //     )}
  //   </a>
  // );
} 