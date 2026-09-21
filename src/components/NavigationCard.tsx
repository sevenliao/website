'use client';

import { Website } from '@/data/navigation';

interface NavigationCardProps {
  website: Website;
}

export default function NavigationCard({ website }: NavigationCardProps) {
  const defaultIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236b7280'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E";

  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="navCardItem block p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
    >
      <div style={{display: 'flex', alignItems:'center', gap: '6px'}}>
        <img 
          style={{width: '16px', height:'16px', flexShrink: 0}} 
          src={website.logo || defaultIcon} 
          alt={website.name}
          onError={(e) => {e.currentTarget.src = defaultIcon}}
        />
        <span style={{fontWeight:'bold', fontSize: '12px'}} >{website.name}</span>
      </div>
      {/* {website.description && (
        <p className="navCardItem-desc text-xs mt-1">{website.description}</p>
      )} */}
    </a>
  );
} 