export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'created_at' | 'rating' | 'price' | 'name';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Latest arrivals',
  slug: null,
  sortKey: 'created_at',
  reverse: true
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Top Rated', slug: 'rating', sortKey: 'rating', reverse: false },
  { title: 'Name', slug: 'name', sortKey: 'name', reverse: false },
  { title: 'Price: Low to high', slug: 'price', sortKey: 'price', reverse: false },
  { title: 'Price: High to low', slug: '-price', sortKey: 'price', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
