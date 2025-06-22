export interface Item {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export interface ItemListResponse {
  items: Item[];
  total: number;
} 