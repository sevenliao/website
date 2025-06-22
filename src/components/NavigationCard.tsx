'use client';

import { Website } from '@/data/navigation';

interface NavigationCardProps {
  website: Website;
}

export default function NavigationCard({ website }: NavigationCardProps) {
  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{website.name}</h3>
      {website.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{website.description}</p>
      )}
    </a>
  );
} 