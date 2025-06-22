import { NextResponse } from 'next/server';
import type { ItemListResponse } from '@/types/item';

// 模拟数据
const mockItems = [
  {
    id: 1,
    title: '项目 1',
    description: '这是项目 1 的描述',
    createdAt: '2024-03-20T10:00:00Z',
  },
  {
    id: 2,
    title: '项目 2',
    description: '这是项目 2 的描述',
    createdAt: '2024-03-20T11:00:00Z',
  },
  {
    id: 3,
    title: '项目 3',
    description: '这是项目 3 的描述',
    createdAt: '2024-03-20T12:00:00Z',
  },
];

export async function GET() {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response: ItemListResponse = {
    items: mockItems,
    total: mockItems.length,
  };

  return NextResponse.json(response);
} 