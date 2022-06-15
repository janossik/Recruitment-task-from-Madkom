export interface BookProps {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

export interface ResultOrder {
  data?: {
    id: number;
    order: {
      id: number;
      quantity: number;
    }[];
    first_name: string;
    last_name: string;
    city: string;
    zip_code: string;
  };
  error?: {
    message: string;
    violations: {
      first_name?: string;
      last_name?: string;
      city?: string;
      zip_code?: string;
    };
  };
}

export interface BookInCartProps {
  quantity: number;
  book: BookProps;
}
export interface BooksInCartProps {
  [key: string | number]: BookInCartProps;
}
